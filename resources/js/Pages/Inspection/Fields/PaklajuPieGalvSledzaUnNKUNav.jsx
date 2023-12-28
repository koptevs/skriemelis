import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import kovriki from "@/img/kovriki.png";

const PaklajuPieGalvSledzaUnNKUNav = ({ register }) => {
    return (
        <CheckboxWithImage
            className="ml-3.5 inline-block"
            rawName="3.1 Nav dielektrisko paklāju pie vadības skapja un pie galvenā barošanas slēdža."
            nonCompliancesLevel="1"
            imageSource={kovriki}
            register={register}
            label={
                "Nav dielektrisko paklāju pie vadības skapja un pie galvenā barošanas slēdža."
            }
        />
    );
};

export default PaklajuPieGalvSledzaUnNKUNav;
