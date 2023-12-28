import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import atsperes from "@/img/atsperes.png";

const AtsperesBremzuNolietotas = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Bremžu atsperes ir nodilušas."
            nonCompliancesLevel="1"
            imageSource={atsperes}
            register={register}
            label={"Bremžu atsperes ir nodilušas."}
        />
    );
};

export default AtsperesBremzuNolietotas;
