import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function EvomonModel(props) {
  const { nodes, materials } = useGLTF('/Evomon.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[65, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_308.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-56.309, 0, 0]}
        />
      </group>
      <group position={[35, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_312.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[8.829, 0, 17.641]}
        />
      </group>
      <group position={[30, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_314.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, -28.196]}
        />
      </group>
      <group position={[40, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_316.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-74.367, 0, 0]}
        />
      </group>
      <group position={[20, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_318.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[18.193, 0, -16.979]}
        />
      </group>
      <group position={[25, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_336.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-35.482, 0, -27.863]}
        />
      </group>
      <group position={[55, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_338.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, 46.26]}
        />
      </group>
      <group position={[45, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_340.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-85.095, 0, 20.98]}
        />
      </group>
      <group position={[50, 0, 6.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_362.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-16.089, 0, 44.719]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1735.geometry}
        material={materials['LOWPOLY-COLORS']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1880.geometry}
        material={materials['LOWPOLY-COLORS']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2482.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[12.722, 0, -15.811]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2484.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-16.479, 0, 44.788]}
      />
      <group position={[30, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2636.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-34.076, 0, -37.534]}
        />
      </group>
      <group position={[20, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2638.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-20.432, 0, 0]}
        />
      </group>
      <group position={[35, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2640.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[5.742, 0, 19.222]}
        />
      </group>
      <group position={[45, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2642.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, -6.116]}
        />
      </group>
      <group position={[40, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2644.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-6.541, 0, 0]}
        />
      </group>
      <group position={[30, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2674.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-66.92, 0, 42.073]}
        />
      </group>
      <group position={[45, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2676.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-53.684, 0, -45.347]}
        />
      </group>
      <group position={[35, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2678.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-76.499, 0, -25.487]}
        />
      </group>
      <group position={[25, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2682.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[13.918, 0, -35.192]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2696.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[26.829, 0, -37.588]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2702.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-46.699, 0, 28.791]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2720.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-50.443, 0, -43.669]}
      />
      <group position={[20, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2740.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-33.903, 0, 21.956]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2760.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[22.299, 0, 41.806]}
      />
      <group position={[20, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2770.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-41.456, 0, 24.183]}
        />
      </group>
      <group position={[25, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2772.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, -52.432]}
        />
      </group>
      <group position={[55, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2776.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-96.731, 0, -5.227]}
        />
      </group>
      <group position={[40, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2780.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-58.852, 0, 0]}
        />
      </group>
      <group position={[50, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2782.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, -28.566]}
        />
      </group>
      <group position={[40, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2792.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-87.784, 0, 48.381]}
        />
      </group>
      <group position={[45, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2794.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-71.699, 0, -32.755]}
        />
      </group>
      <group position={[50, 0, 1.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2796.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-27.763, 0, 10.329]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2800.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[24.465, 0, -10.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2862.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[36.403, 23.58, 6.785]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2864.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[9.061, 23.588, -23.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2868.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[37.338, 23.588, 59.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2870.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-11.957, 23.588, -8.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2872.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-23.999, 23.588, 41.363]}
      />
      <group position={[35, 0, -3.207]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2892.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-28.518, 0, 53.762]}
        />
      </group>
      <group position={[45, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2908.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-37.398, 0, 0]}
        />
      </group>
      <group position={[40, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2912.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-39.933, 0, 0]}
        />
      </group>
      <group position={[65, 0, 14.293]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2914.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-115.591, 0, -8.458]}
        />
      </group>
      <group position={[65, 0, 26.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2920.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-72.997, 0, 10.32]}
        />
      </group>
      <group position={[55, 0, 21.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2922.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-69.653, 0, -63.529]}
        />
      </group>
      <group position={[30, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2926.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-57.503, 0, 0]}
        />
      </group>
      <group position={[35, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2928.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, -59.858]}
        />
      </group>
      <group position={[20, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2930.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-18.174, 0, -42.96]}
        />
      </group>
      <group position={[25, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2932.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[0, 0, 24.458]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3531.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[0, 0, -0.156]}
      />
      <group position={[60, 0, 31.793]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3533.geometry}
          material={materials['LOWPOLY-COLORS']}
          position={[-7.71, 0, -49.346]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4869.geometry}
        material={materials['LOWPOLY-COLORS']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, -15]}
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
        position={[-15, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127003.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-15, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1735001.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[32.865, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1880001.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[32.865, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4869001.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[32.865, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127004.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127005.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127006.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127007.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[15, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127008.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127009.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127010.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127011.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[45, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1735003.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-27.805, 0.411, -0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1880003.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-27.805, 0.411, -0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4869003.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-27.805, 0.411, -0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127012.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127013.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, 15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127014.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, -45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5127015.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[-45, 0, 45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_342.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[60, 0, -3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2634.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[25, 0, 21.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2784.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[55, 0, -3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2786.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[30, 0, -3.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2798.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[55, 0, 31.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2830.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[40, 0, 26.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2832.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[35, 0, 26.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2834.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[30, 0, 26.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2836.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[25, 0, 26.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2838.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[20, 0, 26.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2904.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[50, 0, 21.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2906.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[60, 0, 11.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2916.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[60, 0, 21.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2918.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[60, 0, 16.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2924.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[50, 0, 31.793]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2934.geometry}
        material={materials['LOWPOLY-COLORS']}
        position={[60, 0, 26.793]}
      />
    </group>
  )
}

useGLTF.preload('/Evomon.glb')
