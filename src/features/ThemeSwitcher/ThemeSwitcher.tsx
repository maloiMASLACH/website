import { FC, useCallback } from "react";

import { CompliqGhostButton } from "@features/CompliqButtons/CompliqButtons.tsx";
import { useTheme } from "@shared/services/theme/theme.service.ts";

export const ThemeSwitcher: FC = () => {
  const { changeTheme, currentTheme } = useTheme();

  const handleSwitchTheme = useCallback(() => {
    changeTheme(currentTheme === "Dark" ? "Light" : "Dark");
  }, [changeTheme, currentTheme]);

  return (
    <CompliqGhostButton
      text={currentTheme === "Dark" ? "Light" : "Dark"}
      onClick={handleSwitchTheme}
    />
  );
};
