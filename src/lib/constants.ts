export const initialGroups = [
  {
    id: 1,
    name: "Grocery",
    items: [
      {
        id: 1,
        name: "milk",
        packed: false,
      },
      {
        id: 2,
        name: "apples",
        packed: false,
      },
      {
        id: 3,
        name: "tomatoes",
        packed: false,
      },
      {
        id: 4,
        name: "fish",
        packed: false,
      },
      {
        id: 5,
        name: "soap",
        packed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Travel",
    items: [
      {
        id: 1,
        name: "passport",
        packed: false,
      },
      {
        id: 2,
        name: "shoes",
        packed: false,
      },
      {
        id: 3,
        name: "jacket",
        packed: false,
      },
      {
        id: 4,
        name: "toothbrush",
        packed: false,
      },
      {
        id: 5,
        name: "towel",
        packed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Good habits",
    items: [
      {
        id: 1,
        name: "hydration",
        packed: false,
      },
      {
        id: 2,
        name: "exercise",
        packed: false,
      },
      {
        id: 3,
        name: "learn something new",
        packed: false,
      },
      {
        id: 4,
        name: "eating fresh",
        packed: false,
      },
      {
        id: 5,
        name: "meditate",
        packed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Household chores",
    items: [
      {
        id: 1,
        name: "to do the landry",
        packed: false,
      },
      {
        id: 2,
        name: "vacuuming",
        packed: false,
      },
      {
        id: 3,
        name: "booking an appointment",
        packed: false,
      },
      {
        id: 4,
        name: "fixing the chair",
        packed: false,
      },
      {
        id: 5,
        name: "clean the ventilation",
        packed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Job tasks",
    items: [
      {
        id: 1,
        name: "use Zustand",
        packed: false,
      },
      {
        id: 2,
        name: "check sidebar component",
        packed: false,
      },
      {
        id: 3,
        name: "look for library",
        packed: false,
      },
      {
        id: 4,
        name: "header",
        packed: false,
      },
      {
        id: 5,
        name: "commit",
        packed: false,
      },
    ],
  },
];

// export const GROUP_NAMES = ["Grocery", "Travel", "Good habits"];
export const GROUP_NAMES = initialGroups.map(obj => obj.name);

// group = { id: 2, name: 'Travel', items: [{}, {}]}
