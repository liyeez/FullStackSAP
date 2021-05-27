sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(ManagedObject, Fragment){
    "use strict";

    return ManagedObject.extend("odatatute.controller.HelloDialog", {
        constructor: function (oView){
            this._oView = oView;
        },

        exit: function() {
            delete this._oView;
        },

        open : function () {
            var oView = this._oView;
            if(!this.pDialog) {
                var oFragmentController = {
                    onCloseDialog: function (){
                        oView.byId("helloDialog").close()
                    }
                }
                
                // the fragment is instantiated by calling the Fragment.load API
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "odatatute.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            // when dependent has been added, open the dialog
            this.pDialog.then(function (oDialog){
                oDialog.open();
            });
        },

        
    });
});