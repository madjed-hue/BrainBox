"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("307f7a63-4d9a-4ad7-b208-2a6e0ce95c13");
  }, []);

  return null;
};
