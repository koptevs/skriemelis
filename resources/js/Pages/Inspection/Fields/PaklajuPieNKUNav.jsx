import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import kovriki from "@/img/kovriki.png";

const PaklajuPieNKUNav = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.1 Nav dielektrisko paklāju pie vadības skapja."
            nonCompliancesLevel="1"
            imageSource={kovriki}
            register={register}
            label={"Nav dielektrisko paklāju pie vadības skapja."}
        />
    );
};

export default PaklajuPieNKUNav;
