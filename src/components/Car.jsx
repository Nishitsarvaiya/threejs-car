import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

// based on "Chevrolet Corvette (C7)" (https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a)
// by Martin Trafas (https://sketchfab.com/Bexxie) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export default function Car() {
	const gltf = useLoader(GLTFLoader, "models/dodge_challenger/scene.gltf");

	useEffect(() => {
		gltf.scene.scale.set(0.0075, 0.0075, 0.0075);
		gltf.scene.position.set(-1.5, 1.089, -2);
		gltf.scene.rotation.set(0, 1, 0);
		gltf.scene.traverse((object) => {
			if (object instanceof Mesh) {
				object.castShadow = true;
				object.receiveShadow = true;
				object.material.envMapIntensity = 20;
			}
		});
	}, [gltf]);

	// useFrame((state, delta) => {
	// 	let t = state.clock.getElapsedTime();

	// 	let group = gltf.scene.children[0].children[0];
	// 	// group.children[22].rotation.z = t * 2;
	// });

	return <primitive object={gltf.scene} />;
}
