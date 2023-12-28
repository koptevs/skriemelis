import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const StopJumtaNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.9 Stopslēdzis kabīnes jumtā nedarbojas."
            nonCompliancesLevel="1"
            register={register}
            label={"Stopslēdzis kabīnes jumtā nedarbojas."}
        />
    );
};

export default StopJumtaNedarbojas;
