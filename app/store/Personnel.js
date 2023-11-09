Ext.define("ipgQualificationTask.store.Personnel", {
  extend: "Ext.data.Store",

  alias: "store.personnel",

  model: "ipgQualificationTask.model.Personnel",

  data: {
    items: [
      {
        name: "John",
        dateOfBirth: "1990-01-15",
        description: "text description",
        quantity: 100,
      },
      {
        name: "Alice",
        dateOfBirth: "1985-05-20",
        description: "text description",
        quantity: 100,
      },
      {
        name: "Tim",
        dateOfBirth: "1985-05-21",
        description: "text description",
        quantity: 100,
      },
      {
        name: "Berk",
        dateOfBirth: "1985-05-22",
        description: "text description",
        quantity: 100,
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
