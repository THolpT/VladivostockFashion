import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className="home">
      <Header></Header>
      <Main></Main>
      <div className="second-bg home">
      <Footer></Footer>
      </div>
    </div>
  );
}
