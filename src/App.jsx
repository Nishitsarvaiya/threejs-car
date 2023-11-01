import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CarShowroom from "./components/CarShowroom";

export default function App() {
	return (
		<div id="app">
			<Suspense fallback={null}>
				<Canvas shadows>
					<CarShowroom />
				</Canvas>
			</Suspense>
		</div>
	);
}
