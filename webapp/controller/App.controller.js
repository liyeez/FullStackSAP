sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("odatatute.controller.App", {
			onInit: function () {
                var oJSONData = {
                    busy: false
                };

            },
            
            onOpenDialog : function () {
                this.getOwnerComponent().openHelloDialog();
            }
		});
	});
