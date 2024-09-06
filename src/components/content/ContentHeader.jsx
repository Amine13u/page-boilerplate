import PropTypes from "prop-types";
import ellipsis from "../../assets/icons/ellipsis-vertical.svg";
import clone from "../../assets/icons/clone.svg";
import book from "../../assets/icons/book.svg";

const ICONS = {
  ellipsis,
  clone,
  book,
};

const IconButton = ({ icon, alt, children }) => (
  <div className="flex items-center gap-2">
    <img src={icon} alt={alt} className="w-4" />
    <button className="border-r border-gray-300 pr-2.5">{children}</button>
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContentHeader = () => {
  return (
    <div className="py-2 px-4 flex justify-between items-center">
      <h2 className="font-bold text-lg">Réf : ACT_318233514 / WATEA</h2>
      <div className="flex space-x-2">
        <IconButton icon={ICONS.clone} alt="clone">
          Copier la référence
        </IconButton>
        <IconButton icon={ICONS.book} alt="book">
          Voir la Fiche Synthèse
        </IconButton>
        <img src={ICONS.ellipsis} alt="ellipsis" className="w-1" />
      </div>
    </div>
  );
};

export default ContentHeader;
