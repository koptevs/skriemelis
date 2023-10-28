import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import { Typography } from "@mui/material";

const PretsvaraVadkurpesNolietotas = ({ control }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs (nolietoti vādkurpji)."
            nonCompliancesLevel="1"
            control={control}
            label={
                <Typography component="span">Pretsvara vādkurpes</Typography>
            }
        />
    );
};

export default PretsvaraVadkurpesNolietotas;
