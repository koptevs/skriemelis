import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import skriemelis from "@/img/skriemelis.png";

const VadskriemelaNodilums = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Vādskriemeļa nodilums."
            nonCompliancesLevel="1"
            imageSource={skriemelis}
            register={register}
            label={"Vādskriemeļa nodilums."}
        />
    );
};

export default VadskriemelaNodilums;
