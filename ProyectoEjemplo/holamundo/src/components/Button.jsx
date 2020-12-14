import React from "react";

//Componente stateless

//En este punto, el elemento hará render del texto que venga como property
const Button = (props) => {
  const { text } = props; //De esta forma podemos extraer los keys de todas las properties
  return (
    <div>
      <button type="button">{props.text}</button>
      <button type="button">{text}</button>
    </div>
  );
};
export default Button;
