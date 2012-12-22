dojo.declare("ItemViewerPage", wm.Page, {
	"preferredDevice": "desktop",
    dataSet: null,
    typeDef: null,
    start: function() {
            
    },
    setDataSet: function(inDataSet) {
        this.dataSet = inDataSet;
        var data = [];
        var type = inDataSet.type;
        var typeDef = wm.typeManager.getType(type);
        this.typeDef = typeDef;
        if (typeDef && typeDef.fields) {
            wm.forEachProperty(typeDef.fields, function(fieldDef, fieldName) {
                var value;
                var typeName = fieldDef.type.replace(/^.*\./,"");
                if (fieldDef.isList) {
                    value = "<span class='linkedItem'>Select row to view " + typeName + " List</span>";
                } else if ( wm.typeManager.isStructuredType(fieldDef.type)) {
                    value = "<span class='linkedItem'>Select row to view " + typeName + " Object</span>";
                } else {
                    value = inDataSet.getValue(fieldName);
                }
                data.push({ name: fieldName, 
                            dataValue: value,
                            type: fieldDef.isList ? "[" + typeName + "]" : typeName});
            });                
        }
        this.variable.setData(data);
    },
    listSelect: function(inSender, inItem) {
        var fieldName = inSender.selectedItem.getValue("name");
 
        var fieldDef = this.typeDef.fields[fieldName];
        if (fieldDef && fieldDef.isList) {
            var lvar = new wm.LiveVariable({
                owner: this,
                type: this.dataSet.type,
                maxResults: 500,
		        ignoreCase: true,
                _includeListProps: true,
                autoUpdate: false,
                startUpdate: false
            });
            lvar.liveView.related.push(fieldName);
            var primaryKeyField = wm.typeManager.getPrimaryKey(this.typeDef);
            var filter = {}
            filter[primaryKeyField] = this.dataSet.getValue(primaryKeyField);
            lvar.filter.setData(filter);
            lvar.autoUpdate = true;
            lvar.update();
            this.owner.owner.displayData(lvar, fieldName);
        } else {
            var dataValue = this.dataSet.getValue(fieldName);
            if (dataValue instanceof wm.Component) {
                this.owner.owner.displayData(dataValue, fieldName);
            }
        }
    },
  _end: 0
});