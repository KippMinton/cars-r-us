import { Paints } from "./Paint.js";

export const CarBuilder = () => {
  return `
      <h1>Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Sizes</h2>
            </section>
            <section class="choices__technologies options">
                <h2>Styles</h2>
            </section>
            <section class="choices__wheels options">
               <h2>Wheels</h2>
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
