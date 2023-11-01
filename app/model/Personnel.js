Ext.define("ipgQualificationTask.model.Personnel", {
  extend: "ipgQualificationTask.model.Base",

  fields: [
    { name: "name", type: 'string'},
    { name: "dateOfBirth", type: 'string' },
    { name: "description", type: 'string' },
    { name: "quantity", type: 'number'},
  ]
});
