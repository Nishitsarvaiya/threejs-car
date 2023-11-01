import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Car from "./Car";
import { Rings } from "./Rings";
import Boxes from "./Boxes";
import FloatingGrid from "./FloatingGrid";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import RectArealightWithHelper from "./RectAreaLightHelper";

export default function CarShowroom() {
	return (
		<>
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} near={0.1} far={100} />

			<color args={["#000"]} attach="background" />

			<CubeCamera resolution={256} frames={Infinity}>
				{(texture) => (
					<>
						<Environment map={texture} />
						<Car />
					</>
				)}
			</CubeCamera>

			<spotLight
				color={"#FFEEDD"}
				intensity={75}
				angle={0.6}
				penumbra={0.5}
				position={[5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/>
			{/*<spotLight
				color={"#9381FF"}
				intensity={200}
				angle={0.6}
				penumbra={0.5}
				position={[-5, 5, 0]}
				castShadow
				shadow-bias={-0.0001}
			/> */}

			{/* <rectAreaLight color={"#ffffff"} intensity={50} position={[0, 5, 0]} width={2} height={1} /> */}
			<RectArealightWithHelper
				position={[0, 1.5, 7]}
				color={"#ffffff"}
				rotation={[0, 0, 0]}
				intensity={10}
				width={2}
				height={3}
			/>

			<Ground />
			{/* <FloatingGrid /> */}
			{/* <Rings /> */}
			{/* <Boxes /> */}
		</>
	);
}
