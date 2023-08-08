import React from "react";
import dynamic from "next/dynamic";


const HomePage = dynamic(() => import("./home"), {
    loading: () => <div>Loading...</div>,
    ssr: false, // Set ssr to false to disable server-side rendering for this component
});

const DynamicRouter = (props) => {
    return <><HomePage /></>;
};

export default DynamicRouter;
