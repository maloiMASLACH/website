import cx from "classnames";
import { FC, HTMLAttributes } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextArea } from "vit-ui-kit";

import { GradientButton } from "@features/Buttons/GradientButton.tsx";
import { CompliqInput } from "@features/CompliqInput/CompliqInput.tsx";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const HelpdeskForm: FC<HTMLAttributes<HTMLFormElement>> = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      {...props}
      className={cx(
        "max-w-[520px] w-full p-32 bg-vitreus-header-border rounded-small flex flex-col gap-12",
        props.className,
      )}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <CompliqInput
        title={"Your name or alias"}
        placeholder={"Please enter your name or alias"}
        type="text"
        {...register("name", { required: true, minLength: 3 })}
        error={errors.name?.message || errors.name?.type}
      />
      <CompliqInput
        title={"Your email"}
        placeholder={"Please enter your email here"}
        type="text"
        {...register("email", {
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
        error={errors.email?.message || errors.email?.type}
      />
      <TextArea
        {...register("message", { required: true, minLength: 20 })}
        error={errors.message?.message || errors.message?.type}
        title={"Your message"}
        placeholder={
          "Please enter your message or question here. If you are encountering an issue, please include any relevant information like the device and the wallet you are using."
        }
        className={
          "[&>span]:!text-compliq-middle [&>div]:bg-none [&>div>div>textarea]:bg-vitreus-input [&>div>div>textarea]:!border [&>div>div>textarea]:!border-transparent focus:[&>div>div>textarea]:!border-whitelabel-main [&>div>div>textarea]:border-solid [&>div>div>textarea]:!text-vitreus-input-text [&>div>div>textarea]:!min-h-[100px]"
        }
      />
      <GradientButton className="!mt-32 !justify-center !text-center !w-full" type={"submit"}>
        SUBMIT
      </GradientButton>
    </form>
  );
};
