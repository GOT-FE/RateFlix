/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useEffect, useState } from "react";
import ImageHeader from "./ImageHeader";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const image = props.image;
  const movie = props.movie;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mainHeaderHeight, setMainHeaderHeight] = useState(0);

  const mainHeaderRef = useRef(null);

  useEffect(() => {
    // 메인 헤더의 높이를 측정
    if (mainHeaderRef.current) {
      setMainHeaderHeight(mainHeaderRef.current.clientHeight);
    }
    console.log(mainHeaderHeight);
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainHeaderHeight]);

  return (
    <>
      {image && scrollPosition > mainHeaderHeight + 100 && (
        <div style={{ height: mainHeaderHeight }}>
          <MainHeader />
        </div>
      )}
      {image && <ImageHeader image={image} movie={movie} />}

      {!image && <MainHeader ref={mainHeaderRef} />}

      <main
        css={css`
          padding-top: 7rem;
          position: relative; /* Relative positioning으로 설정 */
        `}
      >
        {props.children}
      </main>
    </>
  );
};

export default Layout;
