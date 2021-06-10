import { getInteriors } from "./data.js";

const interiors = getInteriors();

export const Interiors = () => {
  let html = "<ul>";

  for (const interior of interiors) {
    html += `<li>
         <input type="radio" name="interior" value="${interior.id}" /> ${interior.color}
      </li>`;
  }
  html += "</ul>";
  return html;
};
