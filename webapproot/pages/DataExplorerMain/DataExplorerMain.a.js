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

DataExplorerMain.widgets = {
typeListVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
layers: ["wm.TabLayers", {"headerHeight":"28px"}, {}, {
layer1: ["wm.Layer", {"border":"2","caption":"Choose Data","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
list: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[{"show":true,"field":"dataValue","title":"Choose Table","width":"100%","expression":"${dataValue}.replace(/^.*\\./,\"\")","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":true}],"height":"100%","minDesktopHeight":60}, {"onSelect":"listSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"typeListVar","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

DataExplorerMain.prototype._cssText = '';
DataExplorerMain.prototype._htmlText = '';