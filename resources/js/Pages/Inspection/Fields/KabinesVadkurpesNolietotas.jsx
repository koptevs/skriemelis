import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import brivkustiba from "@/img/brivkustiba.png";

const KabinesVadkurpesNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs (nolietoti vādkurpji)."
            nonCompliancesLevel="1"
            control={control}
            label={<Typography component="span">Kabīnes vādkurpes</Typography>}
        />
    );
};

export default KabinesVadkurpesNolietotas;
