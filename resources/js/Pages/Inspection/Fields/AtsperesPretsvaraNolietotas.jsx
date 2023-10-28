import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import atsperes from "@/img/atsperes.png";

const AtsperesPretsvaraNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.5 Pretsvara balstiekārtas atsperes ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={atsperes}
            control={control}
            label={
                <Typography component="span">
                    Pretsvara atsperes nolietotas
                </Typography>
            }
        />
    );
};

export default AtsperesPretsvaraNolietotas;
