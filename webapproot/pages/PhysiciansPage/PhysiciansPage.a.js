dojo.declare("PhysiciansPage", wm.Page, {
"preferredDevice": "desktop",
start: function() {
try {
this.connect(this.physicianproductassociateLiveForm1, "_setReadonly", this.idRelatedEditor1, "_setReadonly");
//this.physicianLiveForm1.liveSaving = false;
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
/*
physicianLiveForm1InsertData: function(inSender) {
try {
this.physicianFormLVar.setOperation("insert");
this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);
this.physicianFormLVar.sourceData.setValue("createdAt", new Date().getTime());
this.physicianFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
this.physicianFormLVar.update();
} catch(e) {
console.error('ERROR IN physicianLiveForm1InsertData: ' + e);
}
},
physicianLiveForm1DeleteData: function(inSender) {
try {
this.physicianFormLVar.setOperation("delete");
this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);
this.physicianFormLVar.update();
} catch(e) {
console.error('ERROR IN physicianLiveForm1DeleteData: ' + e);
}
},
physicianLiveForm1UpdateData: function(inSender) {
try {
this.physicianFormLVar.setOperation("update");
this.physicianFormLVar.sourceData.setData(this.physicianLiveForm1.dataOutput);
this.physicianFormLVar.sourceData.setValue("updatedAt", new Date().getTime());
this.physicianFormLVar.update();
} catch(e) {
console.error('ERROR IN physicianLiveForm1UpdateData: ' + e);
}
},
physicianFormLVarSuccess1: function(inSender, inDeprecated) {
try {
this.physicianLiveForm1.dataSet.setDataSet(inSender);
} catch(e) {
console.error('ERROR IN physicianFormLVarSuccess1: ' + e);
}
},
*/
physicianLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
try {
inData.updatedAt = new Date().getTime();
if (inOperation == "insert") {
inData.createdAt = new Date().getTime();
}
} catch(e) {
console.error('ERROR IN physicianLiveForm1BeforeServiceCall: ' + e);
}
},
_end: 0
});

PhysiciansPage.widgets = {
physicianproductassociateLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.physicianproductassociateLiveView1","type":"com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
physicianLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
physicianDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0,1,1,1","columns":[{"show":false,"title":"Id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"id"},{"show":true,"title":"FirstName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"firstName"},{"show":true,"title":"LastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"lastName"},{"show":false,"title":"MiddleInitial","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"middleInitial"},{"show":false,"title":"MedicalLicenseNumber","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"medicalLicenseNumber"},{"show":false,"title":"Ssn","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"ssn"},{"show":false,"title":"Tin","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"tin"},{"show":false,"title":"Dob","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"dob"},{"show":false,"title":"Address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"address"},{"show":false,"title":"Phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"phone"},{"show":false,"title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"email"},{"show":false,"title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"password"},{"show":false,"title":"CreatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"createdAt"},{"show":false,"title":"UpdatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"updatedAt"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>FirstName: \" + ${firstName} + \"</div>\"\n+ \"<div class='MobileRow'>LastName: \" + ${lastName} + \"</div>\"\n"}],"height":"100%","localizationStructure":{},"margin":"4","width":"228px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.physiciansLVar","targetProperty":"dataSet"}, {}]
}]
}],
tabLayers3: ["wm.TabLayers", {}, {}, {
layer3: ["wm.Layer", {"border":"2","caption":"Edit Physician","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
physicianLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"160px","height":"100%","horizontalAlign":"left","margin":"","readonly":true,"verticalAlign":"top"}, {"onBeforeServiceCall":"physicianLiveForm1BeforeServiceCall","onSuccess":"app.physiciansLVar"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"dataOutput.updatedAt"}, {}]
}],
idEditor5: ["wm.Number", {"caption":"Id","captionSize":"160px","dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
firstNameEditor2: ["wm.Text", {"caption":"FirstName","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"firstName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
lastNameEditor2: ["wm.Text", {"caption":"LastName","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"lastName","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
middleInitialEditor2: ["wm.Text", {"caption":"MiddleInitial","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"middleInitial","height":"26px","readonly":true,"width":"100%"}, {}],
medicalLicenseNumberEditor1: ["wm.Text", {"caption":"MedicalLicenseNumber","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"medicalLicenseNumber","height":"26px","readonly":true,"width":"100%"}, {}],
ssnEditor2: ["wm.Text", {"caption":"Ssn","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"ssn","height":"26px","readonly":true,"width":"100%"}, {}],
tinEditor2: ["wm.Text", {"caption":"Tin","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"tin","height":"26px","readonly":true,"width":"100%"}, {}],
dobEditor2: ["wm.DateTime", {"caption":"Dob","captionSize":"160px","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"dob","height":"26px","readonly":true,"width":"100%"}, {}],
addressEditor2: ["wm.Text", {"caption":"Address","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
phoneEditor2: ["wm.Text", {"caption":"Phone","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"phone","height":"26px","readonly":true,"width":"100%"}, {}],
emailEditor2: ["wm.Text", {"caption":"Email","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"email","height":"26px","readonly":true,"width":"100%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"160px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","readonly":true,"width":"100%"}, {}],
createdAtEditor5: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"160px","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"createdAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
}]
}],
updatedAtEditor5: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"160px","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"updatedAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
}]
}]
}],
physicianLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"physicianLiveForm1","lock":false,"operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton5: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton5: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton5: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.beginDataInsert"}],
updateButton5: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.beginDataUpdate"}],
deleteButton5: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"physicianLiveForm1EditPanel.deleteData"}]
}]
}]
}],
layer5: ["wm.Layer", {"border":"2","caption":"Products For Physician","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
physicianproductassociateLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
physicianproductassociateGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Physicianproductassociate"}, {}, {
physicianproductassociateDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"columns":[{"show":false,"title":"Product.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"product.id"},{"show":true,"title":"Product","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"product.name"},{"show":true,"title":"Version","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"product.version"},{"show":false,"title":"Product.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"product.createdAt"},{"show":false,"title":"Product.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"product.updatedAt"},{"show":false,"title":"Id.physicianId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"id.physicianId"},{"show":false,"title":"Id.productId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"id.productId"},{"show":false,"title":"Id.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"id.createdAt"},{"show":false,"title":"Id.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"id.updatedAt"},{"show":false,"title":"Physician.id","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"","field":"physician.id"},{"show":true,"title":"Physician","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"${physician.lastName} + \", \" + {physician.firstName}","field":"physician.firstName"},{"show":false,"title":"Physician.lastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.lastName"},{"show":false,"title":"Physician.middleInitial","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.middleInitial"},{"show":false,"title":"Physician.medicalLicenseNumber","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.medicalLicenseNumber"},{"show":false,"title":"Physician.ssn","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.ssn"},{"show":false,"title":"Physician.tin","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.tin"},{"show":false,"title":"Physician.dob","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"physician.dob"},{"show":false,"title":"Physician.address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.address"},{"show":false,"title":"Physician.phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.phone"},{"show":false,"title":"Physician.email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.email"},{"show":false,"title":"Physician.password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":"","field":"physician.password"},{"show":false,"title":"Physician.createdAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"physician.createdAt"},{"show":false,"title":"Physician.updatedAt","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter","field":"physician.updatedAt"},{"mobileColumn":true,"align":"left","field":"PHONE COLUMN","show":false,"title":"-","width":"100%","expression":"\"<div class='MobileRowTitle'>Product: \" + ${product.name} + \"</div>\"\n+ \"<div class='MobileRow'>Version: \" + ${product.version} + \"</div>\"\n+ \"<div class='MobileRow'>Physician: \" + ${physician.firstName} + \"</div>\"\n"}],"height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
physicianproductassociateDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"176px","title":"Details"}, {}, {
physicianproductassociateLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"140px","horizontalAlign":"left","margin":"","readonly":true,"verticalAlign":"top"}, {"onSuccess":"physicianproductassociateLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"idRelatedEditor1.dataOutput","targetProperty":"dataOutput.id"}, {}]
}],
idRelatedEditor1: ["wm.RelatedEditor", {"editingMode":"editable subform","fitToContentHeight":true,"formField":"id","height":"106px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateDojoGrid.selectedItem.id","targetProperty":"dataSet"}, {}]
}],
physicianEditor: ["wm.SelectMenu", {"caption":"PhysicianId","captionSize":"200px","dataField":"id","dataType":"com.logs_ultimeyesvision_com_devdb.data.Physician","dataValue":undefined,"desktopHeight":"26px","displayExpression":"${lastName} + \", \" + ${firstName}","displayField":"firstName","formField":"physicianId","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.physiciansLVar","targetProperty":"dataSet"}, {}]
}]
}],
productEditor: ["wm.SelectMenu", {"caption":"ProductId","captionSize":"200px","dataField":"id","dataType":"com.logs_ultimeyesvision_com_devdb.data.Product","dataValue":undefined,"desktopHeight":"26px","displayExpression":"${name} + \" \" + ${version}","displayField":"version","formField":"productId","height":"26px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.productsLVar","targetProperty":"dataSet"}, {}]
}]
}],
createdAtEditor6: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"200px","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"createdAt","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
}]
}],
updatedAtEditor6: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"200px","dateMode":"Date","desktopHeight":"26px","emptyValue":"emptyString","formField":"updatedAt","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","source":false,"targetProperty":"defaultInsert"}, {}]
}]
}]
}],
physicianproductassociateLiveForm1EditPanel: ["wm.EditPanel", {"_classes":{"domNode":["dialogfooter"]},"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"physicianproductassociateLiveForm1","operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton6: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton6: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton6: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.beginDataInsert"}],
deleteButton6: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"physicianproductassociateLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicianproductassociateLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

PhysiciansPage.prototype._cssText = '';
PhysiciansPage.prototype._htmlText = '';