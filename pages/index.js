import dynamic from "next/dynamic";
const Routers = dynamic(() => import("./routers"));

export default function App(props) {
  return <Routers wildcard={props.wildcard} />;
}

export async function getServerSideProps(context) {
  let wildcard = context.req.headers.host.split(".")[0];
  console.log("wildcard", wildcard)
  if (!wildcard) {
    wildcard = "home"; // Set a default value for the wildcard if it's not present in the request headers
  } else {
    wildcard =
      wildcard !== "aussieizer"
        ? wildcard !== "localhost:3000"
          ? wildcard
          : process.env.TEST_WILDCARD
        : "home";
  }

  return { props: { wildcard: String(wildcard) } }; // Convert the wildcard to a string to ensure it's serializable
}
