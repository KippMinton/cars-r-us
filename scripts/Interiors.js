import { getInteriors } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "interior") {
    let interiorObj = interiors.find(
      (interior) => interior.id === parseInt(event.target.value)
    );
    window.alert(`You chose ${interiorObj.color}`);
  }
});

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
