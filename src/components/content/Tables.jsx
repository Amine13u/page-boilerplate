import PropTypes from "prop-types";

const firstTable = [
  { label: "Référence de Tiers", value: "ACT_318233514", isLink: true },
  { label: "Type de Tiers", value: "Personne morale" },
  { label: "Raison sociale", value: "Watea" },
  { label: "Libellé court", value: "WAT" },
  { label: "Identifiant national", value: "00572053700025" },
  { label: "Pays d'immatriculation", value: "00572053700025" },
  { label: "Catégorie juridique", value: "1200 - Commerçant" },
  {
    label: "Code activité",
    value: "01.13oz - Culture de légumes, de melons, de racines...",
  },
  { label: "Date de création", value: "5/7/2024" },
];

const secondTable = [
  { label: "Date de début", value: "5/7/2024" },
  { label: "Rôle", value: "Partenaire" },
  { label: "Phase", value: "Initial" },
  { label: "Jalon", value: "Nouveau" },
  { label: "N° T.V.A Intracommunautaire", value: "--" },
  { label: "Canal d'apport", value: "Direct" },
  { label: "Référence externe", value: "--" },
  { label: "Référence externe", value: "--" },
  { label: "Mémo", value: "--" },
];

const TableRow = ({ label, value, isLink, isLast }) => (
  <p
    className={`flex justify-between ${
      !isLast ? "border-b border-gray-400 pb-2" : ""
    }`}
  >
    <span className="text-gray-400">{label}:</span>
    {isLink ? (
      <a href="#" className="text-blue-600 font-semibold">
        {value}
      </a>
    ) : (
      <span className="font-semibold">{value}</span>
    )}
  </p>
);

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  isLast: PropTypes.bool,
};

TableRow.defaultProps = {
  isLink: false,
  isLast: false,
};

const Tables = () => {
  return (
    <div className="p-4 grid grid-cols-2 gap-8 max-[1600px]:text-sm">
      <div className="bg-white p-4 rounded-lg shadow bg-slate-100">
        <div className="space-y-2">
          {firstTable.map((item, index) => (
            <TableRow
              key={index}
              label={item.label}
              value={item.value}
              isLink={item.isLink}
              isLast={index === firstTable.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow bg-slate-100">
        <div className="space-y-2">
          {secondTable.map((item, index) => (
            <TableRow
              key={index}
              label={item.label}
              value={item.value}
              isLast={index === secondTable.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
