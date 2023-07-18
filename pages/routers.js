import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Routers = dynamic(() => import("./dynamic"), {
    loading: () => <div>Loading...</div>,
    ssr: false, // Set ssr to false to disable server-side rendering for this component
});

const HomePage = dynamic(() => import("./home"), {
    loading: () => <div>Loading...</div>,
    ssr: false, // Set ssr to false to disable server-side rendering for this component
});

const DynamicRouter = (props) => {
    const [componentToRender, setComponentToRender] = useState(null);

    useEffect(() => {
        // Check if we are on the client-side (browser) before accessing localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("hostNames", JSON.stringify([window.location.hostname.split(".")[0]]))
            let hostNames = localStorage.getItem("hostNames");

            if (hostNames !== null) hostNames = JSON.parse(hostNames);

            else hostNames = [];

            if (hostNames.indexOf(props.wildcard) !== -1)
                setComponentToRender(<Routers subdomain={props.wildcard} />);
            else setComponentToRender(<HomePage />);
        }
    }, [props.wildcard]);

    return <>{componentToRender}</>;
};

export default DynamicRouter;
