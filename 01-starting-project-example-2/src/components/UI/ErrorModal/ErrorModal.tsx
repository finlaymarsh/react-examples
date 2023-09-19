import ValidationError from "@/src/interfaces/ValidationError";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { Card } from "../Card/card";
import classes from "./ErrorModal.module.css";

interface ModalProps {
  error: ValidationError;
  errorAcknowledgedHandler: () => void;
}

const Backdrop = (props: { errorAcknowledgedHandler: () => void }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.errorAcknowledgedHandler}
    />
  );
};

const ModalOverlay = (props: ModalProps) => {
  return (
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
  );
};

export const ErrorModal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorAcknowledgedHandler={props.errorAcknowledgedHandler} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorAcknowledgedHandler={props.errorAcknowledgedHandler}
          error={props.error}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};
