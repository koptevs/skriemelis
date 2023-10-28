import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import va from "@/img/va.png";
import { Typography } from "@mui/material";

const VadibasAparatsNolietots = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="3.4 Lifta kabīnes vadības aparāts ir nolietots."
            nonCompliancesLevel="1"
            imageSource={va}
            control={control}
            label={
                <>
                    <Typography component="span">VA nol</Typography>
                </>
            }
        />
    );
};

export default VadibasAparatsNolietots;
