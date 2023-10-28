import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import grida from "@/img/grida.png";
import { Typography } from "@mui/material";

const GridaKabineNolietota = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes grīdas segums ir nolietots."
            nonCompliancesLevel="1"
            imageSource={grida}
            control={control}
            label={
                <>
                    <Typography component="span">nolietota.</Typography>
                </>
            }
        />
    );
};

export default GridaKabineNolietota;
