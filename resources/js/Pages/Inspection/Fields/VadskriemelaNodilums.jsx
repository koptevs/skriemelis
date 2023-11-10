import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import skriemelis from "@/img/skriemelis.png";
import { Typography } from "@mui/material";

const VadskriemelaNodilums = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Vādskriemeļa nodilums."
            nonCompliancesLevel="1"
            imageSource={skriemelis}
            control={control}
            label={
                <Typography component="span">Vādskriemeļa nodilums.</Typography>
            }
        />
    );
};

export default VadskriemelaNodilums;
