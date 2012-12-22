/* TODO: Generate editors for searching the dataset */

dojo.declare("ListViewerPage", wm.Page, {
	"preferredDevice": "desktop",
    dataSet: false,
    start: function() {

    },
    setDataSet: function(inDataSet, inFieldName) {
        this.dataSet = inDataSet;
        this.fieldName = inFieldName;

        /* LiveVariable might still be firing, and will be updated/filtered on user search */
        this.connect(this.dataSet, "onSuccess", this, function() {
            this.list.setDataSet(this.fieldName ? this.dataSet.getValue(this.fieldName) : this.dataSet);
        });
                
        if (inFieldName) inDataSet = inDataSet.getValue(inFieldName);
        
        this.list.setDataSet(inDataSet);
        this.list.convertToColumns();
        if (!this.list.columns) { /* only fields are structured and so not turned into columns */
	       this.list.columns = [];
	    }
        var type = inDataSet.type;
        var typeDef = wm.typeManager.getType(type);
        if (typeDef && typeDef.fields) {
            var count = 0;
            wm.forEachProperty(typeDef.fields, function() {
                count++;
            });
            var minWidth = count * 100;
            if (this.root.bounds.w < minWidth) {
                this.list.setWidth(minWidth + "px");
            }

                    /* Generate the search form */
            wm.forEachProperty(typeDef.fields, dojo.hitch(this, function(fieldDef, fieldName) {
                if (!fieldDef.isList && !wm.typeManager.isStructuredType(fieldDef.type)) {    
                    var props = {owner: this,
                                 parent: this.form,
                                 caption: fieldName,
                                 captionPosition: "top",
                                 captionSize: "20px",
                                 captionAlign: "left",
                                 changeOnKey: true,
                                 height: "50px",
                                 width: "100%",
                                 onchange: dojo.hitch(this, function(inDisplayValue, inDataValue, inSetByCode) {
                                    if (!inSetByCode) {               
                                        this.dataSet.filter.setValue((this.fieldName ? this.fieldName + "." : "") + fieldName, inDataValue);
                                    }
                                 })
                    };
                    switch(fieldDef.type.toLowerCase()) {
                        case "date":
                        case "time":
                        case "java.util.date":
                            //new wm.DateTime(props); TODO: Proper search by date
                            this.list._columnsHash[fieldName].formatFunc = "wm_date_formatter";
                            break;
                        default:
                            new wm.Text(props);
                            break;
                    }
                } else {
    	    var fieldType = wm.typeManager.getType(fieldDef.type);
		    if (!fieldType.liveService) {
			wm.forEachProperty(fieldType.fields, dojo.hitch(this, function(innerFieldDef, innerFieldName) {
			    if (!innerFieldDef.isList && !wm.typeManager.isStructuredType(innerFieldDef.type)) {
                    var col = {show: true, title: wm.capitalize(innerFieldName), field: fieldName + "." + innerFieldName};
                    if (innerFieldDef.type == "java.util.Date") {
                        col.formatFunc = "wm_date_formatter";
                    }
				this.list.columns.push(col);
			    }
			}));
		    }
		}
            }));
            this.form.reflow();
	    this.list.setColumns(this.list.columns);
        }

    },
    listSelect: function(inSender, inItem) {
        this.owner.owner.displayData(inSender.selectedItem, this.owner.parent.caption + " Item");
    },
    _end: 0
});