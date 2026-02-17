import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Grid, useGLTF, Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

interface ModelViewerProps {
  glbPath: string;
}

function Model({ glbPath }: { glbPath: string }) {
  const gltf = useGLTF(glbPath);
  const meshRef = useRef<THREE.Group>(null);

  // Calculate bounding box to center the model
  React.useEffect(() => {
    if (gltf.scene && meshRef.current) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    }
  }, [gltf.scene]);

  return (
    <primitive 
      ref={meshRef}
      object={gltf.scene.clone()} 
    />
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-sm">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

const ModelViewer: React.FC<ModelViewerProps> = ({ glbPath }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-slate-950 z-50">
      {/* Header with back button */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-slate-950 to-transparent">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas className="w-full h-full">
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          
          {/* Grid floor */}
          <Grid 
            args={[20, 20]} 
            cellColor="#1e293b" 
            sectionColor="#334155" 
            cellThickness={0.5}
            sectionThickness={1}
            position={[0, -2, 0]}
          />
          
          {/* Model */}
          <Model glbPath={glbPath} />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={20}
            autoRotate={false}
          />
          
          {/* Environment for better lighting */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* Instructions overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-slate-950 to-transparent">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-400 text-xs mb-2">3D Viewer Controls</p>
          <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-500">
            <span>🖱️ Left Click + Drag: Rotate</span>
            <span>🖱️ Right Click + Drag: Pan</span>
            <span>🔍 Scroll: Zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;

