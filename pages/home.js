import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomTextfield from "../components/CustomTextfield";
import CustomCards from "../components/CustomCards";

function HomePage(props) {
    const [hostName, setHostName] = useState("");

    const addHostName = () => {
        if (typeof window !== "undefined") {
            let hostNames = localStorage.getItem("hostNames");
            if (hostNames !== null) hostNames = JSON.parse(hostNames);
            else hostNames = [];
            localStorage.setItem(
                "hostNames",
                JSON.stringify([...hostNames, hostName.split(" ").join("")])
            );
            setHostName("")
        }
    };

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
        </div>
    );
}

export default HomePage;
