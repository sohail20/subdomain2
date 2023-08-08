import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CustomTextfield from "../components/CustomTextfield";
import CustomCards from "../components/CustomCards";
import InnerHTML from "dangerously-set-html-content";

function HomePage(props) {
    const [hostName, setHostName] = useState("");
    const [script, setScript] = useState(``);
    const addHostName = () => {
        fetch(`http://localhost:3000/api/append?url=${hostName}`,{
            method:"POST"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data.script", data.script);
                if (data.script) setScript(data.script);
            })
            .catch((error) => {
                console.error("Error fetching iframe content:", error);
            });
    };

    useEffect(() => {
        console.log("script", script);
    }, [script]);

    return (
        <div mt={50}>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <CustomCards handleClick={addHostName}>
                        <CustomTextfield
                            value={hostName}
                            onChange={(e) => {
                                setHostName(e);
                            }}
                        />
                    </CustomCards>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            {script && <p>{script}</p>}
        </div>
    );
}

export default HomePage;
