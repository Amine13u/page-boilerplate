import Topbar from "../TopBar";
import ContentHeader from "./ContentHeader";
import ContentSubHeader from "./ContentSubHeader";
import Tables from "./Tables";
import Tags from "./Tags";

import pencil from "../../assets/icons/pencil.svg";

const Content = () => {
  return (
    <div>
      <Topbar />

      {/* Content Header */}
      <ContentHeader />

      {/* Content Sub Header */}
      <ContentSubHeader />

      {/* Tags */}
      <Tags />

      {/* Tables */}
      <Tables />

      {/* Button */}
      <div className="p-4">
        <button className="bg-blue-100 text-blue-700 w-full font-semibold py-2 px-4 rounded flex justify-center items-center gap-4">
          <img src={pencil} alt="pencil" className="w-4" />
          <span>Modifier</span>
        </button>
      </div>
    </div>
  );
};

export default Content;
