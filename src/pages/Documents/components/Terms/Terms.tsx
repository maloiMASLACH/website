import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";
import { DocsBlock } from "@widgets/DocsBlock";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { Items } from "./utils";

const Terms = () => {
  return (
    <ScreenContainer>
      <WidthContainer
        contentMaxWidth={"max-w-[1296px]"}
        className="flex flex-col justify-center items-center"
      >
        <div className={"flex flex-col items-center mb-40 max-w-[1296px]"}>
          <DottedButton>DOCUMENTS</DottedButton>
          <p className="text-vitreus-white text-h2 mt-20 mb-24 font-thin">Terms and Conditions</p>
        </div>
        <div className={"flex flex-col mb-88 max-w-[1074px]"}>
          {Items.map((info) => (
            <DocsBlock key={info.title} title={info.title} content={info.content} />
          ))}
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};

export default withHelmet(Terms)(mainHelmet);
