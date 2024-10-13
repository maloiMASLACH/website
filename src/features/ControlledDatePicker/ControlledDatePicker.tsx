import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";
import { DatePicker } from "vit-ui-kit";
import { CustomDatePickerProps } from "vit-ui-kit/dist/components/DatePicker/DatePicker";

export const ControlledDatePicker = <
  TName extends FieldPath<TFieldValues>,
  TFieldValues extends FieldValues = FieldValues,
>(
  props: Omit<ControllerProps<TFieldValues, TName>, "render"> &
    Omit<CustomDatePickerProps, "value" | "onChange"> & {
      customOnChange?: (value?: DateObject[] | DateObject | null) => void;
    },
) => {
  const { name, control, customOnChange, ...datePickerProps } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onChange = (value: DateObject[] | DateObject | null) => {
          field.onChange(value);
          customOnChange && customOnChange(value);
        };

        return <DatePicker {...datePickerProps} {...field} onChange={onChange} />;
      }}
    />
  );
};
