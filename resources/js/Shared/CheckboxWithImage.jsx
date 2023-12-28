import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

const CheckboxWithImage = ({
    rawName,
    nonCompliancesLevel,
    imageSource = false,
    control,
    label,
    className,
    register,
}) => {
    const dotsReplacedWithThreePercentSymbols = rawName
        .replace(/\./g, "%%%")
        .replace(/\,/g, "&&&");
    const name = `nonCompliances${nonCompliancesLevel}.${dotsReplacedWithThreePercentSymbols}`;
    return (
        <div className="flex">
            {imageSource && (
                <img src={imageSource} alt="" width="21px" height="21px" />
            )}
            {/* <FormControlLabel
                className={className}
                control={
                    <Controller
                        name={name}
                        control={control}
                        render={({ field: props }) => (
                            <Checkbox
                                className={`font-bold`}
                                {...props}
                                // checked={props.value}
                                // onChange={(e) =>
                                //     props.onChange(e.target.checked)
                                // }
                            />
                        )}
                    />
                }
                label={label}
            /> */}
            <label>
                <input type="checkbox" {...register(name)} />
                {label}
            </label>
        </div>
    );
};

export default CheckboxWithImage;
