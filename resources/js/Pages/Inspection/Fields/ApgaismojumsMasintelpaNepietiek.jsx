import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import lamp from "@/img/lamp.png";
import { Typography } from "@mui/material";

const ApgaismojumsKabineNepietiek = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="8.0 Nepietiekams apgaismojums mašintelpā."
            nonCompliancesLevel="1"
            imageSource={lamp}
            control={control}
            label={
                <Typography component="span">
                    Nepietiekams apgaismojums mašintelpā.
                </Typography>
            }
        />
    );
};

export default ApgaismojumsKabineNepietiek;
