import cx from "classnames";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { Input } from "vit-ui-kit";
import { InputProps } from "vit-ui-kit/dist/components/Input/Input";

export const CompliqInput: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>> =
  forwardRef(({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
        className={cx(
          "[&>span]:!text-compliq-middle [&>div]:bg-none [&>div>div>input]:bg-vitreus-input [&>div>div>input]:!border [&>div>div>input]:!border-transparent focus:[&>div>div>input]:!border-whitelabel-main [&>div>div>input]:border-solid [&>div>div>input]:!text-vitreus-input-text",
          className,
        )}
      />
    );
  });
