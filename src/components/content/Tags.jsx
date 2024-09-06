const Tags = () => {
  return (
    <div className="border-b border-gray-300 flex space-x-4 px-3 py-4">
      <button className="text-green-500 border-b border-green-500 px-1">
        Identité
      </button>
      <button>Adresses</button>
      <button>Comptes Bancaires</button>
      <button>Contact</button>
      <button>Rôles</button>
      <button>Contrats(2)</button>
      <div className="relative inline-flex items-center">
        <button>Activity log</button>
        <div className="absolute top-0 -right-3.5 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-white text-xs font-bold justify-center items-center">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tags;
