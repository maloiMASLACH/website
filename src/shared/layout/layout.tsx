import { Outlet } from "react-router-dom";

import { Logo } from "@features/Logo/Logo.tsx";
import { ScrollToAnchor } from "@shared/layout/ScrollToAnchor.tsx";

import GeneralLayout from "./GeneralLayout/GeneralLayout";

const Layout = () => {
  return (
    <GeneralLayout logo={<Logo />}>
      <Outlet />
      <ScrollToAnchor />
    </GeneralLayout>
  );
};

export default Layout;
