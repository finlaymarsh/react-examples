import { InvestmentInputData } from "@/src/models/InvestmentInputData";
import { FormEvent, MouseEvent, useState } from "react";
import { NumberInput } from "./NumberInput/NumberInput";
import classes from "./UserInput.module.css";

export const UserInput = (props: {
  onCalculate: (userInput: InvestmentInputData) => void;
}) => {
  const initialUserInput: InvestmentInputData = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setUserInput(initialUserInput);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <NumberInput
          name="current-savings"
          text="Current Savings (£)"
          setUserInput={setUserInput}
          value={userInput["current-savings"]}
        />
        <NumberInput
          name="yearly-contribution"
          text="Yearly Savings (£)"
          setUserInput={setUserInput}
          value={userInput["yearly-contribution"]}
        />
      </div>
      <div className={classes["input-group"]}>
        <NumberInput
          name="expected-return"
          text="Expected Interest (%, per year)"
          setUserInput={setUserInput}
          value={userInput["expected-return"]}
        />
        <NumberInput
          name="duration"
          text="Investment Duration (years)"
          setUserInput={setUserInput}
          value={userInput["duration"]}
        />
      </div>
      <p className="actions">
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
