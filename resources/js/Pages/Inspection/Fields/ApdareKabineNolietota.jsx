import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";

const ApdareKabineNolietota = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes apdare ir nolietota."
            nonCompliancesLevel="1"
            imageSource={apdare}
            register={register}
            label={"nolietota."}
        />
    );
};

export default ApdareKabineNolietota;
