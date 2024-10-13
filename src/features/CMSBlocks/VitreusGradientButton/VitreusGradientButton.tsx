import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { GradientButton, GradientButtonProps } from "@features/Buttons/GradientButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { t } from "@shared/config/translations.config.ts";

export interface VitreusGradientButtonProps extends GradientButtonProps {
  i18key: string;
}

export const VitreusGradientButton: FC<VitreusGradientButtonProps> = ({ i18key, ...props }) => {
  const link = useMemo(() => t(i18key + "Link"), []);

  return (
    <Link
      to={link}
      target={link.includes(":") ? "_blank" : undefined}
      rel="noreferrer"
      className={"block w-fit"}
    >
      <GradientButton {...props} RightIcon={props.RightIcon || <images.rightBtn />}>
        <VitreusTranslator i18nKey={i18key} />
      </GradientButton>
    </Link>
  );
};
