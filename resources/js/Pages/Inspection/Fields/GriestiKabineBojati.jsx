import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import griesti from "@/img/griesti.png";
import { Typography } from "@mui/material";

const GriestiKabineBojati = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes griesti ir bojāti."
            nonCompliancesLevel="1"
            imageSource={griesti}
            control={control}
            label={
                <>
                    <Typography component="span">Griesti ir bojāti.</Typography>
                </>
            }
        />
    );
};

export default GriestiKabineBojati;
