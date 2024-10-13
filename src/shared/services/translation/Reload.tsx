import { StrokeButton, useGlobalModal } from "vit-ui-kit";

export const Reload = (
  <StrokeButton
    onClick={() => window.location.reload()}
    className="w-full !text-vitreus-gradient-from !border-vitreus-gradient-from hover:!bg-vitreus-dotted-border"
    text={"Reload"}
  />
);

export const showReloadModal = () => {
  const { setCustomModal } = useGlobalModal.getState();

  setCustomModal({
    classNames: "[&>div]:min-h-[300px] [&>div]:flex [&>div]:flex-col [&>div]:justify-between",
    description: "Something is wrong with the page loading, try refreshing.",
    titleValue: "IPFS error",
    button: Reload,
  });
};
