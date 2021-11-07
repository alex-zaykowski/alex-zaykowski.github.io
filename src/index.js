import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Suspense } from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Text } from '@react-three/drei'
import {useSpring, a } from '@react-spring/three'

function BoxLink(props) {
  const texture = useTexture(`${props.texture}`)
  const link = props.link
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  props = useSpring({
    position: props.position,
    scale: hovered ? 1.5 : 1
  }) 
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <a.mesh 
      {...props}
      ref={mesh}
      scale={props.scale}
      onClick={(event) => window.open(`${link}`, "_blank")}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial roughness="1" map={texture}/>
    </a.mesh>
  )
}

ReactDOM.render(
  <div style={{ width: "100vw", height: "96vh" }}>
  <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
    <Suspense fallback={null}>
    <ambientLight intensity="0.5" />

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
      Alex Zaykowski.
    </Text>
    <BoxLink texture="icons/github-icon.jpg" link="https://github.com/alex-zaykowski" position={[-4, -3, 0]} />
    <BoxLink texture="icons/instagram-icon.jpg" link="https://www.instagram.com/alex.zaykowski/?hl=en" position={[0, -3, 0]} />
    <BoxLink texture="icons/linkedin-icon.jpg" link="https://www.linkedin.com/in/alex-zaykowski-04388a163/" position={[4, -3, 0]} />
    </Suspense>
  </Canvas>,
  </div>,
  document.getElementById('root'),
);