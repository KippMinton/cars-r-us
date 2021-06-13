import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./data.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
   const foundPaint = paints.find(paint => paint.id === order.paintId)
   const foundInterior = interiors.find(interior => interior.id === order.interiorId)
   const foundTech = technologies.find(tech => tech.id === order.techId)
   const foundWheel = wheels.find(wheel => wheel.id === order.wheelId)

   const totalCost = foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price;

   const costString = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
   })

   return `<li>
      Order #${order.id} was placed on ${new Date(order.timestamp).toLocaleDateString()} for a total cost of ${costString}.
   </li>`
}

export const Orders = () => {
   const orders = getOrders()

   let html = "<ul>"

   const listItems = orders.map(buildOrderListItem)

   html += listItems.join("")
   html += "</ul>"

   return html
}