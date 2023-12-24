import ImageHeader from "./ImageHeader";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const image = props.image;
  return (
    <>
      {!image && <MainHeader />}
      {image && <ImageHeader image={image} />}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
