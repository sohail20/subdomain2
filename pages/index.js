import dynamic from "next/dynamic";
const Routers = dynamic(() => import("./routers"));

export default function App(props) {
  return <Routers />;
}
