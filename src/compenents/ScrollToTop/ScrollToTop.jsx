import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 路由切换时滚动到页面顶部
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
