import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import mitrums from "@/img/mitrums.png";

const EllasNoplude = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.6 Eļļas noplūde no lifta mašīnas reduktora."
            nonCompliancesLevel="1"
            imageSource={mitrums}
            register={register}
            label={"Eļļas noplūde no reduktora."}
        />
    );
};

export default EllasNoplude;
