import { Container } from "react-bootstrap";
import BlogNavbar from "components/Navbar";
import Head from "next/head";
import Footer from "components/Footer";
const PageLayout = ({children, className}) => {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <BlogNavbar />
      <div className = {`wrapper ${className}`}>
       {children}
      </div>
      <Footer />
    </Container>
  );
};
export default PageLayout;
