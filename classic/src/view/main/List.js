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

  tbar: [
    {
      text: "Добавить строку",
      handler: "onAddClick",
    },
    {
      text: "Удалить строку",
      handler: "onRemoveClick",
      reference: 'removeEmployee',
      handler: '',
      disabled: true
    },
    {
      text: "Клонировать строку",
      handler: "onCloneClick",
      reference: 'removeEmployee',
      handler: 'onRemoveClick',
      disabled: true
    },
  ],

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
    click: "onSelectionChange",

  },



});
