import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const LukaBojata = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.1 Mašīntelpā lūka ir bojāta."
            nonCompliancesLevel="1"
            register={register}
            label={"Mašīntelpā lūka ir bojāta."}
        />
    );
};

export default LukaBojata;
