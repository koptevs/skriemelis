import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import atsperes from "@/img/atsperes.png";

const AtsperesPretsvaraNolietotas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="5.5 Pretsvara balstiekārtas atsperes ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={atsperes}
            label={"Pretsvara atsperes nolietotas."}
            register={register}
        />
    );
};

export default AtsperesPretsvaraNolietotas;
