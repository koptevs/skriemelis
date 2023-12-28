import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";

const AIUnTroseNolietoti = ({ register }) => {
    return (
        <CheckboxWithImage
            // className="ml-3.5 inline-block"
            rawName="3.2 Ātruma ierobežotājs un tā trose ir nolietoti."
            nonCompliancesLevel="1"
            // imageSource={os}
            register={register}
            label={"Ātruma ierobežotājs un tā trose ir nolietoti."}
        />
    );
};

export default AIUnTroseNolietoti;
