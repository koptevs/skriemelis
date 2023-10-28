import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";
import { Typography } from "@mui/material";

const ApdareKabineNolietota = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes apdare ir nolietota."
            nonCompliancesLevel="1"
            imageSource={apdare}
            control={control}
            label={
                <>
                    <Typography component="span">nolietota.</Typography>
                </>
            }
        />
    );
};

export default ApdareKabineNolietota;
