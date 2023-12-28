import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const NKUKontaktoriNolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="9.0 Elektriskie kontaktori vadības skapī ir nolietoti."
            nonCompliancesLevel="1"
            register={register}
            label={"Elektriskie kontaktori vadības skapī ir nolietoti."}
        />
    );
};

export default NKUKontaktoriNolietoti;
