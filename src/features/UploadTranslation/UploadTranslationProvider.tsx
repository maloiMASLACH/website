import { FC, HTMLAttributes } from "react";
import { ThirdwebProvider } from "thirdweb/react";

import { CheckTranslation } from "@features/UploadTranslation/CheckTranslation.tsx";
import { GetCurrentTranslation } from "@features/UploadTranslation/GetCurrentTranslation.tsx";
import { UploadCurrentTranslation } from "@features/UploadTranslation/UploadCurrentTranslation.tsx";

const UploadTranslationProvider: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <ThirdwebProvider>
        <CheckTranslation />
        <GetCurrentTranslation />
        <UploadCurrentTranslation />
      </ThirdwebProvider>
    </div>
  );
};

export default UploadTranslationProvider;
