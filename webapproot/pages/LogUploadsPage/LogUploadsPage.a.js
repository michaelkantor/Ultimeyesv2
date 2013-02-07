dojo.declare("LogUploadsPage", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
_end: 0
});

LogUploadsPage.widgets = {
internaluploadsessionfileLiveVariable1: ["wm.LiveVariable", {"matchMode":"exact","maxResults":20,"orderBy":"desc: createdAt","type":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile"}, {"onSuccess":"internaluploadsessionfileLiveVariable1Success"}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"usernameFilter.dataValue","targetProperty":"filter.username"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"licenseFilter.dataValue","targetProperty":"filter.internalUploadSession.license"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"logIdFilter.dataValue","targetProperty":"filter.id"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileDojoGrid","targetProperty":"loadingDialog"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile","related":["customer","internalUploadSession"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Filename","sortable":true,"dataIndex":"filename","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"IterationNumber","sortable":true,"dataIndex":"iterationNumber","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"FirstName","sortable":true,"dataIndex":"customer.firstName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001},{"caption":"LastName","sortable":true,"dataIndex":"customer.lastName","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2002},{"caption":"Login","sortable":true,"dataIndex":"customer.login","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2020},{"caption":"License","sortable":true,"dataIndex":"internalUploadSession.license","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3002}]}, {}]
}],
getLicensesSVar: ["wm.ServiceVariable", {"operation":"getLicensesFromLogs","service":"logs_ultimeyesvision_com_devDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getLicensesFromLogsInputs"}, {}]
}],
getUsernamesSVar: ["wm.ServiceVariable", {"operation":"getUsernamesFromLogs","service":"logs_ultimeyesvision_com_devDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUsernamesFromLogsInputs"}, {}]
}],
unlinkFile: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.logs_ultimeyesvision_com_devdb.data.Physician","operation":"update","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.Physician"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileDojoGrid.selectedItem","targetProperty":"sourceData"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
breadcrumbLayers1: ["wm.BreadcrumbLayers", {}, {}, {
listLayer: ["wm.Layer", {"borderColor":"","caption":"List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
internaluploadsessionfileLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
usernameFilterPanel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
usernameFilter: ["wm.SelectMenu", {"allowNone":true,"caption":"Usernames","dataField":"username","dataType":"com.logs_ultimeyesvision_com_devdb.data.output.GetUsernamesFromLogsRtnType","dataValue":undefined,"displayField":"username","displayValue":"","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getUsernamesSVar","targetProperty":"dataSet"}, {}]
}]
}],
licenseFilter: ["wm.SelectMenu", {"allowNone":true,"caption":"Licenses","dataField":"license","dataType":"com.logs_ultimeyesvision_com_devdb.data.output.GetLicensesFromLogsRtnType","dataValue":undefined,"displayField":"license","displayValue":"","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getLicensesSVar","targetProperty":"dataSet"}, {}]
}]
}],
logIdFilter: ["wm.Number", {"caption":"File ID","captionSize":"180px","dataValue":undefined,"displayValue":""}, {}]
}],
internaluploadsessionfileDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"0","columns":[{"show":true,"field":"id","title":"File ID","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>File ID: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({}, null,null,null,${createdAt}) + \"</div>\"\n+ \"<div class='MobileRow'>Username: \" + ${username} + \"</div>\"\n+ \"<div class='MobileRow'>Filename: \" + ${filename} + \"</div>\"\n+ \"<div class='MobileRow'>Customer.login: \" + ${customer.login} + \"</div>\"\n+ \"<div class='MobileRow'>InternalUploadSession.license: \" + ${internalUploadSession.license} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"filename","title":"Filename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"iterationNumber","title":"IterationNumber","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.firstName","title":"Customer.firstName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.lastName","title":"Customer.lastName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"customer.login","title":"Customer.login","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"internalUploadSession.license","title":"InternalUploadSession.license","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","liveEditing":true,"margin":"4","minDesktopHeight":60,"scrollToTopOnDataChange":true,"singleClickEdit":true}, {"onSelect":"detailsLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
detailsLayer: ["wm.Layer", {"borderColor":"","caption":"Details","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
logDetailsPage: ["wm.PageContainer", {"height":"612px","pageName":"LogUploadsDetailsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{"currentSessionFileVarDataSet":"currentSessionFileVar.dataSet"},"width":"791px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"internaluploadsessionfileDojoGrid.selectedItem","targetProperty":"currentSessionFileVarDataSet"}, {}],
wire: ["wm.Wire", {"expression":"window[\"Studio\"] || !${internaluploadsessionfileDojoGrid.emptySelection}","targetProperty":"showing"}, {}]
}]
}]
}]
}]
}]
};

LogUploadsPage.prototype._cssText = '';
LogUploadsPage.prototype._htmlText = '';