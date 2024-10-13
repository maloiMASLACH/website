import { FC, useCallback, useEffect } from "react";

import { GradientButton } from "@features/Buttons/GradientButton.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const FastDocPage: FC<{ docPublicPath: string }> = ({ docPublicPath }) => {
  const openDoc = useCallback(() => {
    window.open(docPublicPath);
  }, [docPublicPath]);

  useEffect(() => {
    openDoc();
  }, []);

  return (
    <ScreenContainer className={"h-screen"}>
      <WidthContainer className={"w-full h-full flex items-center justify-center"}>
        <GradientButton onClick={openDoc}>Open</GradientButton>
      </WidthContainer>
    </ScreenContainer>
  );
};

export default FastDocPage;
