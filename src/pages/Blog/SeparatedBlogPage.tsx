import { mainHelmet } from "@shared/helmets/main.ts";
import { withHelmet } from "@shared/hocs";
import PageLayout from "@features/CMSBlocks/PageLayout/PageLayout.tsx";
import { IdList } from "@shared/constants/idList";
import { SeparatedBlogComponent } from "./components/SeparatedBlog/SeparatedBlog";

export const separatedBlogPageConfig = [
  {
    i18key: "blog.news",
    Component: SeparatedBlogComponent,
    id: IdList.Blog,
    names: ["Blog"],
  },
];

const SeparatedBlogPage = () => {
  return <PageLayout config={separatedBlogPageConfig} />;
};

export default withHelmet(SeparatedBlogPage)(mainHelmet);
