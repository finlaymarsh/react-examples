import { AnnualInvestment } from "./AnnualInvestment";

export interface InvestmentReport {
  data: AnnualInvestment[];
  initialInvestment: number;
}
