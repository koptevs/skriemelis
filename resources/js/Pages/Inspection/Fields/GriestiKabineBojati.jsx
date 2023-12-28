import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import griesti from "@/img/griesti.png";

const GriestiKabineBojati = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="4.1 Lifta kabīnes griesti ir bojāti."
            nonCompliancesLevel="1"
            imageSource={griesti}
            register={register}
            label={"Griesti ir bojāti."}
        />
    );
};

export default GriestiKabineBojati;
