import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { blogPageConfig } from "@pages/Blog/Blog";
import { companyPageConfig } from "@pages/Company/Company.tsx";
import { documentsPageConfig } from "@pages/Documents/Documents.tsx";
import { earningPageConfig } from "@pages/Earning/Earning.tsx";
import { ecosystemPageConfig } from "@pages/Ecos/Ecosystem.tsx";
import { vtrsPageConfig } from "@pages/Vtrs/Vtrs.tsx";
import { pageConfigToAnchors } from "@shared/utils/pageConfigToAnchors.ts";
import { policiesRoutes } from "@shared/utils/policies.tsx";
import { redirects } from "@shared/utils/redirects.tsx";

import { supportPageConfig } from "../pages/Support/Support";

import { RoutesNames } from "./constants/routes-names";

const Layout = lazy(() => import("./layout/layout"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Home = lazy(() => import("../pages/Home/Home"));
const Vtrs = lazy(() => import("../pages/Vtrs/Vtrs"));
const Ecosystem = lazy(() => import("../pages/Ecos/Ecosystem"));
const Earning = lazy(() => import("../pages/Earning/Earning"));
const Documents = lazy(() => import("../pages/Documents/Documents"));
const Support = lazy(() => import("../pages/Support/Support"));
const Company = lazy(() => import("../pages/Company/Company"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const SeparatedBlogPage = lazy(() => import("../pages/Blog/SeparatedBlogPage"));

export const routes = () =>
  createBrowserRouter([
    {
      path: RoutesNames.Home,
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: RoutesNames.NotFound,
          element: <NotFound />,
        },
        {
          path: RoutesNames.Home,
          element: <Home />,
        },
        {
          path: RoutesNames.Vtrs,
          element: <Vtrs />,
        },
        {
          path: RoutesNames.Ecosystem,
          element: <Ecosystem />,
        },
        {
          path: RoutesNames.EarningPrograms,
          element: <Earning />,
        },
        {
          path: RoutesNames.Documents,
          element: <Documents />,
        },
        {
          path: RoutesNames.Support,
          element: <Support />,
        },
        {
          path: RoutesNames.Company,
          element: <Company />,
        },
        {
          path: RoutesNames.Blog, // This will handle /blog
          element: <Blog />,
        },
        {
          path: `${RoutesNames.Blog}/:slug`, // This will handle /blog/:slug
          element: <SeparatedBlogPage />,
        },
        ...policiesRoutes(),
        ...redirects(),
      ],
    },
  ]);

export const getRouteLinks = () => [
  {
    route: RoutesNames.Vtrs,
    name: "VTRS",
    itemsList: pageConfigToAnchors(vtrsPageConfig),
  },
  {
    route: RoutesNames.Ecosystem,
    name: "ECOSYSTEM",
    itemsList: pageConfigToAnchors(ecosystemPageConfig),
  },
  {
    route: RoutesNames.EarningPrograms,
    name: "EARNING PROGRAMS",
    itemsList: pageConfigToAnchors(earningPageConfig),
  },
  {
    route: RoutesNames.Documents,
    name: "DOCUMENTS",
    itemsList: pageConfigToAnchors(documentsPageConfig),
  },
  {
    route: RoutesNames.Support,
    name: "SUPPORT",
    itemsList: pageConfigToAnchors(supportPageConfig),
  },
  {
    route: RoutesNames.Blog,
    name: "BLOG",
    // itemsList: pageConfigToAnchors(blogPageConfig),
  },
  {
    route: RoutesNames.Company,
    name: "COMPANY",
    // itemsList: pageConfigToAnchors(companyPageConfig),
  },
];
