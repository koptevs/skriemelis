import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import mitrums from "@/img/mitrums.png";

const ReduktorsNolietotsUnEllasNoplude = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.6 Lifta mašīnas reduktora nolietojums un eļļas noplūde."
            nonCompliancesLevel="1"
            imageSource={mitrums}
            register={register}
            label={"Reduktora nolietojums un eļļas noplūde."}
        />
    );
};

export default ReduktorsNolietotsUnEllasNoplude;
