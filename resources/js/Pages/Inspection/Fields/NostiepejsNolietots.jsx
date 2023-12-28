import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import nostiepejs from "@/img/nostiepejs.png";

const NostiepejsNolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="3.2 Ātruma ierobežotāja stiepšanas ierīce ir nolietota."
            nonCompliancesLevel="1"
            imageSource={nostiepejs}
            register={register}
            label={"Stiepšanas ierīce ir nolietota."}
        />
    );
};

export default NostiepejsNolietots;
