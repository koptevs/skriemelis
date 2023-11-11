import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
// import zvans from "@/img/zvans.png";
import { Typography } from "@mui/material";

const StopJumtaNedarbojas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.9 Stopslēdzis kabīnes jumtā nedarbojas."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Stopslēdzis kabīnes jumtā nedarbojas.
                </Typography>
            }
        />
    );
};

export default StopJumtaNedarbojas;
