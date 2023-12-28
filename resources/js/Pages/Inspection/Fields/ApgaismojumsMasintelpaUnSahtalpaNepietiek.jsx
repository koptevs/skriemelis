import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import lamp from "@/img/lamp.png";

const ApgaismojumsMasintelpaUnSahtalpaNepietiek = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="8.0 Nepietiekams mašīntelpas un šahtas apgaismojums."
            nonCompliancesLevel="1"
            imageSource={lamp}
            register={register}
            label={"Nepietiekams mašīntelpas un šahtas apgaismojums."}
        />
    );
};

export default ApgaismojumsMasintelpaUnSahtalpaNepietiek;
