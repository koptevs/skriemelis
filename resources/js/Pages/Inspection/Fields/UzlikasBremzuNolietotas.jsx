import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import bremzes from "@/img/bremzes.png";
import { Typography } from "@mui/material";

const AtsperesBremzuNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Bremžu uzlikas ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={bremzes}
            control={control}
            label={
                <Typography component="span">
                    Bremžu uzlikas ir nodilušas.
                </Typography>
            }
        />
    );
};

export default AtsperesBremzuNolietotas;
