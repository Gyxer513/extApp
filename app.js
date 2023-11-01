/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ipgQualificationTask.Application',

    name: 'ipgQualificationTask',

    requires: [
        // This will automatically load all classes in the ipgQualificationTask namespace
        // so that application classes do not need to require each other.
        'ipgQualificationTask.*'
    ],

    // The name of the initial view to create.
    mainView: 'ipgQualificationTask.view.main.Main'
});
