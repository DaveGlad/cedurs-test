"use client";

const ActionPlan = () => {
  return (
    <div className="bg-white p-3 md:p-6 rounded-2xl border mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Plan d&rsquo;action</h3>
      </div>

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                    >
                      Investissement (Kel)
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                    >
                      Consommation (kWh/an)
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                    >
                      Émissions Carbone (iCO₂/an)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                  <tr>
                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Installation de panneaux solaires
                    </td>
                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      15,000
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      10,000
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      2,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Optimisation des systèmes de chauffage
                    </td>
                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      8,000
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      5,500
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      1,100
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Conversion des véhicules en électriques
                    </td>
                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                      25,000
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      20,000
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
