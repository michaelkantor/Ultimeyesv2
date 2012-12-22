dojo.declare("CustomersPage", wm.Page, {
	"preferredDevice": "desktop",
    bookmarkletList: [],
	start: function() {
		try {
			  //this.customerLiveForm1.liveSaving = false;
			this.customerLiveVariable1._includeListProps = true;
		} catch(e) {
			app.toastError(this.name + ".start() Failed: " + e.toString()); 
		}
	},
 
      
  physiciansGridSelect: function(inSender) {
      app.currentPhysicianVar.setData(inSender.selectedItem.getData());
    },
  customerLiveVariable1Success: function(inSender, inDeprecated) {
      inSender.addItem({firstName: "-- New Customer --", id: -1},0);
      if (this._reselectNew) {        
        var id = this._reselectNew.id;
        var count = inSender.getCount();
        for (var i = 0; i < count; i++) {
            if (inSender.getItem(i).getValue("id") == id) {
                    this.customerDojoGrid.select(i);
                break;
            }
        }
      }
      delete this._reselectNew;
    },
  customerDojoGridSelect: function(inSender) {
      /* If New Customer is selected... */
      if (inSender.selectedItem.getValue("id") == -1) {
        this.editCustomerPageContainer.page.setDataSet(null);
        this.editCustomerPageContainer.page.editNewObject();        
      } else {
          this.editCustomerPageContainer.page.setDataSet(inSender.selectedItem);
      }
  },
  editCustomerPageContainerCustomerDBFormSuccess: function(inSender /*,args*/) {
      this.customerLiveVariable1.update();
      if (this.editCustomerPageContainer.page.customerDBForm.operation == "insert") {
        this._reselectNew = this.editCustomerPageContainer.page.customerDBForm.dataSet.getData();  
      }
    },
 
  _end: 0
});
