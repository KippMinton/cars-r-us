import { getPaints, setPaint } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "paint") {
    setPaint(parseInt(event.target.value));
  }
});

const paints = getPaints();

export const Paints = () => {
  let html = "<ul>";

  for (const paint of paints) {
    html += `<li>
         <input type="radio" name="paint" value="${paint.id}"/> ${paint.color}
      </li>`;
  }

  html += "</ul>";
  return html;
};
