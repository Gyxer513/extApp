Ext.define("ipgQualificationTask.view.grid.PersonnelController", {
  extend: "Ext.app.ViewController",
  alias: "controller.cell-editing",


  onSelectionChange: function(view, recIndex, cellIndex, item, e, record) {
    console.log(record);
  },

  hendler: function() {
      var selection = ipgQualificationTask.view.main.List.getView().getSelectionModel().getSelection()[0];

      if (selection) {
          store.remove(selection);
  }
  },
  onAddClick: function () {
    var view = this.getView(),
      rec = new ipgQualificationTask.model.Personnel({
        name: '',
        dateOfBirth: "1990-01-15",
        description: "text description",
        quantity: 100,
      });
      
    view.store.add(rec);
  },

  onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
    console.log(record);
    record.drop();
  },
  onCloneClick: function (view, recIndex, cellIndex, item, e, record) {
    const {name, dateOfBirth, description, quantity} = record.data
    rec = new ipgQualificationTask.model.Personnel({
      name: name,
      dateOfBirth: dateOfBirth,
      description: description,
      quantity: quantity,
    });

  view.store.add(rec);
  }
});
