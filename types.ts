
export interface Course {
  id: string;
  title: string;
  category: 'Modeling' | 'Animation' | 'Lighting' | 'VFX';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  description: string;
  glbFilePath?: string;
}

export interface StudentWork {
  id: string;
  studentName: string;
  projectName: string;
  image: string;
}
