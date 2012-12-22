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
}