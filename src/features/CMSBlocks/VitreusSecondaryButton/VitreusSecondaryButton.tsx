import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { GradientButtonProps } from "@features/Buttons/GradientButton.tsx";
import { SecondaryButton } from "@features/Buttons/SecondaryButton.tsx";
import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { images } from "@shared/assets";
import { t } from "@shared/config/translations.config.ts";

export interface VitreusGradientButtonProps extends GradientButtonProps {
  i18key: string;
}

export const VitreusSecondaryButton: FC<VitreusGradientButtonProps> = ({ i18key, ...props }) => {
  const link = useMemo(() => t(i18key + "Link"), [i18key]);

  return (
    <Link
      to={link}
      target={link.includes(":") ? "_blank" : undefined}
      rel="noreferrer"
      className={"block w-fit"}
    >
      <SecondaryButton
        {...props}
        RightIcon={
          props.RightIcon || (
            <div className={"w-20"}>
              <images.questionIcon />
            </div>
          )
        }
      >
        <VitreusTranslator i18nKey={i18key} />
      </SecondaryButton>
    </Link>
  );
};
