import ValidationError from "@/src/interfaces/ValidationError";
import { Button } from "../Button/Button";
import { Card } from "../Card/card";
import classes from "./ErrorModal.module.css";

export const ErrorModal = (props: {
  error: ValidationError;
  errorAcknowledgedHandler: () => void;
}) => {
  return (
    <div>
      <div
        className={classes.backdrop}
        onClick={props.errorAcknowledgedHandler}
      />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.errorAcknowledgedHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
