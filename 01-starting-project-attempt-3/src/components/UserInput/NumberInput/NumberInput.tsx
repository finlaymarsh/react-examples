import { InvestmentInput } from "@/src/interfaces/InvestmentInput";
import { Dispatch, SetStateAction } from "react";

export const NumberInput = (props: {
  id: string;
  label: string;
  value: number;
  onChange: Dispatch<SetStateAction<InvestmentInput>>;
}) => {
  const onInputChange = (fieldValue: number) => {
    props.onChange((initialInputs: InvestmentInput) => {
      return { ...initialInputs, [props.id]: fieldValue };
    });
  };

  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="number"
        id={props.id}
        value={props.value}
        onChange={(event) => onInputChange(+event.target.value)}
      />
    </p>
  );
};
