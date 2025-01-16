const StrategyResults = () => {
  const data = [
    {
      label: "Période de la stratégie",
      value: (
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
          <span className="w-2 h-2 rounded-full bg-green-light"></span>
          <span className="font-medium">2025 - 2050</span>
          <span className="text-sm">années</span>
        </div>
      ),
    },
    {
      label: "Listes des contraintes sélectionnées",
      value: (
        <span className="font-medium px-3 py-1 bg-gray-100 rounded-lg">
          DPE, CREEM
        </span>
      ),
    },
    {
      label: "Budget total alloué",
      value: (
        <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
          <span className="font-medium">22.96</span>
          <span className="text-green text-sm">M€</span>
        </div>
      ),
    },
    {
      label: "Budget par m²",
      value: (
        <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
          <span className="font-medium">35.89</span>
          <span className="text-green text-sm">€/m²</span>
        </div>
      ),
    },
    {
      label: "Réduction des coûts d’exploitation",
      value: (
        <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
          <span className="font-medium">1.36</span>
          <span className="text-green text-sm">M€/an</span>
        </div>
      ),
    },
    {
      label: "Emissions totales de CO₂ évitées",
      value: (
        <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
          <span className="font-medium">738.4</span>
          <span className="text-green text-sm">tCO₂e/an</span>
        </div>
      ),
    },
    {
      label: "Coût marginal d’abattement",
      value: (
        <div className="flex items-baseline gap-1 px-3 py-1 bg-gray-100 rounded-lg">
          <span className="font-medium">-1841</span>
          <span className="text-green text-sm">€/tCO₂e</span>
        </div>
      ),
    },
  ];

  return (
    <div className="col-span-8 bg-white p-3 md:p-6 rounded-2xl border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">
          Résultats de la stratégie : DPE B + CRREM 2045
        </h3>
      </div>

      <div className="pb-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-1">
            <span className="text-gray-800">{item.label}</span>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyResults;
