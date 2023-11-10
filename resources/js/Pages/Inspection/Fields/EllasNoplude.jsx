import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import mitrums from "@/img/mitrums.png";
import { Typography } from "@mui/material";

const EllasNoplude = ({ control }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.6 Eļļas noplūde no lifta mašīnas reduktora."
            nonCompliancesLevel="1"
            imageSource={mitrums}
            control={control}
            label={
                <Typography component="span">
                    Eļļas noplūde no reduktora.
                </Typography>
            }
        />
    );
};

export default EllasNoplude;
