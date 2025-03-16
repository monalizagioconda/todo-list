import { FormEventHandler, useRef, useState } from "react";
import Button from "./Button";

type AddItemFormProps = {
  onAddItem: (itemText: string) => void;
};

export default function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current?.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={e => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
