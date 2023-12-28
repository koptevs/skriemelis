import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import skriemelis_nevienmerigs from "@/img/skriemelis_nevienmerigs.png";

const VadskriemelaNevienmerigsNodilums = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.6 Nevienmērīgs lifta mašīnas vadošā skriemeļa nodilums."
            nonCompliancesLevel="1"
            imageSource={skriemelis_nevienmerigs}
            register={register}
            label={"Nevienmērīgs lifta mašīnas vadošā skriemeļa nodilums."}
        />
    );
};

export default VadskriemelaNevienmerigsNodilums;
