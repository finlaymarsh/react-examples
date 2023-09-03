import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ResultsTable } from "./components/ResultsTable/ResultsTable";
import { UserInput } from "./components/UserInput/UserInput";
import { InvestmentData } from "./models/InvestmentData";
import { InvestmentInputData } from "./models/InvestmentInputData";
import { InvestmentReport } from "./models/InvestmentReport";

export const App = () => {
  const initialReport: InvestmentReport = {
    data: [],
    initialInvestment: 0,
  };
  const [yearlyData, setYearlyData] = useState(initialReport);

  const calculateHandler = (userInput: InvestmentInputData) => {
    const newYearlyData: InvestmentData[] = [];
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData({
      data: newYearlyData,
      initialInvestment: +userInput["current-savings"],
    });
  };

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {yearlyData.data.length === 0 && (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
      {yearlyData.data.length > 0 && <ResultsTable report={yearlyData} />}
    </div>
  );
};
