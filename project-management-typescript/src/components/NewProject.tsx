import Input from "./Input";
import { useContext, useRef } from "react";
import { ProjectContext } from "../store/ProjectContext";
import { createProjectFrom } from "../interfaces/Project";
import Modal, { ModalRef } from "./Modal";

export default function NewProject() {
  const projectContext = useContext(ProjectContext);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);
  const modal = useRef<ModalRef>(null);

  function handleSave() {
    const enteredTitle = title.current!.value;
    const enteredDescription = description.current!.value;
    const enteredDueDate = dueDate.current!.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current?.open();
    } else {
      projectContext.saveProject(
        createProjectFrom(enteredTitle, enteredDescription, enteredDueDate)
      );
    }
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={projectContext.handleCancelAddingProject}
              className="text-stone-800 hover:text-stone-950 px-6 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} />
          <Input label="Description" ref={description} isTextArea={true} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
