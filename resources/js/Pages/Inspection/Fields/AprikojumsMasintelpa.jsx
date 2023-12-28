import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const AprikojumsMasintelpa = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.1 Mašīntelpā ir aprīkojums, kas nav saistīts ar liftu."
            nonCompliancesLevel="1"
            // imageSource={lamp}
            register={register}
            label={"Aprīkojums."}
        />
    );
};

export default AprikojumsMasintelpa;
