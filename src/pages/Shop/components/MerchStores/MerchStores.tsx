import { FC } from "react";
import { TableV2 } from "vit-ui-kit";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { images } from "@shared/assets";
import { BackgroundImageContainer } from "@widgets/BackgroundImageContainer.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

import { data } from "./data";
import { tableConfig } from "./utils";

export const MerchStores: FC = () => {
  return (
    <ScreenContainer>
      <BackgroundImageContainer>
        <img src={images.earningBg} alt={"ecoBg"} />
        <img src={images.earningBg} alt={"ecoBg"} />
      </BackgroundImageContainer>

      <WidthContainer className="flex flex-row items-center justify-between">
        <TableV2
          data={data}
          columns={tableConfig}
          className="bg-vitreus-main-black-green rounded-small p-24 max-w-[530px] w-full "
          classNames={{
            row: "!border-vitreus-header-border text-vitreus-white",
            header: "!border-vitreus-header-border hidden",
          }}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-left max-w-[636px] mb-44 justify-start relative">
            <DottedButton>SHOP</DottedButton>
            <p className="text-vitreus-white text-h2 mt-20 mb-[30px]">Merch Stores</p>
            <p className="text-compliq-middle text-ws-h5 text-left mb-44">
              We are offering a wide range of merchandise and have partnered up with Zazzle for
              fulfillment. Zazzle is one of the largest print-on-demand providers on the planet and
              guarantees the world-wide availability of our merch. <br /> <br />
              It also offers a full 30-day money back guarantee to ensure that you are 100%
              satisfied with your ordered items – else you get your money back.
              <br /> <br />
              Please make sure you order from the respective store for your country or region of
              residence so you won&apos;t have to deal with customs and you get the best prices on
              shipping.
              <br /> <br />
            </p>
          </div>
          <img className="mb-40 max-w-[648px]" src={images.teamMerch} alt="" />
          <p className="text-center text-ws-p1 text-vitreus-white max-w-[508px]">
            In our merch stores you&apos;ll find everything from Hoodies, Sweatshirts, and T-Shirts
            to mugs and mousepads.
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
