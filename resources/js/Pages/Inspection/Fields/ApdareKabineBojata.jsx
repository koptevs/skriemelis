import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";

const ApdareKabineBojata = ({ register }) => {
    return (
        <CheckboxWithImage // apdare bojata
            // className="ml-3.5"
            rawName="4.1 Lifta kabīnes apdare ir bojāta."
            nonCompliancesLevel="1"
            imageSource={apdare}
            register={register}
            label={"Apdare ir bojāta."}
        />
    );
};

export default ApdareKabineBojata;
