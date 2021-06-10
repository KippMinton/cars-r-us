import { getTechnologies } from "./data.js";

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
