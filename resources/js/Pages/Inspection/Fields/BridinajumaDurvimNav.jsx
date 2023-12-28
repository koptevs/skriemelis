import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const BridinajumaDurvimNav = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="1.4 Mašīntelpas durvīm nav brīdinājuma uzraksta Nepiederošiem ieeja aizliegta."
            nonCompliancesLevel="1"
            register={register}
            label={"Durvīm nav brīdinājuma."}
        />
    );
};

export default BridinajumaDurvimNav;
