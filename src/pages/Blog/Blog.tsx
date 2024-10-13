import { IdList } from "@shared/constants/idList.ts";
import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";
import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { News } from "@pages/Blog/components/News/News";

export const blogPageConfig = [
  {
    i18key: "blog.news",
    Component: News,
    id: IdList.Blog,
    names: ["Blog"],
  },
];

const Blog = () => {
  return <PageLayout config={blogPageConfig} />;
};

export default withHelmet(Blog)(mainHelmet);
