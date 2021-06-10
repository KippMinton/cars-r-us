import { CarBuilder } from "./CarBuilder.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = CarBuilder();
};

renderAllHTML();
