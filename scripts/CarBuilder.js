import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

export const CarBuilder = () => {
  return `
      <h1>Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
               <h2>Paints</h2>
               ${Paints()}
            </section>
            <section class="choices__interiors options">
               <h2>Interiors</h2>
               ${Interiors()}
            </section>
            <section class="choices__technologies options">
               <h2>Technologies</h2>
               ${Technologies()}
            </section>
            <section class="choices__wheels options">
               <h2>Wheels</h2>
               ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        </article>
    `;
};
