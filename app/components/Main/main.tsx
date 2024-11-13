import FirstBlock from "./MainBlock/firstBlock";
import SecondBlock from "./MainBlock/secondBlock";
import ThirdBlock from "./MainBlock/thirdBlock";

export default function Main() {
  return (
      <main className="home">
        <FirstBlock/>
        <div className="second-bg home">
        <SecondBlock/>
        </div>
        <ThirdBlock/>
      </main>
  );
}
