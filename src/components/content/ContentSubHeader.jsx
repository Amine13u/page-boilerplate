import PropTypes from "prop-types";
import info from "../../assets/icons/info.svg";
import folder from "../../assets/icons/folder.svg";
import globe from "../../assets/icons/globe.svg";
import calendar from "../../assets/icons/calendar.svg";
import clock from "../../assets/icons/clock.svg";
import stack from "../../assets/icons/stack.svg";
import page from "../../assets/icons/page.svg";

const ICONS = {
  info,
  folder,
  globe,
  calendar,
  clock,
  stack,
  page,
};

const IconButton = ({ icon, alt, children }) => (
  <div className="flex items-center gap-3">
    <button className="pr-2.5">{children}</button>
    <img src={icon} alt={alt} className="w-4" />
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ContentSubHeader = () => {
  return (
    <div className="py-2 px-4 flex justify-between items-center bg-blue-100">
      <div className="flex gap-2 items-center">
        <h2 className="font-semibold text-lg text-blue-700">Automatisation</h2>
        <img src={ICONS.info} alt="info" className="w-4" />
      </div>
      <div className="flex space-x-2">
        <div className="flex items-center gap-3 border-r-2 border-gray-300 pr-2.5">
          <IconButton icon={ICONS.folder} alt="folder">
            Process
          </IconButton>
          <img src={ICONS.globe} alt="globe" className="w-4" />
        </div>
        <div className="flex items-center gap-3 border-r-2 border-gray-300 pr-2.5">
          <IconButton icon={ICONS.calendar} alt="calendar">
            Events
          </IconButton>
          <img src={ICONS.page} alt="page" className="w-4" />
        </div>
        <div className="flex items-center gap-3">
          <IconButton icon={ICONS.stack} alt="stack">
            Actions
          </IconButton>
          <img src={ICONS.clock} alt="clock" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default ContentSubHeader;
