import React from "react";
import { useState } from "react";
import schema from "./Schema";
import axios from "axios";
import * as yup from "yup";
export default function Form() {
  const [pizzas, setPizzas] = useState([]);
  const [errors, setErros] = useState({
    name: "",
    toppings: "",
  });

  const schema = yup.object().shape({
    name: yup.string().min(2, "Name must be 2 characters long"),
    size: yup.string(),

    special: yup.string(),

    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
  });

  const validate = (evt) => {
    yup
      .reach(schema, evt.target.name)
      .validate(evt.target.value)
      .then(() => {
        setErros({
          ...errors,
          [evt.target.name]: "",
        });
      })
      .catch((err) => {
        setErros({
          ...errors,
          [evt.target.name]: err.errors[0],
        });
      });
  };

  const [formValues, setFormValues] = useState({
    name: "",
    size: "small",
    toppings: "",
    special: "",
  });

  const inputChange = (evt) => {
    evt.persist();
    validate(evt);
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("form submitted");
    axios.post("https://reqres.in/api/users", formValues).then((res) => {
      console.log(formValues, "values");
      console.log(res, "testOne");
      setPizzas([
        ...pizzas,
        <div>
          <h2>{res.data.name}</h2>
          <h3>Size: {res.data.size}</h3>
          <h4>Toppings: </h4>
          <h2>
            {res.data.topping1},{res.data.topping2},{res.data.topping3},
            {res.data.topping4}
          </h2>
          <h4>Special Directions</h4>
          <p>{res.data.special}</p>
        </div>,
      ]);
    });
  };

  return (
    <div name="parent">
      {pizzas.map((item) => (
        <div>{item}</div>
      ))}
      <form onSubmit={onSubmit}>
        <div>
          <h1>Build Your Own Pizza</h1>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <input name="name" value={formValues.name} onChange={inputChange} />
            {errors.name ? <p>{errors.name}</p> : null}
            <select name="size" value={formValues.size} onChange={inputChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <label>
              Pepperoni
              <input
                type="checkbox"
                name="topping1"
                value="pepperoni"
                onChange={inputChange}
              />
            </label>
            <label>
              Bacon
              <input
                type="checkbox"
                name="topping2"
                value="bacon"
                onChange={inputChange}
              />
            </label>
            <label>
              Pineapple
              <input
                type="checkbox"
                name="topping3"
                value="pineapple"
                onChange={inputChange}
              />
            </label>
            <label>
              Peppers
              <input
                type="checkbox"
                name="topping4"
                value="peppers"
                onChange={inputChange}
              />
            </label>
            <label>
              Special Directions
              <input
                type="text"
                name="special"
                value={formValues.special}
                onChange={inputChange}
              />
            </label>
          </form>
          <button onSubmit={onSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
