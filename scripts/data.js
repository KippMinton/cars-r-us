const database = {
  paint: [
    {
      id: 1,
      color: "silver",
      price: 700,
    },
    {
      id: 2,
      color: "midnight blue",
      price: 700,
    },
    {
      id: 3,
      color: "firebrick red",
      price: 750,
    },
    {
      id: 4,
      color: "spring green",
      price: 700,
    },
  ],
  interior: [
    {
      id: 1,
      color: "beige fabric",
      price: 1000,
    },
    {
      id: 2,
      color: "charcoal fabric",
      price: 1000,
    },
    {
      id: 3,
      color: "white leather",
      price: 4000,
    },
    {
      id: 4,
      color: "black leather",
      price: 3750,
    },
  ],
  technology: [
    {
      id: 1,
      package: "base package",
      price: 0,
    },
    {
      id: 2,
      package: "navigation package",
      price: 800,
    },
    {
      id: 3,
      package: "visibility package",
      price: 1400,
    },
    {
      id: 4,
      package: "ultra package",
      price: 2100,
    },
  ],
  wheels: [
    {
      id: 1,
      type: '17" radial chrome',
      price: 850,
    },
    {
      id: 2,
      type: '17"  radial black',
      price: 850,
    },
    {
      id: 1,
      type: '18" spoke chrome',
      price: 1000,
    },
    {
      id: 1,
      type: '18" spoke black',
      price: 1000,
    },
  ],
};

const orderState = {};

export const getPaints = () => [...database.paint];
export const getInteriors = () => [...database.interior];
export const getTechnologies = () => [...database.technology];
export const getWheels = () => [...database.wheels];
