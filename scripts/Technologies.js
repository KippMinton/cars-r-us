import { getTechnologies } from "./data.js";

document.addEventListener("click", (event) => {
  if (event.target.name === "tech") {
    let techObj = technologies.find(
      (tech) => tech.id === parseInt(event.target.value)
    );
    window.alert(`You chose the ${techObj.package}.`);
  }
});

const technologies = getTechnologies();

export const Technologies = () => {
  let html = "<ul>";

  for (const tech of technologies) {
    html += `<li>
      <input type="radio" name="tech" value="${tech.id}"/> ${tech.package}
      </li>`;
  }

  html += "</ul>";
  return html;
};
