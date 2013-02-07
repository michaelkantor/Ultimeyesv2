dojo.declare("EditCustomerPage", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
            
    },

  customerDBFormInsertSuccess: function(inSender, inResult) {
        // delay so that bindings have time to update customer id
        wm.onidle(this, function() {
            this.customerProductAssociateDBForm.operation = "insert";
            this.customerProductAssociateDBForm.saveData();
        });
    },
    customerDBFormUpdateSuccess: function(inSender, inResult) {
        if (this.customerProductAssociateIDEditor.getDataValue()) {
            this.customerProductAssociateDBForm.operation = "update";
        } else {
            this.customerProductAssociateDBForm.operation = "insert";
        }
        this.customerProductAssociateDBForm.saveData();		
	},    
    linkLogsToCustomerButtonClick: function(inSender) {
      var idList = [];
      var data = this.getUnclaimedLogs.getData();
      dojo.forEach(data, function(item) {idList.push(item.logId);});
      this.updateCustomerIdInLogsSVar.input.setValue("idList", idList);
      this.updateCalibrationLogs.input.setValue("idList", idList);
      this.updateStaticLogs.input.setValue("idList", idList);
      this.updateSummaryLogs.input.setValue("idList", idList);
      this.updateDynamicLogs.input.setValue("idList", idList);
      
      var customerId = this.idEditor2.getDataValue();
      this.updateCalibrationLogs.input.setValue("customerId", customerId);
      this.updateStaticLogs.input.setValue("customerId", customerId);
      this.updateSummaryLogs.input.setValue("customerId", customerId);
      this.updateDynamicLogs.input.setValue("customerId", customerId);
      
      
      this.updateCustomerIdInLogsSVar.update();      
      this.updateCalibrationLogs.update();      
      this.updateStaticLogs.update();      
      this.updateSummaryLogs.update();      
      this.updateDynamicLogs.update();        
    
    },
        
  usernameEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
      if (inDisplayValue.match(/[A-Z]/)) {
          this.usernameEditor1.setDataValue(inDisplayValue.toLowerCase());
      }
    },
  getUnclaimedLogsSuccess: function(inSender, inDeprecated) {
      this.linkLogsDialog.setShowing(inSender.getCount());
    },
    

 
 
    editNewObject: function() {
      this.customerDBForm.editNewObject();
      this.customerProductAssociateDBForm.editNewObject();
    },
    setDataSet: function(inVar) {
        this.customerDBForm.setDataSet(inVar);
        if (inVar) {
            this.customerProductAssociateLVar.filter.setValue("customer", inVar);
            this.customerProductAssociateLVar.update();
        }
    },
	customerProductAssociateLVarSuccess: function(inSender, inDeprecated) {
		this.customerProductAssociateDBForm.setDataSet(inSender);
	},
	customerProductAssociateDBFormEnterKeyPress: function(inSender, inEvent) {
		if (!this.layoutBox1.getInvalid()) {
            this.customerDBForm.saveData();
		}
	},
	customerProductAssociateDBFormBeforeUpdateCall: function(inSender, inUpdateData) {
		inUpdateData.customer = this.customerDBForm.dataSet.getData();
        inUpdateData.product = app.productsLVar.getItem(0).getData();
        inUpdateData.updatedAt = new Date().getTime();
        if (!inUpdateData.createdAt) inUpdateData.createdAt = new Date().getTime();
	},
    customerProductAssociateDBFormBeforeInsertCall: function(inSender, inInsertData) {
    	inInsertData.customer = this.customerDBForm.dataSet.getData();
        inInsertData.product = app.productsLVar.getItem(0).getData();
        inInsertData.createdAt = inInsertData.updatedAt = new Date().getTime();    	
	},
	customerProductAssociateDBFormError: function(inSender, inError) {
        debugger;
        app.alert("Failed to save customerProductAssociate: " + inError.toString());        		
	},
      

	deleteAssociateLVarSuccess: function(inSender, inDeprecated) {
        this.customerProductAssociateDBForm.setDataSet(null);
	},
	confirmDeleteOk: function(inSender, inResult) {
		if (this.customerProductAssociateIDEditor.getDataValue()) {
            this.deleteAssociateLVar.update();
            
		} else {
            this.deleteCalibSVar.update();            
		}
	},
	_end: 0
});
