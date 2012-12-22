ItemViewerPage.widgets = {
	variable: ["wm.Variable", {"isList":true,"type":"ItemViewerType"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		list: ["wm.List", {"_classes":{"domNode":["list","GridListStyle"]},"columns":[{"show":true,"field":"name","title":"Name","width":"200px","mobileColumn":false},{"show":true,"field":"type","title":"Type","width":"100px","align":"left","expression":"String(${type}).replace(/.*\\./,\"\")","mobileColumn":false},{"show":true,"field":"dataValue","title":"DataValue","width":"100%","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>DataValue: \" + ${dataValue} + \"</div>\"\n","mobileColumn":true}],"height":"100%","minDesktopHeight":60}, {"onSelect":"listSelect"}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"variable","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}