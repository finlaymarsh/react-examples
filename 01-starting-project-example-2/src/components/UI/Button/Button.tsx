import classes from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: Props) => {
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
