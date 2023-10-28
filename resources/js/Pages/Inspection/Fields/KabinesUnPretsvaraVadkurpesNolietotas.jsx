import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";
import brivkustiba from "@/img/brivkustiba.png";

const KabinesUnPretsvaraVadkurpesNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs (nolietoti vādkurpji)."
            nonCompliancesLevel="1"
            control={control}
            label={
                <Typography component="span">
                    Kabīnes un pretsvara vādkurpes
                </Typography>
            }
        />
    );
};

export default KabinesUnPretsvaraVadkurpesNolietotas;
