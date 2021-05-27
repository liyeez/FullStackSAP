sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, ResourceModel, Fragment){
    return Controller.extend("odata.controller.HelloPanel",{
        onShowHello: function () {
            var oBundle = this.getView().getModel('i18n').getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog: function(){
            this.getOwnerComponent().openHelloDialog(); // accessing parent (Component.js) in order to open dialog instantiated there
        },
        
    });
});

// ID of HelloPanel view is used to prefix the IDs inside our fragment. 
// There, we have defined the ID helloDialog for the Dialog control, 
// and we can access the dialog via the view by calling oView.byId("helloDialog"). 
// This makes sure that even if you instantiate the same fragment in other views in the same way, 
// each dialog will have its unique ID that is concatenated from the view ID and the dialog ID.