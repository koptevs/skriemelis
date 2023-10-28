import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import grida from "@/img/grida.png";
import { Typography } from "@mui/material";

const GridaKabineBojata = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="4.1 Lifta kabīnes grīdas segums ir bojāts."
            nonCompliancesLevel="1"
            imageSource={grida}
            control={control}
            label={
                <>
                    <Typography component="span">Grīda ir bojāta.</Typography>
                </>
            }
        />
    );
};

export default GridaKabineBojata;
