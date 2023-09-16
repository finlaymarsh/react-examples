import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ResultsTable } from "./components/ResultsTable/ResultsTable";
import { UserInput } from "./components/UserInput/UserInput";
import { AnnualReport } from "./interfaces/AnnualReport";
import { InvestmentInput } from "./interfaces/InvestmentInput";
import { InvestmentReport } from "./interfaces/InvestmentReport";

function App() {
  const initialReport: InvestmentReport = {
    data: [],
    initialInvestment: 0,
  };

  const [report, setReport] = useState(initialReport);

  const calculateHandler = (userInput: InvestmentInput) => {
    const yearlyData: AnnualReport[] = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setReport({
      data: yearlyData,
      initialInvestment: +userInput["current-savings"],
    });
  };

  return (
    <div>
      <Header />

      <UserInput calculateHandler={calculateHandler} />

      {report.data.length === 0 && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {report.data.length > 0 && <ResultsTable report={report} />}
    </div>
  );
}

export default App;
