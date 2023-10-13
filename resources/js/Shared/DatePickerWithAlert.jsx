import * as React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
import { Controller } from "react-hook-form";

export default function DatePickerWithAlert({
    control,
    name,
    label,
    helperText,
    noalert,
    ...rest
}) {
    const [cleared, setCleared] = React.useState(false);

    React.useEffect(() => {
        if (cleared) {
            const timeout = setTimeout(() => {
                setCleared(false);
            }, 1500);

            return () => clearTimeout(timeout);
        }
        return () => {};
    }, [cleared]);

    return (
        <div className="relative w-full">
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                        format="D. MMMM YYYY"
                        label={label}
                        // defaultValue={dayjs()}
                        onChange={onChange}
                        onBlur={onBlur}
                        views={["year", "month", "day"]}
                        // openTo="year"
                        slotProps={{
                            textField: {
                                // helperText: "Formāts - 01. janvāris 2000",
                                helperText: `${helperText ? helperText : ""}`,
                            },
                            field: {
                                size: "small",
                                clearable: true,
                                onClear: () => setCleared(true),
                            },
                            // toolbar: {
                            //     toolbarFormat: "ddd DD MMMM",
                            //     hidden: false,
                            // },
                        }}
                        sx={{ width: "100%" }}
                        {...rest}
                    />
                )}
            />
            {cleared && !noalert && (
                <Alert
                    sx={{
                        position: "fixed",
                        top: 1,
                        left: "50%",
                    }}
                    severity="success"
                >
                    {label} field cleared!
                </Alert>
            )}
        </div>
    );
}
// dayjs(watchAllFields.StartDate).format("DD.MM.YYYY");
