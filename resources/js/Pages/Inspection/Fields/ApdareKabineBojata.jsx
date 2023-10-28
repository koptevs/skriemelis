import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";
import { Typography } from "@mui/material";

const ApdareKabineBojata = ({ control }) => {
    return (
        <CheckboxWithImage // apdare bojata
            // className="ml-3.5"
            rawName="4.1 Lifta kabīnes apdare ir bojāta."
            nonCompliancesLevel="1"
            imageSource={apdare}
            control={control}
            label={
                <>
                    <Typography component="span">Apdare ir bojāta.</Typography>
                </>
            }
        />
    );
};

export default ApdareKabineBojata;
