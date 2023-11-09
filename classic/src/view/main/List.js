/**
 * This view is an example list of people.
 */
Ext.define("ipgQualificationTask.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",
  controller: "cell-editing",

  requires: ["ipgQualificationTask.store.Personnel"],

  title: "Grid",

  autoLoad: true,
  selModel: {
    type: "cellmodel",
  },

  // Объявляем кнопки-экшены
  allowDeselect: true,
  defaultActionType: "button",
  actions: {
    add: {
      text: "Добавить строку",
      disabled: false,
      handler: "handleAddAction",
    },
    delete: {
      text: "Удалить строку",
      disabled: true,
      handler: "handleDeleteAction",
    },
    clone: {
      iconCls: "array-grid-sell-col",
      text: "Клонировать строку",
      disabled: true,
      handler: "handleCloneAction",
    },
  },

  tbar: ["@add", "@delete", "@clone"],

  store: {
    type: "personnel",
  },

  plugins: {
    cellediting: {
      clicksToEdit: 2,
    },
  },

  columns: [
    {
      text: "Name",
      dataIndex: "name",
      editor: {
        xtype: "combobox",
        typeAhead: true,
        triggerAction: "all",
        selectOnFocus: false,
        store: [
          ["Alice", "Alice"],
          ["Alan", "Alan"],
          ["John", "John"],
          ["Tim", "Tim"],
          ["Berk", "Berk"],
          ["Mark", "Mark"],
        ],
      },
    },
    {
      text: "Date of Birth",

      xtype: "datecolumn",
      header: "Available",
      dataIndex: "dateOfBirth",

      width: 135,
      format: "M d, Y",
      editor: {
        xtype: "datefield",
        selectOnFocus: false,
        format: "m/d/y",
        allowBlank: false,
      },
    },
    {
      text: "Description",
      dataIndex: "description",
      editor: {
        allowBlank: false,
        selectOnFocus: false,
      },
    },
    {
      text: "Quantity",
      dataIndex: "quantity",
      width: 150,
      editor: {
        xtype: "numberfield",
        allowBlank: false,
        minValue: 1,
        maxValue: 150000,
      },
    },
  ],

  listeners: {
    // Слушатель на выделение ячейки
    selectionchange: "onSelectionChange",
    // Слушатель хранилище
    save: "saveToLocalStorage",
  },
});
