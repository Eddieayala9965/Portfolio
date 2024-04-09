/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 room_relaxing.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/room_relaxing.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-282.842, -197.989, 150.156]} rotation={[1.568, 0, 0]} scale={[0.449, 0.385, 0.449]}>
          <mesh geometry={nodes.rubber.geometry} material={nodes.rubber.material} position={[41.015, 93.96, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.246, 0.055, 0.132]} />
          <mesh geometry={nodes.tape.geometry} material={nodes.tape.material} position={[0.152, 103.408, 0.168]} scale={[0.942, 0.942, 0.126]} />
          <mesh geometry={nodes.paper.geometry} material={nodes.paper.material} position={[5.883, 93.14, 0.306]} rotation={[0, 0, -Math.PI / 2]} scale={[0.942, 0.942, 0.108]} />
          <mesh geometry={nodes.body.geometry} material={nodes.body.material} position={[9.005, 93.452, 9.846]} rotation={[1.589, -1.444, 0.467]} scale={[0.942, 0.392, 0.942]} />
        </group>
        <group position={[-133.587, -203, 193.792]} scale={[0.764, 0.629, 0.764]}>
          <group position={[0.097, 89.208, 0.743]} scale={2.812}>
            <mesh geometry={nodes.Ellipse_2.geometry} material={nodes.Ellipse_2.material} position={[4.122, 2.576, 0.541]} rotation={[-Math.PI / 2, 0, 0]} scale={0.333} />
            <mesh geometry={nodes.Ellipse.geometry} material={nodes.Ellipse.material} position={[0.377, 2.519, 0.541]} rotation={[-Math.PI / 2, 0, 0]} scale={1.074} />
            <mesh geometry={nodes.Cylinder_3.geometry} material={nodes.Cylinder_3.material} position={[0, 0.655, 0]} scale={0.797} />
            <mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} position={[0, -1.564, 0]} />
          </group>
          <mesh geometry={nodes.body_1.geometry} material={nodes.body_1.material} position={[-0.371, 42.33, 1.375]} scale={1.072} />
        </group>
        <group position={[-231.909, -498.983, 189.589]} scale={[0.999, 1.929, 0.985]}>
          <mesh geometry={nodes.Rectangle.geometry} material={nodes.Rectangle.material} position={[-0.229, 136.431, -0.475]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Cube_4.geometry} material={nodes.Cube_4.material} position={[107.775, 71.066, -63.476]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
          <mesh geometry={nodes.Cube_4_1.geometry} material={nodes.Cube_4_1.material} position={[107.775, 71.066, 65.245]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
          <mesh geometry={nodes.Cube_3.geometry} material={nodes.Cube_3.material} position={[-110.545, 71.066, -63.476]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
          <mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} position={[-110.545, 71.066, 65.245]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 0.676]} />
        </group>
        <group position={[124.004, 21.026, 329.541]} rotation={[0.199, -0.557, 0.106]} scale={[0.104, 0.131, 0.08]}>
          <group position={[0, -68.009, 26.604]} scale={2.55}>
            <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
            <mesh geometry={nodes.mesh_13_1.geometry} material={nodes.mesh_13_1.material} />
          </group>
          <mesh geometry={nodes.Glass.geometry} material={nodes.Glass.material} position={[0, -68.009, 26.604]} scale={2.55} />
        </group>
        <group position={[114.823, -176.373, 333.815]}>
          <group position={[192.778, -11.445, 31.275]}>
            <mesh geometry={nodes.Cylinder_3_1.geometry} material={nodes.Cylinder_3_1.material} position={[-0.532, -36.516, 1.567]} />
            <mesh geometry={nodes.Cylinder_4.geometry} material={nodes.Cylinder_4.material} position={[0.247, 247.415, -0.707]} />
            <mesh geometry={nodes.Cylinder_6.geometry} material={nodes.Cylinder_6.material} position={[-0.224, 296.266, -0.707]} />
            <mesh geometry={nodes.Cylinder_5.geometry} material={nodes.Cylinder_5.material} position={[-0.224, 197.598, -0.707]} />
            <mesh geometry={nodes.Cylinder_2_1.geometry} material={nodes.Cylinder_2_1.material} position={[-0.247, -296.915, 0.707]} />
          </group>
          <group position={[-4.404, 10.891, 46.734]}>
            <group position={[-45.753, -283.032, 87.455]} rotation={[0.312, -0.2, 0.488]} scale={[-1.197, 1.197, 1.197]}>
              <mesh geometry={nodes.Cylinder_3_2.geometry} material={nodes.Cylinder_3_2.material} position={[-2.989, 24.835, -28.736]} rotation={[-Math.PI / 9, 0, 0.087]} scale={0.653} />
              <mesh geometry={nodes.Torus_5.geometry} material={nodes.Torus_5.material} position={[0.001, 4.97, -18.704]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_4.geometry} material={nodes.Torus_4.material} position={[0.001, 0.777, -15.379]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_3.geometry} material={nodes.Torus_3.material} position={[0.001, -2.434, -11.251]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_2.geometry} material={nodes.Torus_2.material} position={[0.001, -4.821, -6.388]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_1.geometry} material={nodes.Torus_1.material} position={[0.001, -6.167, -0.327]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Rectangle_5.geometry} material={nodes.Rectangle_5.material} position={[11.671, -14.093, 13.971]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Rectangle_4.geometry} material={nodes.Rectangle_4.material} position={[11.45, -11.573, 5.143]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Rectangle_3.geometry} material={nodes.Rectangle_3.material} position={[11.288, -9.717, -3.391]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Cube_2_1.geometry} material={nodes.Cube_2_1.material} position={[-0.123, -11.499, 2.05]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.Rectangle_2.geometry} material={nodes.Rectangle_2.material} position={[-0.006, -27.499, 0.541]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <group position={[-99.24, -294.464, 140.868]} rotation={[-0.087, -Math.PI / 6, -0.175]} scale={1.197}>
              <mesh geometry={nodes.Cylinder_3_3.geometry} material={nodes.Cylinder_3_3.material} position={[-0.072, 25.369, -26.102]} rotation={[-0.175, 0, 0]} scale={0.653} />
              <mesh geometry={nodes.Torus_5_1.geometry} material={nodes.Torus_5_1.material} position={[0.001, 4.97, -18.704]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_4_1.geometry} material={nodes.Torus_4_1.material} position={[0.001, 0.777, -15.379]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_3_1.geometry} material={nodes.Torus_3_1.material} position={[0.001, -2.434, -11.251]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_2_1.geometry} material={nodes.Torus_2_1.material} position={[0.001, -4.821, -6.388]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Torus_6.geometry} material={nodes.Torus_6.material} position={[0.001, -6.167, -0.327]} rotation={[-2.337, 0, 2.356]} />
              <mesh geometry={nodes.Rectangle_5_1.geometry} material={nodes.Rectangle_5_1.material} position={[11.671, -14.093, 13.971]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Rectangle_4_1.geometry} material={nodes.Rectangle_4_1.material} position={[11.45, -11.573, 5.143]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Rectangle_3_1.geometry} material={nodes.Rectangle_3_1.material} position={[11.288, -9.717, -3.391]} rotation={[-Math.PI / 2, 1.484, Math.PI / 9]} />
              <mesh geometry={nodes.Cube_2_2.geometry} material={nodes.Cube_2_2.material} position={[-0.123, -11.499, 2.05]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.Rectangle_2_1.geometry} material={nodes.Rectangle_2_1.material} position={[-0.006, -27.499, 0.541]} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            <group position={[31.882, 137.509, -80.185]} rotation={[-1.13, -0.241, -0.469]} scale={0.586}>
              <group position={[-58.298, -62.561, 1.558]} rotation={[Math.PI / 2, -1.396, -Math.PI / 2]} scale={0.7}>
                <mesh geometry={nodes.Rectangle_3_3.geometry} material={nodes.Rectangle_3_3.material} position={[-1.204, -0.119, 15.358]} />
                <mesh geometry={nodes.Rectangle_2_3.geometry} material={nodes.Rectangle_2_3.material} position={[-1.204, -0.119, 8.505]} />
                <mesh geometry={nodes.Cube_5.geometry} material={nodes.Cube_5.material} position={[0, 0, -7.358]} />
              </group>
              <group position={[55.954, -61.834, 1.78]} rotation={[Math.PI / 2, 1.484, -Math.PI / 2]} scale={0.7}>
                <mesh geometry={nodes.Rectangle_3_4.geometry} material={nodes.Rectangle_3_4.material} position={[-1.204, -0.119, 15.358]} />
                <mesh geometry={nodes.Rectangle_2_4.geometry} material={nodes.Rectangle_2_4.material} position={[-1.204, -0.119, 8.505]} />
                <mesh geometry={nodes.Cube_6.geometry} material={nodes.Cube_6.material} position={[0, 0, -7.358]} />
              </group>
              <mesh geometry={nodes.Cylinder_2_2.geometry} material={nodes.Cylinder_2_2.material} position={[-76.467, -48.31, 2.681]} rotation={[0, 0, 0.262]} />
              <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} position={[72.074, -48.408, 2.681]} rotation={[0, 0, -0.175]} />
              <mesh geometry={nodes.Torus_7.geometry} material={nodes.Torus_7.material} position={[-2.41, -33.305, 1.834]} rotation={[0, 0, -Math.PI / 2]} scale={[1.054, 1, 1]} />
            </group>
            <group position={[17.295, -213.495, -71.278]} rotation={[0, -Math.PI / 6, 0]}>
              <mesh geometry={nodes.Cube_9.geometry} material={nodes.Cube_9.material} position={[-2.31, 98.833, -2.38]} rotation={[Math.PI / 2, 0, Math.PI / 4]} />
              <mesh geometry={nodes.Cube_8.geometry} material={nodes.Cube_8.material} position={[-2.38, 97.156, 2.31]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} />
              <mesh geometry={nodes.Cylinder_6_1.geometry} material={nodes.Cylinder_6_1.material} position={[67.316, -2.732, 67.271]} rotation={[1.396, -1.484, 1.484]} scale={1.241} />
              <mesh geometry={nodes.Cylinder_6_2.geometry} material={nodes.Cylinder_6_2.material} position={[-67.316, -2.732, -67.325]} rotation={[-Math.PI / 2, -1.484, -1.658]} scale={1.241} />
              <mesh geometry={nodes.Cylinder_4_1.geometry} material={nodes.Cylinder_4_1.material} position={[67.271, -2.732, -67.316]} rotation={[0.086, 0.015, 0.087]} scale={1.241} />
              <mesh geometry={nodes.Cylinder_5_1.geometry} material={nodes.Cylinder_5_1.material} position={[-67.325, -2.732, 67.316]} rotation={[-0.087, 0, -0.087]} scale={1.241} />
              <mesh geometry={nodes.Cylinder_2_3.geometry} material={nodes.Cylinder_2_3.material} position={[3.248, 110.662, 3.319]} scale={1.241} />
            </group>
            <group position={[-47.413, 10.178, 45.323]} rotation={[-2.975, 0.518, 3.058]} scale={[0.642, 0.698, 0.698]}>
              <group position={[3.04, 1.12, -81.16]} rotation={[-Math.PI / 9, 0, 0]} scale={[1.638, 1.508, 1.508]}>
                <mesh geometry={nodes.S.geometry} material={nodes.S.material} position={[-32, -6.5, 0]} />
                <mesh geometry={nodes.p.geometry} material={nodes.p.material} position={[-18.144, -6.5, 0]} />
                <mesh geometry={nodes.l.geometry} material={nodes.l.material} position={[-5.52, -6.5, 0]} />
                <mesh geometry={nodes.i.geometry} material={nodes.i.material} position={[0.08, -6.5, 0]} />
                <mesh geometry={nodes.i_1.geometry} material={nodes.i_1.material} position={[0.08, -6.5, 0]} />
                <mesh geometry={nodes.n.geometry} material={nodes.n.material} position={[5.68, -6.5, 0]} />
                <mesh geometry={nodes.e.geometry} material={nodes.e.material} position={[18.304, -6.5, 0]} />
              </group>
              <mesh geometry={nodes.Rectangle_2_2.geometry} material={nodes.Rectangle_2_2.material} position={[0, -0.214, -81.435]} rotation={[-Math.PI / 9, 0, 0]} />
              <mesh geometry={nodes.Rectangle_5_2.geometry} material={nodes.Rectangle_5_2.material} position={[0, -66.011, 62.638]} rotation={[Math.PI / 2, 0, 0]} scale={0.833} />
              <mesh geometry={nodes.Rectangle_4_2.geometry} material={nodes.Rectangle_4_2.material} position={[0, -62.816, -3.881]} rotation={[Math.PI / 2, 0, 0]} scale={0.833} />
              <mesh geometry={nodes.Rectangle_3_2.geometry} material={nodes.Rectangle_3_2.material} position={[0, -66.851, 15.835]} rotation={[Math.PI / 2, 0, 0]} />
              <mesh geometry={nodes.Rectangle_1.geometry} material={nodes.Rectangle_1.material} position={[0, -5.445, -85.575]} rotation={[-Math.PI / 9, 0, 0]} />
            </group>
            <group position={[5.062, 49.665, -37.851]} rotation={[0, -Math.PI / 6, 0]}>
              <mesh geometry={nodes.line.geometry} material={nodes.line.material} position={[-8.343, -29.822, -1.067]} />
              <mesh geometry={nodes.Cylinder_2_4.geometry} material={nodes.Cylinder_2_4.material} position={[0.965, 83.675, -58.409]} rotation={[0.216, -0.167, 0]} scale={1.334} />
              <mesh geometry={nodes['hand-15_2'].geometry} material={nodes['hand-15_2'].material} position={[57.193, -72.481, 62.327]} rotation={[1.774, 0.04, 0.48]} scale={[-1, 1, 1]} />
              <mesh geometry={nodes['hand-15'].geometry} material={nodes['hand-15'].material} position={[-69.048, -69.333, 71.267]} rotation={[1.814, 0.306, -0.243]} />
              <mesh geometry={nodes.body_3.geometry} material={nodes.body_3.material} position={[0.153, 16.283, -51.267]} />
            </group>
            <group position={[18.481, 200.612, -52.879]} rotation={[0.398, -0.489, 0.195]}>
              <mesh geometry={nodes.Cube_15.geometry} material={nodes.Cube_15.material} position={[11.672, 1.118, 30.38]} rotation={[0, Math.PI / 9, 0]} />
              <mesh geometry={nodes.Cube_14.geometry} material={nodes.Cube_14.material} position={[-21.34, 1.118, 28.721]} rotation={[0, -Math.PI / 9, 0]} />
              <mesh geometry={nodes.Cube_13.geometry} material={nodes.Cube_13.material} position={[-21.984, 10.292, 29.165]} rotation={[-0.038, -0.411, 3.029]} />
              <mesh geometry={nodes.Cube_12.geometry} material={nodes.Cube_12.material} position={[12.598, 6.379, 31.351]} rotation={[-0.1, 0.281, 0.204]} />
              <mesh geometry={nodes.Cube_16.geometry} material={nodes.Cube_16.material} position={[38.422, -12.667, -6.069]} scale={[-1, 1, 1]} />
              <mesh geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material} position={[-44.386, -12.667, -6.069]} />
              <mesh geometry={nodes.Sphere_2.geometry} material={nodes.Sphere_2.material} position={[-2.883, -8.507, -8.675]} />
            </group>
            <mesh geometry={nodes.leg.geometry} material={nodes.leg.material} position={[31.273, -40.935, -83.018]} rotation={[0, -Math.PI / 6, 0]} />
            <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[33.516, 151.868, -85.204]} rotation={[0.398, -0.489, 0.195]} />
          </group>
          <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} position={[0, -319.449, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <directionalLight intensity={0.8} decay={2} color="#fff0e9" rotation={[0.929, 0.323, -1.338]} />
        <OrthographicCamera makeDefault={false} far={500000} near={0} position={[-231.141, 167.898, 1444.139]} rotation={[-0.364, -0.157, -0.059]} />
        <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[133.635, 54.869, 304.564]} rotation={[0.15, -0.415, 0.064]} scale={[2.554, 1, 4.641]} />
        <mesh geometry={nodes.Shape.geometry} material={nodes.Shape.material} position={[147.739, 66.352, 376.955]} rotation={[0, Math.PI / 3, Math.PI / 9]} />
        <mesh geometry={nodes.Torus.geometry} material={nodes.Torus.material} position={[113.641, 10.77, 346.708]} rotation={[0.326, -0.448, 2.578]} />
      </group>
    </group>
  )
}

useGLTF.preload('/room_relaxing.gltf')
