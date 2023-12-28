import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import manjetsi from "@/img/manjetsi.png";

const ApmalesApNesosamTrosemNav = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm."
            nonCompliancesLevel="1"
            imageSource={manjetsi}
            register={register}
            label={"Mašīntelpā nav 5 cm. apmaļu grīdā ap nesošām trosēm."}
        />
    );
};

export default ApmalesApNesosamTrosemNav;
