import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import os from "@/img/os.png";

const AINolietots = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-0.5 inline-block"
            rawName="3.2 Ātruma ierobežotājs ir nolietots."
            nonCompliancesLevel="1"
            imageSource={os}
            register={register}
            label={"Ātruma ierobežotājs nolietots."}
        />
    );
};

export default AINolietots;
