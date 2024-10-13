import { VitreusTranslator } from "@features/Translation/Translator.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

const NotFound = () => {
  return (
    <ScreenContainer className={"h-screen"}>
      <WidthContainer className={"w-full h-full flex flex-col items-center text-vitreus-white"}>
        <h1 className={"text-h1"}>
          <VitreusTranslator i18nKey={"pageNotFound.title"} />
        </h1>
        <h2 className={"text-h2"}>
          <VitreusTranslator i18nKey={"pageNotFound.text"} />
        </h2>
      </WidthContainer>
    </ScreenContainer>
  );
};

export default NotFound;
