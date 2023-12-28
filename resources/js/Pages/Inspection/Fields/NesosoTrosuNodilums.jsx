import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import zvans from "@/img/zvans.png";

const NesosoTrosuNodilums = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="2.2 Nesošo trošu nodilums."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            register={register}
            label={"Nesošo trošu nodilums."}
        />
    );
};

export default NesosoTrosuNodilums;
