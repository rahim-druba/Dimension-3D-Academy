import * as THREE from 'three';

export interface ModelInfo {
  name: string;
  area: number;
  volumeApprox: number;
  vertices: number;
  faces: number;
  triangles: number;
  meshes: number;
  materials: number;
  dimensions: { width: number; height: number; depth: number };
  bboxDiagonal: number;
}

const cache = new Map<string, Promise<ModelInfo>>();

export async function computeModelInfo(glbPath: string, modelName: string): Promise<ModelInfo> {
  const key = `${glbPath}::${modelName}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const promise = (async () => {
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
    const loader = new GLTFLoader();

    const gltf = await new Promise<{ scene: THREE.Object3D }>((resolve, reject) => {
      loader.load(glbPath, resolve as any, undefined, reject);
    });

    const scene = gltf.scene;
    const materialIds = new Set<string>();

    let totalArea = 0;
    let totalVolumeApprox = 0;
    let totalVertices = 0;
    let totalFaces = 0;
    let totalTriangles = 0;
    let meshCount = 0;

    const bbox = new THREE.Box3().setFromObject(scene);
    const size = bbox.getSize(new THREE.Vector3());
    const diag = size.length();

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh) || !child.geometry) return;
      meshCount += 1;

      const mat = child.material as unknown;
      if (Array.isArray(mat)) {
        mat.forEach((m) => m && materialIds.add((m as THREE.Material).uuid));
      } else if (mat) {
        materialIds.add((mat as THREE.Material).uuid);
      }

      const geom = child.geometry;
      const pos = geom.attributes.position;
      if (pos) totalVertices += pos.count;

      if (geom.index) {
        const tri = geom.index.count / 3;
        totalFaces += tri;
        totalTriangles += tri;
      } else if (pos) {
        const tri = pos.count / 3;
        totalFaces += tri;
        totalTriangles += tri;
      }

      // Surface area (triangle sum)
      if (!pos) return;
      const indices = geom.index;
      if (indices) {
        for (let i = 0; i < indices.count; i += 3) {
          const i1 = indices.getX(i);
          const i2 = indices.getY(i);
          const i3 = indices.getZ(i);
          const v1 = new THREE.Vector3(pos.getX(i1), pos.getY(i1), pos.getZ(i1));
          const v2 = new THREE.Vector3(pos.getX(i2), pos.getY(i2), pos.getZ(i2));
          const v3 = new THREE.Vector3(pos.getX(i3), pos.getY(i3), pos.getZ(i3));
          totalArea += v1.clone().sub(v2).cross(v1.clone().sub(v3)).length() / 2;
        }
      } else {
        for (let i = 0; i < pos.count; i += 3) {
          if (i + 2 >= pos.count) break;
          const v1 = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          const v2 = new THREE.Vector3(pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1));
          const v3 = new THREE.Vector3(pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2));
          totalArea += v1.clone().sub(v2).cross(v1.clone().sub(v3)).length() / 2;
        }
      }

      // volume approximation: mesh bounding-box volume
      const b = new THREE.Box3().setFromObject(child);
      const s = b.getSize(new THREE.Vector3());
      totalVolumeApprox += s.x * s.y * s.z;
    });

    return {
      name: modelName,
      area: totalArea,
      volumeApprox: totalVolumeApprox,
      vertices: totalVertices,
      faces: totalFaces,
      triangles: totalTriangles,
      meshes: meshCount,
      materials: materialIds.size,
      dimensions: { width: size.x, height: size.y, depth: size.z },
      bboxDiagonal: diag,
    };
  })();

  cache.set(key, promise);
  return promise;
}


