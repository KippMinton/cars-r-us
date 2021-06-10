import { getWheels } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "wheels") {
    let wheelObj = wheels.find(
      (wheel) => wheel.id === parseInt(event.target.value)
    );
    window.alert(`You chose ${wheelObj.type}.`);
  }
});

const wheels = getWheels();

export const Wheels = () => {
  let html = "<ul>";

  for (const wheel of wheels) {
    html += `<li>
      <input type="radio" name="wheels" value="${wheel.id}"/> ${wheel.type}
      </li>`;
  }

  html += "</ul>";
  return html;
};
