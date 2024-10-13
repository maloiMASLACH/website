import cx from "classnames";
import { FC, HTMLAttributes } from "react";

import { isHidden } from "@shared/utils/isHidden.ts";
import { PageLayoutConfig } from "@shared/utils/pageConfigToAnchors.ts";

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  config: PageLayoutConfig[];
}

const PageLayout: FC<PageLayoutProps> = ({ config, ...props }) => {
  return (
    <div {...props} className={cx("flex flex-col", props.className)}>
      {config
        .filter(({ i18key }) => !isHidden(i18key))
        .map(({ Component, id, i18key }) => (
          <Component key={i18key} id={id} />
        ))}
    </div>
  );
};

export default PageLayout;
