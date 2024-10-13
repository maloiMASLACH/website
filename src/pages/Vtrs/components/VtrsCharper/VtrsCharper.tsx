import { FC } from "react";

import { DottedButton } from "@features/DottedButton/DottedButton.tsx";
import { ScreenContainer } from "@widgets/ScreenContainer.tsx";
import { WidthContainer } from "@widgets/WidthContainer.tsx";

export const VtrsCharper: FC = () => {
  return (
    <ScreenContainer className="my-60">
      <WidthContainer>
        <div className="flex flex-col items-center">
          <DottedButton>VTRS</DottedButton>
          <p className="text-vitreus-white text-center text-sh1 mt-20">
            VTRS: The Next Chapter Of Web3
          </p>
          <p className="text-compliq-middle text-ws-sh2 mt-40 text-center max-w-[1000px]">
            Welcome to web3’s ecosystem of tomorrow, representing the core of web3:
            Decentralization. <br />{" "}
            <span className="text-vitreus-white">Let’s get back to what web3 was meant to be!</span>
          </p>
        </div>

        {/*<div className="grid grid-cols-2 gap-24 mt-44 mb-80">
          {forCharper.map((chapter) => (
            <VtrsCharpeCard key={chapter.title} {...chapter} />
          ))}
        </div>
        */}
        <p className="text-compliq-middle text-ws-sh2 text-center max-w-[1000px]">
          What sets the VTRS token apart from other cryptocurrencies like Bitcoin and Ethereum?{" "}
          <br /> <span className="text-vitreus-white">The answer is innovation.</span>
        </p>
        <div className="mt-32 mb-24 p-24 bg-vitreus-main-black-green rounded-small w-full ">
          <p className="text-vitreus-white text-ws-h5 mb-16">VTRS is not a digital currency</p>
          <p className="text-compliq-middle text-ws-p1">
            it’s a dynamic force that propels the Vitreus Chain ecosystem. While it can be used like
            a traditional blockchain, it is also the key to other innovations, such as data sharing
            & VNRG.
          </p>
        </div>
        <div className="mt-32 mb-24 p-24 bg-vitreus-main-black-green rounded-small w-full ">
          <p className="text-vitreus-white text-ws-h5 mb-16">VTRS holders</p>
          <p className="text-vitreus-white text-ws-p1">
            Holders of VTRS are a critical part of the Vitreus Chain ecosystem:
          </p>
          <div className=" text-compliq-middle text-ws-p1 flex wrap">
            <div className="flex flex-col justify-between">
              <li>Staking the VTRS token is the only source of VNRG</li>
              <li>
                vNodes, which have already been commissioned to over 15 countries and counting, make
                up the majority of the Vitreus Chain infrastructure, meaning it is truly
                decentralized
              </li>
            </div>
            <div className="flex flex-col justify-between">
              <li className="mb-22">
                Owners of a vNode secure the network and offer staking pools for VTRS holders
              </li>
              <li>
                VTRS also opens the door to participate in the future of Vitreus Chain’s development
                and management through the vGovern system
              </li>
            </div>
          </div>
        </div>
        <div className="w-full text-vitreus-gradient-from bg-vitreus-main-black-green rounded-small py-12 px-16 text-p3 mb-70">
          <p>
            In essence, VTRS is the sunlight that fuels the entire Vitreus Chain – aka the power
            plant – ecosystem, vNodes are the solar panels & VNRG is the consumable energy used to
            power your future.
          </p>
        </div>
      </WidthContainer>
    </ScreenContainer>
  );
};
