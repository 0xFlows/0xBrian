import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function StadiumModel(props) {
  const { nodes, materials } = useGLTF('/Stadium.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_738.geometry}
        material={materials['LOWPOLY-COLORS']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127001.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127002.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127003.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127004.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127005.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127006.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127007.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127008.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127009.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127010.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127011.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127012.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127013.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127014.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127015.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2126.geometry}
        material={materials['LOWPOLY-COLORS.001']}
        position={[-1000, 0, 425]}
      />
    </group>
  );
}

useGLTF.preload('/Stadium.glb');
