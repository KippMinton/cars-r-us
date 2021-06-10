import { getPaints } from "./data.js";

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
