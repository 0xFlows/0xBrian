import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { BoxGeometry, MeshBasicMaterial } from 'three';
import { StadiumModel } from '../objects/Stadium';
import "../styles/Worlds.css";

// Extend the three namespace with the BoxGeometry and MeshBasicMaterial
extend({ BoxGeometry, MeshBasicMaterial });

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
        <div style={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
          {text}
        </div>
      </Html>
    </animated.group>
  ) : null;
}

function Home() {
  const [isHoveredStadium, setIsHoveredStadium] = React.useState(false);
  const [isHoveredSphere, setIsHoveredSphere] = React.useState(false);
  const [shift, setShift] = React.useState(0);
  const [currentObject, setCurrentObject] = React.useState('Draftables');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/draftables'); // Change '/new-route' to your desired route
  };

  const handleCanvasError = (error) => {
    console.error('Error creating WebGL context:', error);
  };

  const handleShift = (direction) => {
    setShift((prevShift) => {
      const newShift = prevShift + direction * 400;
      if (newShift > 0) {
        return 0; // Limit the shift to 0 (cannot shift further to the right)
      } else if (newShift < -400) {
        return -400; // Limit the shift to -400 (cannot shift further to the left)
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
            <AnimatedStadiumModel isHovered={isHoveredStadium} shift={shift} offset={0} />
            <AnimatedStadiumModel isHovered={isHoveredSphere} shift={shift} offset={400} />
            <HoverBox
              onPointerOver={() => setIsHoveredStadium(true)}
              onPointerOut={() => setIsHoveredStadium(false)}
              onClick={handleClick}
              position={[shift, 0, 0]}
            />
            <SpeechBubble isHovered={isHoveredStadium} position={[shift, 50, 0]} text="Draftables" />
            <HoverBox
              onPointerOver={() => setIsHoveredSphere(true)}
              onPointerOut={() => setIsHoveredSphere(false)}
              onClick={handleClick}
              position={[shift + 400, 0, 0]}
            />
            <SpeechBubble isHovered={isHoveredSphere} position={[shift + 400, 50, 0]} text="Evomon" />
          </Suspense>
          <OrbitControls target={[0, 0, 0]} />
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
