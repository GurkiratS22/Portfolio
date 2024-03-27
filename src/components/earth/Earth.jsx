import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Earth = () => {
    
    const earth = useGLTF('./scene.gltf');

  return (
    
    <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [20, 3, 5], fov: 25,}}>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
      <primitive object={earth.scene} scale={1.5}/>
      <ambientLight intensity={1} />
    </Canvas>
    
  )
}

export default Earth