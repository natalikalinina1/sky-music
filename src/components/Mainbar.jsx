import CenterBlock from "./CenterBlock/CenterBlock";
import Nav from "./Nav";
import Sidebar from "./Sidebar/Sidebar";

export { Mainbar };

function Mainbar() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <Sidebar />
    </main>
  );
}

export default Mainbar;
