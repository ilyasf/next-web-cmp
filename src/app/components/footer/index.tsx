"use client";
import React, { useEffect } from "react";

export const FooterReactWrapper: React.FC = () => {
  useEffect(() => {
    import("./footer");
  }, []);

  return <footer-component />;
};
