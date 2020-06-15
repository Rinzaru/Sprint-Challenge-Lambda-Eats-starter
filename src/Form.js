import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
const Card = styled.div`
  margin-left: 25%;
  .name {
    margin-left: 28%;
    display: flex;
    flex-direction: column;
    width: 15%;
  }
  .size {
    margin-left: 28%;
    display: flex;
    flex-direction: column;
    width: 15%;
    background-color: grey;
  }
  .sauce {
    margin-left: 28%;
    display: flex;
    flex-direction: column;
    width: 15%;
  }
  .sauceType {
    margin-top: 5px;
  }
  .topping {
    margin-left: 28%;
    width: 15%;
    display: flex;
    flex-direction: column;
    background-color: grey;
  }
  .spacing {
    margin-top: 5px;
  }
  .special {
    margin-top: 5px;
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    width: 20%;
  }
  button {
    margin-top: 10px;
    margin-left: 30%;
  }
`;

function Form(props) {
  const [currentData, setCurrentData] = useState({
    name: "",
    sauce: "",
    size: "",
    pepperoni: false,
    blackOlives: false,
    roastedGarlic: false,
    sausage: false,
    canadianBacon: false,
    grilledChicker: false,
    onions: false,
    greenPepper: false,
    dicedTomatos: false,
    artichoke: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    special: "",
  });

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required, Must be at least 2 Characters")
      .min(2),
    sauce: yup.string().required(),
    pepperoni: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    grilledChicker: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    artichoke: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
  });
  const submitForm = () => {
    formSchema.validate(currentData).then(() => {
      axios
        .post("https://reqres.in/api/users", currentData)
        .then((resp) => {
          console.log("Data", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleChange = (e) => {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });
  };

  const handleToppings = (e) => {
    setCurrentData({ ...currentData, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <Card>
        <form
          data-cy="submit"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
            //   console.log(currentData);
          }}
        >
          <label className="name">
            Name
            <input
              name="name"
              data-cy="name"
              value={currentData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="size">
            Size
            <select
              name="size"
              value={currentData.size}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </label>
          <br />
          <label className="sauce">
            Choice of Sauce:
            <br />
            <label className="sauceType">
              Original Red
              <input
                type="radio"
                name="sauce"
                value="Original Red"
                onChange={handleChange}
              />
            </label>
            <label className="sauceType">
              Garlic Ranch
              <input
                type="radio"
                name="sauce"
                value="Garlic Ranch"
                onChange={handleChange}
              />
            </label>
            <label className="sauceType">
              BBQ Sauce
              <input
                type="radio"
                name="sauce"
                value="BBQ Sauce"
                onChange={handleChange}
              />
            </label>
            <label className="sauceType">
              Spinach Alfredo
              <input
                type="radio"
                name="sauce"
                value="Spinach Alfredo"
                onChange={handleChange}
              />
            </label>
          </label>
          <br />
          <label className="topping">
            Add Toppings
            <br />
            <label className="spacing">
              Pepperoni
              <input
                type="checkbox"
                name="pepperoni"
                checked={currentData.pepperoni}
                data-cy="checkbox1"
                onChange={handleToppings}
              />
              <br />
            </label>
            <label className="spacing">
              Black Olives
              <input
                type="checkbox"
                name="blackOlives"
                data-cy="checkbox2"
                checked={currentData.blackOlives}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Roasted Garlic
              <input
                type="checkbox"
                name="roastedGarlic"
                data-cy="checkbox3"
                checked={currentData.roastedGarlic}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Sausage
              <input
                type="checkbox"
                name="sausage"
                data-cy="checkbox4"
                checked={currentData.sausage}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Canadian Bacon
              <input
                type="checkbox"
                name="canadianBacon"
                checked={currentData.canadianBacon}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Grilled Chicker
              <input
                type="checkbox"
                name="grilledChicker"
                checked={currentData.grilledChicker}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Onions
              <input
                type="checkbox"
                name="onions"
                checked={currentData.onions}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Green Pepper
              <input
                type="checkbox"
                name="greenPepper"
                checked={currentData.greenPepper}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Diced Tomatos
              <input
                type="checkbox"
                name="dicedTomatos"
                checked={currentData.dicedTomatos}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Artichoke Hearts
              <input
                type="checkbox"
                name="artichoke"
                checked={currentData.artichoke}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Three Cheese
              <input
                type="checkbox"
                name="threeCheese"
                checked={currentData.threeCheese}
                onChange={handleToppings}
              />
            </label>
            <label className="spacing">
              Pineapple
              <input
                type="checkbox"
                name="pineapple"
                checked={currentData.pineapple}
                onChange={handleToppings}
              />
              <br />
            </label>
            <label className="spacing">
              Extra Cheese
              <input
                type="checkbox"
                name="extraCheese"
                checked={currentData.extraCheese}
                onChange={handleToppings}
              />
            </label>
          </label>
          <label className="special">
            Special Instructions
            <textarea
              name="special"
              value={currentData.special}
              onChange={handleChange}
            />
          </label>
          <button>Purchase Order</button>
        </form>
      </Card>
    </div>
  );
}

export default Form;

//Cypress 1:05:05
