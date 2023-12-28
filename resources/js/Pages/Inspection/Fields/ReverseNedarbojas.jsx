import CheckboxWithImage from "@/Shared/CheckboxWithImage";
import React from "react";
import apdare from "@/img/apdare.png";

const ReverseNedarbojas = ({ register }) => {
    return (
        <CheckboxWithImage
            rawName="7.2 Durvju reverse mehānisms nedarbojas."
            nonCompliancesLevel="1"
            register={register}
            label={
                <>
                    <span style={{ color: "red", fontWeight: 700 }}>
                        &laquo;&laquo;REVERSE&raquo;&raquo;
                    </span>
                    nedarbojas
                </>
            }
        />
    );
};

export default ReverseNedarbojas;
