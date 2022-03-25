import React, { useEffect, useState } from "react";

function InfiniteScroll({ loadMore, isFetching, noMore, threshold, children }) {
  const [el, setEl] = useState(null);

  useEffect(() => {
    if (isFetching || noMore || !el) return;
    function scrollListener() {
      const offset = (el.offsetTop + el.offsetHeight) - window.pageYOffset - window.innerHeight;
      if (offset < threshold) {
        loadMore();
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [isFetching, noMore, el, loadMore, threshold]);

  return (
    <div ref={node => setEl(node)} >
      {children}
    </div>
  );
  
}

export default InfiniteScroll;