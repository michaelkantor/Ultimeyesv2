dojo.declare("Main", wm.Page, {
"preferredDevice": "desktop",
"i18n": false,
start: function() {
try {
this.label3.setCaption("Ultimeyes (" + app.getFullVersionNumber() + ")");
} catch(e) {
app.toastError(this.name + ".start() Failed: " + e.toString());
}
},
_end: 0
});

Main.widgets = {
logoutVariable1: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService"}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"64px","source":"resources/images/UE_Icon64_transparent.png","width":"64px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Ultimeyes","height":"35px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
logoutLink: ["wm.Label", {"align":"right","caption":"Logout","link":undefined,"padding":"4","width":"78px"}, {"onclick":"logoutVariable1"}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {"conditionalTabButtons":true}, {}, {
customerLayer: ["wm.Layer", {"border":"2","caption":"Customers","horizontalAlign":"left","padding":"2","verticalAlign":"top"}, {}, {
customersPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"CustomersPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
licensesLayer: ["wm.Layer", {"border":"2","caption":"Licenses","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"LicensesPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
physiciansLayer: ["wm.Layer", {"border":"2","caption":"Physicians","deviceType":["desktop"],"horizontalAlign":"left","padding":"2","verticalAlign":"top"}, {}, {
physiciansPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"PhysiciansPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
productsLayer: ["wm.Layer", {"border":"2","caption":"Products","deviceType":["desktop"],"horizontalAlign":"left","padding":"2","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
productsPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"ProductsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
uploadedFilesLayer: ["wm.Layer", {"border":"2","caption":"Unlinked Uploads","deviceType":["desktop"],"horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"UnclaimedUploadsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
validationLayer: ["wm.Layer", {"border":"2","caption":"Validation","deviceType":["desktop"],"horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"LogUploadsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
dataExplorerLayer: ["wm.Layer", {"border":"2","caption":"Data Explorer","deviceType":["desktop"],"horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"DataExplorerMain","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright Carrot NT 2012","height":"100%","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';