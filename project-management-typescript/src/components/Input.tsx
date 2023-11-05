import { forwardRef, HTMLAttributes, Ref } from "react";

const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

interface Props extends HTMLAttributes<HTMLElement> {
  label: string;
  type?: string;
  istextarea?: string;
}

const Input = forwardRef((props: Props, ref: Ref<HTMLElement>) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {props.label}
      </label>
      {props.istextarea ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
