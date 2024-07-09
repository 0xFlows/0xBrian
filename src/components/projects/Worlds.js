import React, { Suspense, useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { BoxGeometry, MeshBasicMaterial, Points, PointsMaterial, BufferGeometry, Float32BufferAttribute } from 'three';
import { StadiumModel } from '../objects/Stadium';
import { EvomonModel } from '../objects/Evomon';
import "../styles/Worlds.css";

// Extend the three namespace with the necessary components
extend({ BoxGeometry, MeshBasicMaterial, Points, PointsMaterial, BufferGeometry, Float32BufferAttribute });

function AnimatedStadiumModel({ isHovered, shift, offset }) {
  const { position } = useSpring({
    position: isHovered ? [shift + offset, 10, 0] : [shift + offset, 0, 0],
    config: { duration: 500 },
  });

  return (
    <animated.group position={position}>
      <StadiumModel />
    </animated.group>
  );
}

function AnimatedEvomonModel({ isHovered, shift, offset }) {
  const { position } = useSpring({
    position: isHovered ? [shift + offset, 10, 0] : [shift + offset, 0, 0],
    config: { duration: 500 },
  });

  return (
    <animated.group position={position}>
      <EvomonModel />
    </animated.group>
  );
}

function HoverBox({ onPointerOver, onPointerOut, onClick, position }) {
  return (
    <mesh
      onPointerOver={(e) => {
        document.body.style.cursor = 'pointer';
        onPointerOver(e);
      }}
      onPointerOut={(e) => {
        document.body.style.cursor = 'auto';
        onPointerOut(e);
      }}
      onClick={onClick}
      position={position}
      visible={false}
    >
      <boxGeometry args={[100, 100, 100]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

function SpeechBubble({ isHovered, position, text }) {
  const { pos } = useSpring({
    pos: isHovered ? [position[0], position[1] + 60, position[2]] : [position[0], position[1] + 50, position[2]],
    config: { duration: 500 },
  });

  return isHovered ? (
    <animated.group position={pos}>
      <Html center>
        <div className="speech-bubble">
          {text}
        </div>
      </Html>
    </animated.group>
  ) : null;
}

function Stars({ maxSize }) {
  const pointsRef = useRef();

  useEffect(() => {
    const starsGeometry = new BufferGeometry();
    const starsMaterial = new PointsMaterial({ color: 0xffffff, size: maxSize });
    const starsCount = 5000;
    const positions = new Float32Array(starsCount * 3);
    const sizes = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      sizes[i] = Math.random() * maxSize;
    }

    starsGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    starsGeometry.setAttribute('size', new Float32BufferAttribute(sizes, 1));
    pointsRef.current.geometry = starsGeometry;
    pointsRef.current.material = starsMaterial;
  }, [maxSize]);

  return <points ref={pointsRef}></points>;
}

function Home() {
  const [isHoveredStadium, setIsHoveredStadium] = React.useState(false);
  const [isHoveredSphere, setIsHoveredSphere] = React.useState(false);
  const [shift, setShift] = React.useState(0);
  const [currentObject, setCurrentObject] = React.useState('Draftables');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/draftables');
  };

  const handleCanvasError = (error) => {
    console.error('Error creating WebGL context:', error);
  };

  const handleShift = (direction) => {
    setShift((prevShift) => {
      const newShift = prevShift + direction * 400;
      if (newShift > 0) {
        return 0;
      } else if (newShift < -400) {
        return -400;
      } else {
        return newShift;
      }
    });
  };

  useEffect(() => {
    if (shift === 0) {
      setCurrentObject('Draftables');
    } else if (shift === -400) {
      setCurrentObject('Evomon');
    }
  }, [shift]);

  return (
    <div className="worlds-page">
      <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <Canvas className="worlds-canvas" camera={{ position: [0, 100, 500], fov: 50 }} onCreated={({ gl }) => {
          if (!gl) {
            handleCanvasError(new Error('Failed to create WebGL context.'));
          }
        }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 10]} intensity={1.5} />
          <Suspense fallback={<Html center><span>Loading...</span></Html>}>
            <Stars maxSize={5} />
            <AnimatedStadiumModel isHovered={isHoveredStadium} shift={shift} offset={0} />
            <AnimatedEvomonModel isHovered={isHoveredSphere} shift={shift} offset={400} />
            <HoverBox
              onPointerOver={() => setIsHoveredStadium(true)}
              onPointerOut={() => setIsHoveredStadium(false)}
              onClick={handleClick}
              position={[shift, 0, 0]}
            />
            <SpeechBubble isHovered={isHoveredStadium} position={[shift, 10, 0]} text="Draftables" />
            <HoverBox
              onPointerOver={() => setIsHoveredSphere(true)}
              onPointerOut={() => setIsHoveredSphere(false)}
              onClick={handleClick}
              position={[shift + 400, 0, 0]}
            />
            <SpeechBubble isHovered={isHoveredSphere} position={[shift + 400, 10, 0]} text="Evomon" />
          </Suspense>
          <OrbitControls 
            target={[0, 0, 0]} 
            enablePan={false}
            enableZoom={false}
            mouseButtons={{
              LEFT: 0,
              MIDDLE: -1,
              RIGHT: -1
            }}
          />
        </Canvas>
        <div className="button-container left">
          <button className="scroller right" onClick={() => handleShift(1)}>&larr;</button>
        </div>
        <div className="current-object">
          {currentObject}
        </div>
        <div className="button-container right">
          <button className='scroller right' onClick={() => handleShift(-1)}>&rarr;</button>
        </div>
      </div>
    </div>
  );
}

function NewRoute() {
  return <div>Welcome to the new route!</div>;
}

function Worlds() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-route" element={<NewRoute />} />
    </Routes>
  );
}

export default Worlds;
