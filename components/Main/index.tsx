import ActionPlan from "./ActionPlan";
import BudgetBreakdown from "./BudgetBreakdown";
import Compliance from "./Compliance";
import DecarbonationTrajectory from "./DecarbonationTrajectory";
import ExpensesBreakdown from "./ExpensesBreakdown";
import StrategyResults from "./StrategyResults";

function Main() {
  return (
    <main className="w-full max-w-7xl mx-auto flex-1 px-2 lg:px-8 py-2">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
            <p className="text-gray-500 text-sm">
              An easy way to manage sales with care and precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-8">
            <StrategyResults />
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-4">
            <Compliance />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 mt-6">
          <div className="col-span-1 md:col-span-8">
            <ExpensesBreakdown />
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-4">
            <BudgetBreakdown />
          </div>
        </div>

        <DecarbonationTrajectory />
        <ActionPlan />
      </div>
    </main>
  );
}

export default Main;
