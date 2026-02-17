import React from 'react';
import { Course, StudentWork } from './types';
import type { FigureCardData } from './components/FigureCard';

/* Genus-2 double torus icon (two holes) */
const Genus2Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="9" cy="12" rx="4" ry="3" />
    <ellipse cx="15" cy="12" rx="4" ry="3" />
    <path d="M9 9v6M15 9v6M5 12h2M17 12h2" />
  </svg>
);

const TorusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="5" ry="3" />
    <path d="M12 9v6M7 12h10" />
  </svg>
);

export const FIGURE_CARDS: FigureCardData[] = [
  {
    id: 'circle',
    title: 'Circle',
    description: 'The set of all points in a plane at a fixed distance (radius) from a fixed point (center). Circumference C = 2πr, area A = πr².',
    detailPath: '/figure/circle',
    icon: <Genus2Icon />,
    glbFilePath: '/glb/Black and White 3D real Football ball .glb',
  },
  {
    id: 'genus-2',
    title: 'Genus-2 Surface',
    description: 'Double torus (bitorus): genus g = 2, Euler characteristic χ = −2. Surface area A = 8π²Rr, volume V = 4π²Rr². Compact orientable surface.',
    detailPath: '/figure/genus-2-surface',
    icon: <Genus2Icon />,
    glbFilePath: '/glb/size .glb',
  },
  {
    id: 'torus',
    title: 'Torus',
    description: 'Surface of revolution: genus g = 1, χ = 0. Surface area A = 4π²Rr, volume V = 2π²Rr².',
    detailPath: '/figure/torus',
    icon: <TorusIcon />,
    glbFilePath: '/glb/size 2.glb',
  },
];

/** Figure block images. Order matches FIGURE_CARDS. */
export const FIGURE_BLOCK_IMAGES: string[] = [
  '/pics/change-the-color-of-the-bg-to-white-without-damagi.jpeg',
  '/pics/change-the-color-of-the-bg-to-white-without-damagi (1).jpeg',
  '/pics/change-the-color-of-the-bg-to-white-without-damagi (2).jpeg',
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Character Sculpting Masterclass',
    category: 'Modeling',
    level: 'Intermediate',
    duration: '12 Weeks',
    image: '/pics/change-the-color-of-the-bg-to-white-without-damagi.jpeg',
    description: 'Master anatomical precision and high-fidelity detailing in ZBrush.',
    glbFilePath: '/glb/laly .glb'
  },
  {
    id: '2',
    title: 'Cinematic Lighting & Rendering',
    category: 'Lighting',
    level: 'Advanced',
    duration: '8 Weeks',
    image: '/pics/change-the-color-of-the-bg-to-white-without-damagi (1).jpeg',
    description: 'Learn the physics of light using Arnold and Unreal Engine 5.',
    glbFilePath: '/glb/size .glb'
  },
  {
    id: '3',
    title: 'VFX Dynamics & Simulations',
    category: 'VFX',
    level: 'Advanced',
    duration: '10 Weeks',
    image: '/pics/change-the-color-of-the-bg-to-white-without-damagi (2).jpeg',
    description: 'Create hyper-realistic fire, smoke, and destruction in Houdini.',
    glbFilePath: '/glb/size 2.glb'
  },
  {
    id: '4',
    title: 'Foundations of 3D Animation',
    category: 'Animation',
    level: 'Beginner',
    duration: '6 Weeks',
    image: '/pics/change-the-color-of-the-bg-to-white-without-damagi.jpeg',
    description: 'Start your journey with the 12 principles of animation in Maya.',
    glbFilePath: '/glb/laly .glb'
  }
];

export const SHOWCASE: StudentWork[] = [
  { id: '1', studentName: 'Alex Rivers', projectName: 'Cyberpunk Metropolis', image: '/pics/3d-object-shpes-in-different-colors-wolrd (3).jpeg' },
  { id: '2', studentName: 'Elena Chen', projectName: 'Organic Mech Suit', image: '/pics/3d-object-shpes-in-different-colors-wolrd (4).jpeg' },
  { id: '3', studentName: 'Marcus Thorne', projectName: 'Ethereal Forest', image: '/pics/3d-object-shpes-in-different-colors-wolrd (6).jpeg' },
  { id: '4', studentName: 'Sarah J.', projectName: 'Stylized Creature', image: '/pics/3d-object-shpes-in-different-colors-wolrd (2).jpeg' },
];
