import { getWheels, setWheels } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "wheels") {
    setWheels(parseInt(event.target.value));
  }
});

const wheels = getWheels();

export const Wheels = () => {
  let html = "<ul>";

  for (const wheel of wheels) {
    html += `<li>
      <input type="radio" name="wheels" value="${wheel.id}"/> ${wheel.type} ${wheel.price.toLocaleString(
           "en-US", {
              style: "currency",
              currency: "USD"
   })}
      </li>`;
  }

  html += "</ul>";
  return html;
};
