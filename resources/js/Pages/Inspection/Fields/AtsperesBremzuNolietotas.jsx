import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import atsperes from "@/img/atsperes.png";
import { Typography } from "@mui/material";

const AtsperesBremzuNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Bremžu atsperes ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={atsperes}
            control={control}
            label={
                <Typography component="span">
                    Bremžu atsperes ir nodilušas.
                </Typography>
            }
        />
    );
};

export default AtsperesBremzuNolietotas;
