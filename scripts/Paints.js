import { getPaints } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "paint") {
    let colorObj = paints.find(
      (paint) => paint.id === parseInt(event.target.value)
    );
    window.alert(`You chose ${colorObj.color}`);
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
