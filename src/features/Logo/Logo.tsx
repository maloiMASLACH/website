import { images } from "@shared/assets";
import { useTheme } from "@shared/services/theme/theme.service.ts";

export const Logo = () => {
  const { currentTheme } = useTheme();

  return currentTheme === "Light" ? <images.vitreus /> : <images.vitreus />;
};
