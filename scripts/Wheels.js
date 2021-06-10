import { getWheels } from "./data.js";

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
