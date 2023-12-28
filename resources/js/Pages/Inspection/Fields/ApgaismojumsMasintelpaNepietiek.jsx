import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import lamp from "@/img/lamp.png";

const ApgaismojumsKabineNepietiek = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="8.0 Nepietiekams apgaismojums mašintelpā."
            nonCompliancesLevel="1"
            imageSource={lamp}
            register={register}
            label={"Nepietiekams apgaismojums mašintelpā."}
        />
    );
};

export default ApgaismojumsKabineNepietiek;
