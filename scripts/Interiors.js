import { getInteriors, setInterior } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "interior") {
    setInterior(parseInt(event.target.value));
  }
});

const interiors = getInteriors();

export const Interiors = () => {
  let html = "<ul>";

  for (const interior of interiors) {
    html += `<li>
         <input type="radio" name="interior" value="${interior.id}" /> ${interior.color} ${interior.price.toLocaleString(
           "en-US", {
              style: "currency",
              currency: "USD"
   })}
      </li>`;
  }
  html += "</ul>";
  return html;
};
