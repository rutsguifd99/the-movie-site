/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.7 scene.gltf --transform --types
Author: Broccoletto (https://sketchfab.com/broccoletto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/popcorn-bucket-76276af669454d3585072a41056f1bcd
Title: Popcorn bucket
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["popcorn-box000_0"]: THREE.Mesh;
    Plane001_0: THREE.Mesh;
    ["popcorn1-lp001_0"]: THREE.Mesh;
    ["popcorn1-lp001_1"]: THREE.Mesh;
    ["popcorn1-lp001_2"]: THREE.Mesh;
    ["popcorn3-lp003_0"]: THREE.Mesh;
    ["popcorn3-lp003_1"]: THREE.Mesh;
  };

  materials: {
    ["popcorn-box.004"]: THREE.MeshStandardMaterial;
    ["popcorn-base"]: THREE.MeshStandardMaterial;
    popcorn1: THREE.MeshStandardMaterial;
    popcorn2: THREE.MeshStandardMaterial;
    popcorn3: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/scene-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
        <group
          position={[-0.04, 1.07, 4.05]}
          rotation={[0.15, -0.31, -0.57]}
          scale={0.16}
        >
          <mesh
            geometry={nodes["popcorn1-lp001_0"].geometry}
            material={materials.popcorn1}
          />
          <mesh
            geometry={nodes["popcorn1-lp001_1"].geometry}
            material={materials.popcorn2}
          />
          <mesh
            geometry={nodes["popcorn1-lp001_2"].geometry}
            material={materials.popcorn3}
          />
        </group>
        <group
          position={[-1.05, -1.82, 0.38]}
          rotation={[0.53, 0.77, 1.09]}
          scale={0.24}
        >
          <mesh
            geometry={nodes["popcorn3-lp003_0"].geometry}
            material={materials.popcorn3}
          />
          <mesh
            geometry={nodes["popcorn3-lp003_1"].geometry}
            material={materials.popcorn2}
          />
        </group>
        <mesh
          geometry={nodes["popcorn-box000_0"].geometry}
          material={materials["popcorn-box.004"]}
          position={[0, 0, 1.01]}
        />
        <mesh
          geometry={nodes.Plane001_0.geometry}
          material={materials["popcorn-base"]}
          position={[0, 0, 3.2]}
          scale={1.24}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
