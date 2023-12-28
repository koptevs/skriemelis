import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";

const AITroseNolietota = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.2 Ātruma ierobežotāja trose ir nodilis."
            nonCompliancesLevel="1"
            // imageSource={os}
            register={register}
            label={"Ātruma ierobežotāja trose ir nodilis."}
        />
    );
};

export default AITroseNolietota;
