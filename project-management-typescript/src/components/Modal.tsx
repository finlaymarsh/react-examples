import {
  forwardRef,
  HTMLAttributes,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export interface ModalRef {
  open: () => void;
}

export interface Props extends HTMLAttributes<HTMLElement> {
  buttonCaption: string;
}

const Modal = forwardRef((props: Props, ref: Ref<ModalRef>) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {props.children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{props.buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
