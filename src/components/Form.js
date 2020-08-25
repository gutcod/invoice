import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim(), date.trim())
        .then(() => {
          alert.show("Заметка была создана", "success");
        })
        .catch(() => {
          alert.show("Что-то пошло не так", "danger");
        });
      setValue("");
      setDate("");
    } else {
      alert.show("Введите название заметки");
    }
  };

  return (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Название Терминала"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Описание"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button
          onClick={submitHandler}
          type="button"
          className="btn btn-block btn-outline-success"
        >
          Добавить
        </button>
      </div>
    </form>
  );
};
