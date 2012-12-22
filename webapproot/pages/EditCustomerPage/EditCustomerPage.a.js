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
this.customerDBForm.deleteData();
}
},
_end: 0
});

EditCustomerPage.widgets = {
onDeleteCustomerSVarSuccess: ["wm.Property", {"isEvent":true,"property":"deleteCustomerSVar.onSuccess","type":"string"}, {}],
onCustomerDBFormSuccess: ["wm.Property", {"isEvent":true,"property":"customerDBForm.onSuccess","type":"string"}, {}],
customerProductAssociateLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate"}, {"onSuccess":"customerProductAssociateLVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"idEditor2.dataValue","targetProperty":"filter.customer.id"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate","related":["customer","license","product"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"SwregXml","sortable":true,"dataIndex":"swregXml","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"Disabled","sortable":true,"dataIndex":"disabled","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"Id","sortable":true,"dataIndex":"license.id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2000},{"caption":"Key","sortable":true,"dataIndex":"license.key","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001},{"caption":"SeatsAllocated","sortable":true,"dataIndex":"license.seatsAllocated","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2002},{"caption":"MacMax","sortable":true,"dataIndex":"license.macMax","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2003},{"caption":"LeasePeriod","sortable":true,"dataIndex":"license.leasePeriod","type":"java.lang.Short","displayType":"Number","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2004},{"caption":"CreatedAt","sortable":true,"dataIndex":"license.createdAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2005},{"caption":"UpdatedAt","sortable":true,"dataIndex":"license.updatedAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2006},{"caption":"Id","sortable":true,"dataIndex":"customer.id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3000},{"caption":"FirstName","sortable":true,"dataIndex":"customer.firstName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3001},{"caption":"LastName","sortable":true,"dataIndex":"customer.lastName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3002},{"caption":"MiddleInitial","sortable":true,"dataIndex":"customer.middleInitial","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3003},{"caption":"Ssn","sortable":true,"dataIndex":"customer.ssn","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3004},{"caption":"Tin","sortable":true,"dataIndex":"customer.tin","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3005},{"caption":"Dob","sortable":true,"dataIndex":"customer.dob","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3006},{"caption":"Address","sortable":true,"dataIndex":"customer.address","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3007},{"caption":"Phone","sortable":true,"dataIndex":"customer.phone","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3008},{"caption":"Email","sortable":true,"dataIndex":"customer.email","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3009},{"caption":"CreatedAt","sortable":true,"dataIndex":"customer.createdAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3010},{"caption":"UpdatedAt","sortable":true,"dataIndex":"customer.updatedAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3011},{"caption":"Notes","sortable":true,"dataIndex":"customer.notes","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3012},{"caption":"Address2","sortable":true,"dataIndex":"customer.address2","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3013},{"caption":"CompanyName","sortable":true,"dataIndex":"customer.companyName","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3014},{"caption":"City","sortable":true,"dataIndex":"customer.city","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3015},{"caption":"Region","sortable":true,"dataIndex":"customer.region","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3016},{"caption":"Country","sortable":true,"dataIndex":"customer.country","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3017},{"caption":"PostalCode","sortable":true,"dataIndex":"customer.postalCode","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3018},{"caption":"Telephone","sortable":true,"dataIndex":"customer.telephone","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3019},{"caption":"Login","sortable":true,"dataIndex":"customer.login","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3020},{"caption":"Password","sortable":true,"dataIndex":"customer.password","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3021},{"caption":"Id","sortable":true,"dataIndex":"product.id","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},{"caption":"Name","sortable":true,"dataIndex":"product.name","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001},{"caption":"Version","sortable":true,"dataIndex":"product.version","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4002},{"caption":"CreatedAt","sortable":true,"dataIndex":"product.createdAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"product.updatedAt","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4004},{"caption":"SwregProductCode","sortable":true,"dataIndex":"product.swregProductCode","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4005}]}, {}]
}],
customerDataSet: ["wm.Variable", {"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[customersPage].customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}]
}],
deleteAssociateLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"delete","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate"}, {"onSuccess":"deleteAssociateLVarSuccess","onSuccess1":"customerDBForm.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerProductAssociateDBForm.dataOutput.id","targetProperty":"sourceData.id"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"SwregXml","sortable":true,"dataIndex":"swregXml","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Disabled","sortable":true,"dataIndex":"disabled","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
confirmDelete: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"confirmDeleteOk"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to delete this customer?  The customer might not like it you know.\"","targetProperty":"text"}, {}]
}]
}]
}],
linkLogsDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","corner":"tr","desktopHeight":"150px","height":"150px","modal":false,"noMaxify":true,"noMinify":true,"positionNear":"tabLayers4","title":"Linking...","width":"300px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
matchingLogsPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"Boolean(window[\"studio\"]) || ${getUnclaimedLogs.count}","targetProperty":"showing"}, {}]
}],
label1: ["wm.Label", {"height":"77px","padding":"4","singleLine":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Found \" + ${getUnclaimedLogs.count} + \" matching logs.  Link these to this account?\"","targetProperty":"caption"}, {}]
}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
linkLogsToCustomerButton: ["wm.Button", {"caption":"Link Logs","desktopHeight":"40px","height":"40px","margin":"4","width":"100px"}, {"onclick":"linkLogsToCustomerButtonClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
customerProductAssociateDBForm: ["wm.DBForm", {"desktopHeight":"58px","fitToContentHeight":true,"height":"58px","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate"}, {"onBeforeInsertCall":"customerProductAssociateDBFormBeforeInsertCall","onBeforeUpdateCall":"customerProductAssociateDBFormBeforeUpdateCall","onEnterKeyPress":"customerProductAssociateDBFormEnterKeyPress","onError":"customerProductAssociateDBFormError"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerProductAssociateDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"customerProductAssociateDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"customerProductAssociateDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"customerProductAssociateDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"customerProductAssociateDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"customerProductAssociateDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
customerProductAssociateIDEditor: ["wm.Number", {"caption":"Id","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"dataValue"}, {}]
}]
}],
createdAtEditor1: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"createdAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
updatedAtEditor1: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"updatedAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"username","height":"26px","readonly":true,"width":"100%"}, {}],
licenseLookup1: ["wm.Lookup", {"allowNone":true,"caption":"License","captionSize":"120px","dataType":"com.logs_ultimeyesvision_com_devdb.data.License","desktopHeight":"26px","displayField":"key","formField":"license","height":"26px","readonly":true,"width":"100%"}, {}]
}],
customerDBForm: ["wm.DBForm", {"deleteConfirmation":undefined,"height":"100%","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.logs_ultimeyesvision_com_devdb.data.Customer"}, {"onCancelEdit":"customerProductAssociateDBForm.cancelEdit","onDataSetChanged":"customerDBFormDataSetChanged","onEditNewObject":"licenseFormPanel.show","onEnterKeyPress":"customerDBForm.saveData","onInsertSuccess":"customerDBFormInsertSuccess","onUpdateSuccess":"customerDBFormUpdateSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"customerDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"customerDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"customerDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"customerDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"customerDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"customerDataSet","targetProperty":"dataSet"}, {}]
}],
panel3: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
idEditor2: ["wm.Number", {"caption":"Id","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
physicianLookup2: ["wm.Lookup", {"caption":"Physician","captionSize":"120px","dataType":"com.logs_ultimeyesvision_com_devdb.data.Physician","desktopHeight":"26px","displayExpression":"${firstName} + \" \" + ${lastName}","displayField":"firstName","formField":"physician","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"physicianLookup2.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"[customersPage].physiciansGrid.selectedItem","targetProperty":"dataValue"}, {}]
}]
}],
firstNameEditor2: ["wm.Text", {"caption":"FirstName","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"firstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
lastNameEditor2: ["wm.Text", {"caption":"LastName","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"lastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
middleInitialEditor2: ["wm.Text", {"caption":"MiddleInitial","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"middleInitial","height":"26px","readonly":true,"width":"100%"}, {}],
ssnEditor2: ["wm.Text", {"caption":"Ssn","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ssn","height":"26px","readonly":true,"width":"100%"}, {}],
tinEditor2: ["wm.Text", {"caption":"Tin","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"tin","height":"26px","readonly":true,"width":"100%"}, {}],
dobEditor: ["wm.Date", {"caption":"Dob","captionSize":"120px","desktopHeight":"26px","emptyValue":"emptyString","formField":"dob","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
addressEditor2: ["wm.Text", {"caption":"Address","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
phoneEditor2: ["wm.Text", {"caption":"Phone","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"phone","height":"26px","readonly":true,"width":"100%"}, {}],
emailEditor2: ["wm.Text", {"caption":"Email","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"100%"}, {}],
createdAtEditor2: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"createdAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
updatedAtEditor2: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"updatedAt","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
notesEditor1: ["wm.LargeTextArea", {"caption":"Notes","captionAlign":"right","captionPosition":"left","captionSize":"120px","changeOnKey":true,"emptyValue":"emptyString","formField":"notes","height":"100%","maxHeight":150,"readonly":true,"width":"100%"}, {}]
}],
customerDBFormButtonPanel: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"desktopHeight":"40px","enableTouchHeight":true,"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerDBFormEditButton: ["wm.Button", {"caption":"Edit","desktopHeight":"40px","height":"40px","margin":"4"}, {"onclick":"customerDBForm.editCurrentObject","onclick1":"customerProductAssociateDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.dataSet.isEmpty}","targetProperty":"disabled"}, {}]
}]
}],
customerDBFormDeleteButton: ["wm.Button", {"caption":"Delete","desktopHeight":"40px","height":"40px","margin":"4"}, {"onclick":"confirmDelete"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.dataSet.isEmpty}","targetProperty":"disabled"}, {}]
}]
}],
customerDBFormCancelButton: ["wm.Button", {"caption":"Cancel","desktopHeight":"40px","height":"40px","margin":"4","showing":false}, {"onclick":"customerDBForm.cancelEdit","onclick1":"customerProductAssociateDBForm1.cancelEdit"}],
customerDBFormSaveButton: ["wm.Button", {"caption":"Save","desktopHeight":"40px","height":"40px","margin":"4","showing":false}, {"onclick":"customerDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerDBForm.invalid} || !${layoutBox1.isDirty}","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

EditCustomerPage.prototype._cssText = '';
EditCustomerPage.prototype._htmlText = '';