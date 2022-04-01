import React, { useEffect, useState } from "react";

function InfiniteScroll({ loadMore, isFetching, noMore, threshold, children }) {
  const [el, setEl] = useState(null);

  useEffect(() => {
    if (isFetching || noMore || !el) return;
    function scrollHandler() {
      const offset =
        el.offsetTop +
        el.offsetHeight -
        window.pageYOffset -
        window.innerHeight;
      if (offset < threshold) {
        loadMore();
      }
    }
    const throttledScrollHandler = throttle(scrollHandler, 300);
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [isFetching, noMore, el, loadMore, threshold]);

  return <div ref={(node) => setEl(node)}>{children}</div>;
}

export default InfiniteScroll;


// simple throttle implement
function throttle(fn, interval) {
  let needToExec = true, isFirstTime = true;
  return function() {
    if (isFirstTime) {
      fn.apply(this, arguments);
      isFirstTime = false;
      return;
    }
    if (needToExec) {
      needToExec = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        needToExec = true;
      }, interval);
    }
  }
}