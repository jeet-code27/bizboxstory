"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * On every client-side navigation, instantly scroll the page to the top.
 * Using behavior:"instant" bypasses CSS scroll-behavior so there is
 * zero animation — the new page simply appears at the top.
 */
export default function NoScrollOnNav() {
  const pathname = usePathname();

  useEffect(() => {
    // "instant" ignores CSS scroll-behavior:smooth/auto completely
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

