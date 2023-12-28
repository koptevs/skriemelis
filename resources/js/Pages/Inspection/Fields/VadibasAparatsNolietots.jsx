import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import va from "@/img/va.png";

const VadibasAparatsNolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="3.4 Lifta kabīnes vadības aparāts ir nolietots."
            nonCompliancesLevel="1"
            imageSource={va}
            register={register}
            label={"VA nol"}
        />
    );
};

export default VadibasAparatsNolietots;
