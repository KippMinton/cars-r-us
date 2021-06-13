const database = {
  paints: [
    {
      id: 1,
      color: "silver",
      price: 700,
    },
    {
      id: 2,
      color: "midnight blue",
      price: 700
    },
    {
      id: 3,
      color: "firebrick red",
      price: 750
    },
    {
      id: 4,
      color: "spring green",
      price: 700
    },
  ],
  interiors: [
    {
      id: 1,
      color: "beige fabric",
      price: 1000
    },
    {
      id: 2,
      color: "charcoal fabric",
      price: 1000
    },
    {
      id: 3,
      color: "white leather",
      price: 4000
    },
    {
      id: 4,
      color: "black leather",
      price: 3750
    },
  ],
  technologies: [
    {
      id: 1,
      package: "base package",
      price: 100
    },
    {
      id: 2,
      package: "navigation package",
      price: 800
    },
    {
      id: 3,
      package: "visibility package",
      price: 1400
    },
    {
      id: 4,
      package: "ultra package",
      price: 2100
    }
  ],
  wheels: [
    {
      id: 1,
      type: '17" radial chrome',
      price: 850
    },
    {
      id: 2,
      type: '17"  radial black',
      price: 850
    },
    {
      id: 3,
      type: '18" spoke chrome',
      price: 1000
    },
    {
      id: 4,
      type: '18" spoke black',
      price: 1000
    },
  ],
  customOrders: [],
  orderBuilder : {}
};


export const getPaints = () => database.paints.map(paint => ({...paint}));
export const getInteriors = () => database.interiors.map(interior => ({...interior}))
export const getTechnologies = () => database.technologies.map(tech => ({...tech}))
export const getWheels = () => database.wheels.map(wheel => ({...wheel}));
export const getOrders = () => database.customOrders.map(order => ({...order}));

export const setPaint = (id) => database.orderBuilder.paintId = id;

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id;
}
export const setTechnology = (id) => {
  database.orderBuilder.techId = id;
}
export const setWheels = (id) => {
  database.orderBuilder.wheelId = id;
}

export const checkOrderState = () => {
  return (
    "paintId" in database.orderBuilder &&
    "interiorId" in database.orderBuilder &&
    "techId" in database.orderBuilder &&
    "wheelId" in database.orderBuilder
  )
}

export const addCustomOrder = () => {
  const newOrder = {...database.orderBuilder}

  const lastIndex = database.customOrders.length - 1
  
  newOrder.id = lastIndex >= 0 ? database.customOrders[lastIndex].id + 1 : 1

  newOrder.timestamp = Date.now()

  database.customOrders.push(newOrder)

  database.orderBuilder = {}

  document.dispatchEvent(new CustomEvent("stateChanged"))
}
