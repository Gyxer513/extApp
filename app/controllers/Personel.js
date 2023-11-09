Ext.define("ipgQualificationTask.view.grid.PersonnelController", {
  extend: "Ext.app.ViewController",
  alias: "controller.cell-editing",

  //Сохранение в local storage
  saveToLocalStorage: function () {
    const view = this.getView(),
      record = this.getView().getSelectionModel().getSelection()[0];
    const { name, dateOfBirth, description, quantity } = record.data;
    rec = new ipgQualificationTask.model.Personnel({
      name: name,
      dateOfBirth: dateOfBirth,
      description: description,
      quantity: quantity,
    });
    localStorage.setItem("rec", JSON.stringify(rec));
    const savedRec = JSON.parse(localStorage.getItem("rec"));
    console.log(savedRec);
  },

  // Переключатель активности кнопок, кнопки активны тлько при выделении ячейки
  onSelectionChange: function (sm, selections) {
    const cloneAction = this.view.getAction("clone"),
      deleteAction = this.view.getAction("delete");
    if (selections.length) {
      cloneAction.enable();
      deleteAction.enable();
    } else {
      cloneAction.disable();
      deleteAction.disable();
    }
    
  },

  //Функция добавления строки
  handleAddAction: function (widget, event) {
    const view = this.getView(),
      rec = new ipgQualificationTask.model.Personnel({
        name: "",
        dateOfBirth: "1990-01-15",
        description: "text description",
        quantity: 100,
      });

    view.store.add(rec);
  },

  //Функция удаления строки
  handleDeleteAction: function (widget, event) {
    const rec = this.getView().getSelectionModel().getSelection()[0];
    rec.drop();
  },

  //Функция клонирования строки
  handleCloneAction: function (widget, event) {
    const view = this.getView(),
      record = this.getView().getSelectionModel().getSelection()[0];
    const { name, dateOfBirth, description, quantity } = record.data;
    rec = new ipgQualificationTask.model.Personnel({
      name: name,
      dateOfBirth: dateOfBirth,
      description: description,
      quantity: quantity,
    });
    view.store.add(rec);
  },
});
