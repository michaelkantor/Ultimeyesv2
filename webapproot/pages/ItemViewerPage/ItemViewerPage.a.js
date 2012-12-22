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

ItemViewerPage.widgets = {
variable: ["wm.Variable", {"isList":true,"type":"ItemViewerType"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
list: ["wm.List", {"_classes":{"domNode":["list","GridListStyle"]},"columns":[{"show":true,"field":"name","title":"Name","width":"200px","mobileColumn":false},{"show":true,"field":"type","title":"Type","width":"100px","align":"left","expression":"String(${type}).replace(/.*\\./,\"\")","mobileColumn":false},{"show":true,"field":"dataValue","title":"DataValue","width":"100%","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>DataValue: \" + ${dataValue} + \"</div>\"\n","mobileColumn":true}],"height":"100%","minDesktopHeight":60}, {"onSelect":"listSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"variable","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

ItemViewerPage.prototype._cssText = 'html.WMApp body .list .linkedItem {\
text-decoration: underline;\
font-style: italic;\
}\
';
ItemViewerPage.prototype._htmlText = '';