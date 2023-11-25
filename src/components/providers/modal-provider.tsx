"use client";

import { useEffect, useState } from "react";
import { SettingModal } from "@/components/modals/setting-modal";
import { CoverImageModal } from "../modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounded] = useState(false);

  useEffect(() => {
    setIsMounded(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
};
