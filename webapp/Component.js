sap.ui.define([
    "sap/ui/core/UIComponent",
	"sap/ui/Device",
    "odatatute/model/models",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
], function (UIComponent, Device, models, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("odatatute.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
            // essentially declaring it globally available for all views
            
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

//want to connect the reuse dialog to the lifecycle of the root view of the app, 
// so we pass an instance of the root view on to the constructor. 
// It can be retrieved by calling the getRootControl method of the component.

            this._helloDialog = new HelloDialog(this.getRootControl()); 
            // constructor defined in HelloDialog.js by passing in "view" instance just like "addDependent()"
            
            var oData = {
                recipient : {
                    name: "World"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
        },
        
        // added the new property _helloDialog to the component and assigned an instance of the HelloDialog object to it.

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        
        },

        //  The SAPUI5 framework calls the function assigned to exit when destroying the component. 
        // We call the destroy function of HelloDialog to clean up the helper class and end its lifecycle. 
        // Nevertheless, the instance itself would still exist in the browser memory. 
        // Therefore we delete our reference to the HelloDialog instance by calling delete this._helloDialog 
        // and the garbage collection of the browser can clean up its memory.

        openHelloDialog: function(){
            this._helloDialog.open();
        }
	});
});
