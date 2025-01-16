const StrategyResults = () => {
  return (
    <div className="col-span-8 bg-white p-3 md:p-6 rounded-2xl border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">
          Résultats de la stratégie : DPE B + CRREM 2045
        </h3>
      </div>

      <div className="pb-6 space-y-3">
        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">Période de la stratégie</span>
          <div className="flex items-baseline gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
              <span className="w-2 h-2 rounded-full bg-[#4ade80]"></span>
              <span className="font-medium">2025 - 2050</span>
              <span className="text-sm">années</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">
            Listes des contraintes sélectionnées
          </span>
          <span className="font-medium px-3 py-1 bg-gray-100 rounded-lg">
            DPE, CREEM
          </span>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">Budget total alloué</span>
          <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg ">
            <span className="font-medium">22.96</span>
            <span className="text-[#1a8240] text-sm">M€</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">Budget par m²</span>
          <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
            <span className="font-medium">35.89</span>
            <span className="text-[#1a8240] text-sm">€/m²</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">
            Réduction des coûts d&rsquo;exploitation
          </span>
          <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
            <span className="font-medium">1.36</span>
            <span className="text-[#1a8240] text-sm">M€/an</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">
            Emissions totales de CO₂ évitées
          </span>
          <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
            <span className="font-medium">738.4</span>
            <span className="text-[#1a8240] text-sm">tCO₂e/an</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-800">
            Coût marginal d&rsquo;abattement
          </span>
          <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
            <span className="font-medium">-1841</span>
            <span className="text-[#1a8240] text-sm">€/tCO₂e</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyResults;
