import { InvestmentInputData } from "@/src/models/InvestmentInputData";
import { Dispatch, SetStateAction } from "react";

export const NumberInput = (props: {
  name: string;
  text: string;
  value: number;
  setUserInput: Dispatch<SetStateAction<InvestmentInputData>>;
}) => {
  const changeHandler = (id: string, value: number) => {
    props.setUserInput((prevInput) => {
      return {
        ...prevInput,
        [id]: value,
      };
    });
  };

  return (
    <p>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        type="number"
        id={props.name}
        onChange={(event) => changeHandler(props.name, +event.target.value)}
        value={props.value}
      />
    </p>
  );
};
