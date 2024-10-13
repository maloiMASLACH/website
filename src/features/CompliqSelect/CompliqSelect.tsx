import cx from "classnames";
import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { SelectV2 } from "vit-ui-kit";
import { SelectProps, SelectValue } from "vit-ui-kit/dist/components/SelectV2";

export const CompliqSelect = <T,>({ className, ...props }: SelectProps<T>) => {
  return (
    <SelectV2
      {...props}
      className={cx(
        "[&>div>label>div]:bg-none [&>div>label>div>div>input]:bg-vitreus-white [&>div>label>div>div>input]:!border [&>div>label>div>div>input]:!border-transparent focus:[&>div>label>div>div>input]:!border-whitelabel-main [&>div>label>div>div>input]:border-solid focus:[&>div>label>div>div>input]:text-gray",
        className,
      )}
    />
  );
};

export const ControlledSelect = <
  T,
  TName extends FieldPath<TFieldValues>,
  TFieldValues extends FieldValues = FieldValues,
>(
  props: Omit<ControllerProps<TFieldValues, TName>, "render"> &
    Omit<SelectProps<T>, "value" | "onChange"> & {
      customOnChange?: (value?: SelectValue<T>) => void;
    },
) => {
  const { name, control, customOnChange, ...selectProps } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: selectProps.inputProps?.required }}
      render={({ field }) => {
        const onChange = (value: SelectValue<T>) => {
          field.onChange(value);
          customOnChange && customOnChange(value);
        };

        return <CompliqSelect {...selectProps} {...field} onChange={onChange} />;
      }}
    />
  );
};
