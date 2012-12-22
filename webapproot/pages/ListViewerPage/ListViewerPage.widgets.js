ListViewerPage.widgets = {
	liveVariable: ["wm.LiveVariable", {"inFlightBehavior":"executeLast"}, {}, {
		liveView: ["wm.LiveView", {}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		listPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			form: ["wm.FormPanel", {"autoScroll":true,"height":"100%","width":"200undefined"}, {}],
			list: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"height":"100%","minDesktopHeight":60}, {"onSelect":"listSelect"}]
		}],
		dataNavigator1: ["wm.DataNavigator", {"border":"0","width":"100%"}, {}]
	}]
}