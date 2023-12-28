import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const PretsvaraVadkurpesNolietotas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta pretsvara brīvkustība vadotnēs (nolietoti vādkurpji)."
            nonCompliancesLevel="1"
            register={register}
            label={"Pretsvara vādkurpes"}
        />
    );
};

export default PretsvaraVadkurpesNolietotas;
