"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
});

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prevPath = useRef("");

  useEffect(() => {
    const currentPath = pathname + searchParams.toString();

    if (prevPath.current === "") {
      NProgress.done();
    }
    else if (prevPath.current !== currentPath) {
      NProgress.start();

      setTimeout(() => {
        NProgress.done();
      }, 500);
    }

    prevPath.current = currentPath;
  }, [pathname, searchParams]);

  return null;
}
