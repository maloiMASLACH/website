import { useUser } from "@shared/services/user/user.service";
import cx from "classnames";
import { ReactElement, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { DropDownV2 } from "vit-ui-kit";

// @ts-ignore
import { ShortenString } from "@features/ShortenString/ShortenString.tsx";

import { ReactComponent as AngleDown } from "../../Icons/angleDown.svg";
import { ReactComponent as AngleUp } from "../../Icons/angleUp.svg";

type UserMenuProps = {
  headerData: {
    icon: ReactElement;
    name: string;
    onClick?: () => void;
  }[];
};

const UserMenu = ({ headerData }: UserMenuProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const { userData } = useUser();

  const toggleDropDown = () => {
    setIsDropDownOpen((prevState) => !prevState);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsDropDownOpen(false)}>
      <div className="relative">
        <div
          onClick={toggleDropDown}
          className={cx(
            "flex flex-row relative items-center ml-12 rounded-small px-12 py-10 cursor-pointer hover:bg-whitelabel-main-800 text-vitreus-black-100 active:bg-whitelabel-main-600",
            {
              "bg-whitelabel-main-600": isDropDownOpen,
            },
          )}
        >
          {userData?.avatar.url && (
            <div className="rounded-full w-40 h-40 mr-12">
              <img src={userData?.avatar.url} alt={"Avatar"} />
            </div>
          )}
          <div className="flex justify-between align-center text-center flex-wrap gap-x-28">
            {userData && (
              <div className="text-ws-p1 text-left">
                <ShortenString>{userData.fullName}</ShortenString>
              </div>
            )}
            <div className="flex justify-center items-center cursor-pointer">
              {isDropDownOpen ? <AngleUp /> : <AngleDown />}
            </div>
          </div>
        </div>
        {isDropDownOpen && (
          <DropDownV2
            itemsList={headerData}
            className="absolute left-10 mt-10 bg-whitelabel-main-600 drop-shadow-xl"
          />
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default UserMenu;
