import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Insertar"
      />
    </form>
  );
};

