import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Suspense } from 'react'
import { useRef, useState} from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useTexture, Text} from '@react-three/drei'

function BoxLink(props) {
  const texture = useTexture(`${props.texture}`);
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hovered ? 1.5 : 1}
      onClick={(event) => window.open(`${props.link}`, "_blank")}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}


ReactDOM.render(
  <div style={{ width: "100vw", height: "100vh" }}>
  <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
    <Suspense fallback={null}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Text
      color={'#FFF'}
      fontSize={window.innerWidth / 200}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={'left'}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="bottom"
    >
      Alex Zaykowski
    </Text>
    <BoxLink texture="gh-logo.png" link="https://github.com/alex-zaykowski" position={[-4, -2, 0]} />
    <BoxLink texture="instagram.png" link="https://www.instagram.com/alex.zaykowski/?hl=en" position={[0, -2, 0]} />
    <BoxLink texture="linkedin.png" link="https://www.linkedin.com/in/alex-zaykowski-04388a163/" position={[4, -2, 0]} />
    </Suspense>
  </Canvas>,
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

