import { FC } from "react";

export interface VitreusCloneComponentsProps {
  componentKey: string;
  i18key: string;
  Component: FC<{ i18key: string }>;
  clonesAmount: number;
}

export const vitreusCloneComponents = ({
  i18key,
  componentKey,
  Component,
  clonesAmount,
}: VitreusCloneComponentsProps) => {
  return Array.from(Array(clonesAmount), (_, index) => ({
    component: `${componentKey}_${index}`,
    key: `${i18key}_${index}`,
  })).reduce(
    (acc, { key, component }) => ({ ...acc, [component]: <Component i18key={key} /> }),
    {},
  );
};
