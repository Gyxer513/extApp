Ext.define("ipgQualificationTask.view.grid.PersonnelController", {
  extend: "Ext.app.ViewController",
  alias: "controller.cell-editing",

  onAddClick: function () {
    var view = this.getView(),
      rec = new ipgQualificationTask.model.Personnel({
        name: '',
        dateOfBirth: "1990-01-15",
        description: "text description",
        quantity: 100,
      });

    view.store.insert(0, rec);
  },

  onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
    record.drop();
  },
  onCloneClick: function (view, recIndex, cellIndex, item, e, record) {
    var {name, dateOfBirth, description, quantity} = record.data
    rec = new ipgQualificationTask.model.Personnel({
      name: name,
      dateOfBirth: dateOfBirth,
      description: description,
      quantity: quantity,
    });

  view.store.insert(0, rec);
  }
});
