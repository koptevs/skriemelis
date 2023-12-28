import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import griesti from "@/img/griesti.png";

const GriestiKabineNolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes griesti ir nolietoti."
            nonCompliancesLevel="1"
            imageSource={griesti}
            register={register}
            label={"nolietoti."}
        />
    );
};

export default GriestiKabineNolietoti;
