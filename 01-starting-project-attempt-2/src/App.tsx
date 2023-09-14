import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ResultsTable } from "./components/ResultsTable/ResultsTable";
import { UserInput } from "./components/UserInput/UserInput";
import { AnnualInvestment } from "./interfaces/AnnualInvestment";
import { InvestmentInput } from "./interfaces/InvestmentInput";
import { InvestmentReport } from "./interfaces/InvestmentReport";

function App() {
  const initialReport: InvestmentReport = {
    data: [],
    initialInvestment: 0,
  };

  const [investmentReport, setInvestmentReport] = useState(initialReport);

  const calculateHandler = (userInput: InvestmentInput) => {
    const yearlyData: AnnualInvestment[] = [];

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

    setInvestmentReport({
      data: yearlyData,
      initialInvestment: +userInput["current-savings"],
    });
  };

  return (
    <div>
      <Header />
      <UserInput calculateHandler={calculateHandler} />
      {investmentReport.data.length === 0 && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {investmentReport.data.length > 0 && (
        <ResultsTable report={investmentReport} />
      )}
    </div>
  );
}

export default App;
