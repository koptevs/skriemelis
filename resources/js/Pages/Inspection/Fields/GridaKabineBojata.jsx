import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import grida from "@/img/grida.png";

const GridaKabineBojata = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5"
            rawName="4.1 Lifta kabīnes grīdas segums ir bojāts."
            nonCompliancesLevel="1"
            imageSource={grida}
            register={register}
            label={"Grīda ir bojāta"}
        />
    );
};

export default GridaKabineBojata;
