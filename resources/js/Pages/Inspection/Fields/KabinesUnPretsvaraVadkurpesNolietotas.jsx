import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import brivkustiba from "@/img/brivkustiba.png";

const KabinesUnPretsvaraVadkurpesNolietotas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes un pretsvara brīvkustība vadotnēs (nolietoti vādkurpji)."
            nonCompliancesLevel="1"
            register={register}
            label={"Kabīnes un pretsvara vādkurpes"}
        />
    );
};

export default KabinesUnPretsvaraVadkurpesNolietotas;
