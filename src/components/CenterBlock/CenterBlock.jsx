import Search from "../Search";
import Track from "../Track";
import Filter from "../Filter";
import CenterBlockContent from "./CenterBlockContent";

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <Track />
      <Filter />
      <CenterBlockContent />
    </div>
  );
}

export default CenterBlock;
