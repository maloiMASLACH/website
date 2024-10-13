import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { GradientButtonProps } from "@features/Buttons/GradientButton.tsx";
import { SecondaryButton } from "@features/Buttons/SecondaryButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { t } from "@shared/config/translations.config.ts";

export interface VitreusIconButtonProps extends GradientButtonProps {
  i18key: string;
}

export const VitreusIconButton: FC<VitreusIconButtonProps> = ({ i18key, ...props }) => {
  const link = useMemo(() => t(i18key + "Link"), [i18key]);
  const leftIcon = useMemo(() => t(i18key + "LeftIcon", { defaultValue: "" }), [i18key]);
  const rightIcon = useMemo(() => t(i18key + "RightIcon", { defaultValue: "" }), [i18key]);

  return (
    <Link
      to={link}
      target={link.includes(":") ? "_blank" : undefined}
      rel="noreferrer"
      className={"block w-fit"}
    >
      <SecondaryButton
        {...props}
        LeftIcon={leftIcon ? <img src={leftIcon} alt={`${i18key}LeftIcon`} /> : null}
        RightIcon={rightIcon ? <img src={rightIcon} alt={`${i18key}RightIcon`} /> : null}
      >
        <VitreusTranslator i18nKey={i18key} />
      </SecondaryButton>
    </Link>
  );
};
