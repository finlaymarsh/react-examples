import { InvestmentInput } from "@/src/interfaces/InvestmentInput";
import { FormEvent, useState } from "react";
import classes from "./UserInput.module.css";

export const UserInput = (props: {
  calculateHandler: (userInput: InvestmentInput) => void;
}) => {
  const initialData: InvestmentInput = {
    "current-savings": 7000,
    "yearly-contribution": 1000,
    "expected-return": 10,
    duration: 7,
  };

  const [userInputData, setUserInputData] = useState(initialData);

  const onInputChange = (id: string, value: number) => {
    setUserInputData((previousInputData: InvestmentInput) => {
      return { ...previousInputData, [id]: value };
    });
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.calculateHandler(userInputData);
  };

  const onResetHandler = (event: FormEvent) => {
    setUserInputData((previousInputData: InvestmentInput) => {
      return initialData;
    });
  };

  return (
    <form className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInputData["current-savings"]}
            onChange={(event) =>
              onInputChange("current-savings", +event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInputData["yearly-contribution"]}
            onChange={(event) =>
              onInputChange("yearly-contribution", +event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInputData["expected-return"]}
            onChange={(event) =>
              onInputChange("expected-return", +event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInputData["duration"]}
            onChange={(event) => onInputChange("duration", +event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={(event) => onResetHandler(event)}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={(event) => onSubmitHandler(event)}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};
