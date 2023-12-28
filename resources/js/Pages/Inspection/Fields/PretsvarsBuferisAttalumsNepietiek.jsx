import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import attalums from "@/img/attalums.png";

const PretsvarsBuferisAttalumsNepietiek = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.3 Palielināta lifta kabīnes brīvkustība vadotnēs."
            nonCompliancesLevel="1"
            imageSource={attalums}
            register={register}
            label={"Pretsvars - buferis nepietiekams"}
        />
    );
};

export default PretsvarsBuferisAttalumsNepietiek;
