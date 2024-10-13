import { FC, ReactNode, Suspense } from "react";
import { GlobalLoader, Loader } from "vit-ui-kit";

import { images } from "@shared/assets";
import { Footer } from "@shared/layout/GeneralLayout/components/Footer/Footer.tsx";
import { GoToTop } from "@shared/layout/GeneralLayout/components/GoToTop/GoToTop.tsx";
import { Header } from "@shared/layout/GeneralLayout/components/Header/Header.tsx";
import { Particles } from "@shared/layout/GeneralLayout/Particles.tsx";

type LayoutProps = {
  children: ReactNode | ReactNode[];
  logo: ReactNode;
};

const GeneralLayout: FC<LayoutProps> = ({ children, logo }) => {
  return (
    <GlobalLoader>
      <Header logo={logo} />
      <Suspense
        fallback={
          <div className="flex m-auto w-full h-screen justify-center items-center">
            <Loader />
          </div>
        }
      >
        <div className={"h-full overflow-hidden absolute top-0 bottom-0 left-0 right-0"}>
          <img src={images.rightBlur} className="absolute right-0" alt={"rightBlur"} />
          <img src={images.leftBlur} className="absolute left-0" alt={"leftBlur"} />
          <img src={images.cornerBlur} className="absolute right-0" alt={"cornerBlur"} />
          <img
            src={images.earningBgBlur}
            className="absolute left-0 bottom-0"
            alt={"earningBgBlur"}
          />
        </div>
        {children}
        <Particles />
        <div className={"!sticky bottom-0 right-0 w-full flex justify-end"}>
          <GoToTop className={"!absolute bottom-50 right-50"} />
        </div>

        <Footer />
      </Suspense>
    </GlobalLoader>
  );
};

export default GeneralLayout;
