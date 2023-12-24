/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useEffect, useState } from "react";
import ImageHeader from "./ImageHeader";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* 최소 높이를 브라우저 높이만큼 설정 */
      `}
    >
      {image && scrollPosition > mainHeaderHeight + 100 && (
        <div style={{ height: mainHeaderHeight }}>
          <MainHeader />
        </div>
      )}
      {image && <ImageHeader image={image} movie={movie} />}

      {!image && <MainHeader ref={mainHeaderRef} />}

      <main
        css={css`
          padding-top: ${image ? "1rem" : "7rem"};
          position: relative;
          flex: 1; /* 컨텐츠가 남은 공간을 모두 채우도록 설정 */
        `}
      >
        {props.children}
      </main>
      <Footer
        css={css`
          /* 필요한 스타일을 추가하세요 */
          flex-shrink: 0; /* footer가 유연하게 크기를 조절하지 않도록 설정 */
        `}
      />
    </div>
  );
};

export default Layout;
