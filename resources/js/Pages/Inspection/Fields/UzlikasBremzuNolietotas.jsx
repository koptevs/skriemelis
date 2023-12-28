import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import bremzes from "@/img/bremzes.png";

const AtsperesBremzuNolietotas = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Bremžu uzlikas ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={bremzes}
            register={register}
            label={"Bremžu uzlikas ir nodilušas."}
        />
    );
};

export default AtsperesBremzuNolietotas;
