dojo.declare("DataExplorerMain", wm.Page, {
	"preferredDevice": "desktop",
    //dataSet: null,
    start: function() {
        var types = wm.typeManager.getLiveServiceTypes();
        var data = [];
        wm.forEachProperty(types, function(typeDef, typeName) {
            data.push({dataValue: typeName});
        });
        this.typeListVar.setData(data);
    },
    
    /* Set the parent data structure for the entire viewer */
    setDataSet: function(inDataSet) {
        //this.dataSet = inDataSet;
        this.displayData(inDataSet, "", inDataSet.type.replace(/.*\./, ""));
    },
    
    /* Set the item of data to add to the layers */
    displayData: function(inDataSet, inFieldName, inCaption) {
        var l;
        if (inDataSet.isList) {
            l = this.layers.addPageContainerLayer("ListViewerPage", inCaption || inFieldName, true);            
        } else {
            l = this.layers.addPageContainerLayer("ItemViewerPage", inCaption || inFieldName, true);
        }
        l.c$[0].page.setDataSet(inDataSet, inFieldName);
        l.setDestroyable(true);
    },
  listSelect: function(inSender, inItem) {
      var type = inSender.selectedItem.getValue("dataValue");
      var lvar = new wm.LiveVariable({
                owner: this,
                type: type,
                maxResults: 500,
                ignoreCase: true,
                autoUpdate: true,
                startUpdate: false
            });            
          this.setDataSet(lvar);
      
	},
 
  _end: 0
});