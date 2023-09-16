import { InvestmentInput } from "@/src/interfaces/InvestmentInput";
import { useState } from "react";
import { NumberInput } from "./NumberInput/NumberInput";
import classes from "./UserInput.module.css";

export const UserInput = (props: {
  calculateHandler: (userInput: InvestmentInput) => void;
}) => {
  const initialInput: InvestmentInput = {
    "expected-return": 0,
    "yearly-contribution": 0,
    "current-savings": 0,
    duration: 0,
  };

  const [userInput, setUserInput] = useState(initialInput);

  return (
    <form className={classes.form}>
      <div className={classes["input-group"]}>
        <NumberInput
          id="current-savings"
          label="Current Savings ($)"
          value={userInput["current-savings"]}
          onChange={setUserInput}
        />
        <NumberInput
          id="yearly-contribution"
          label="Yearly Savings ($)"
          value={userInput["yearly-contribution"]}
          onChange={setUserInput}
        />
      </div>
      <div className={classes["input-group"]}>
        <NumberInput
          id="expected-return"
          label="Expected Interest (%, per year)"
          value={userInput["expected-return"]}
          onChange={setUserInput}
        />
        <NumberInput
          id="duration"
          label="Investment Duration (years)"
          value={userInput["duration"]}
          onChange={setUserInput}
        />
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={() => setUserInput(initialInput)}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={(event) => {
            event.preventDefault();
            props.calculateHandler(userInput);
          }}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};
