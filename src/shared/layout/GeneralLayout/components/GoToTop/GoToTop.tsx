import cx from "classnames";
import { FC, HTMLAttributes, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StrokeButton } from "vit-ui-kit";

export interface GoToTopProps extends HTMLAttributes<HTMLButtonElement> {}

export const GoToTop: FC<GoToTopProps> = ({ className, ...props }) => {
  const navigate = useNavigate();

  const goToTop = useCallback(() => {
    navigate({ hash: "" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <StrokeButton
      {...props}
      onClick={goToTop}
      text={"Go to top"}
      className={cx(
        "!text-vitreus-gradient-from !border-vitreus-gradient-from hover:!bg-vitreus-main-black-green",
        className,
      )}
    />
  );
};
