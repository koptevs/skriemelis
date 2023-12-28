import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import grida from "@/img/grida.png";

const GridaKabineNolietota = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes grīdas segums ir nolietots."
            nonCompliancesLevel="1"
            imageSource={grida}
            register={register}
            label={"nolietota."}
        />
    );
};

export default GridaKabineNolietota;
