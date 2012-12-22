LicensesPage.widgets = {
	licenseLiveVariable1: ["wm.LiveVariable", {"type":"com.logs_ultimeyesvision_com_devdb.data.License"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.License","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Key","sortable":true,"dataIndex":"key","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"MacMax","sortable":true,"dataIndex":"macMax","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"LeasePeriod","sortable":true,"dataIndex":"leasePeriod","type":"java.lang.Short","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"SeatsAllocated","sortable":true,"dataIndex":"seatsAllocated","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"licenseSearchEditor.dataValue","targetProperty":"filter.key"}, {}]
		}]
	}],
	bulkAddLicenseLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"insert","startUpdate":false,"type":"com.logs_ultimeyesvision_com_devdb.data.License"}, {"onSuccess":"bulkAddLicenseLVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"sourceData.updatedAt"}, {}],
			wire1: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"sourceData.createdAt"}, {}],
			wire2: ["wm.Wire", {"expression":"3","targetProperty":"sourceData.macMax"}, {}],
			wire3: ["wm.Wire", {"expression":"0","targetProperty":"sourceData.id"}, {}],
			wire4: ["wm.Wire", {"expression":"0","targetProperty":"sourceData.seatsAllocated"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.logs_ultimeyesvision_com_devdb.data.License","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Key","sortable":true,"dataIndex":"key","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"MacMax","sortable":true,"dataIndex":"macMax","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"LeasePeriod","sortable":true,"dataIndex":"leasePeriod","type":"java.lang.Short","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"SeatsAllocated","sortable":true,"dataIndex":"seatsAllocated","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		licenseLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			licenseGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"License","width":"175px"}, {}, {
				licenseSearchEditor: ["wm.Text", {"caption":undefined,"changeOnKey":true,"dataValue":undefined,"displayValue":"","resetButton":true,"width":"100%"}, {}],
				licenseGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"key","title":"Key","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"macMax","title":"MacMax","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"seatsAllocated","title":"SeatsAllocated","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Key: \" + ${key} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"leasePeriod","title":"LeasePeriod","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"dsType":"com.logs_ultimeyesvision_com_devdb.data.License","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onSelect":"detailsLayer"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"licenseLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			tabLayers1: ["wm.TabLayers", {}, {}, {
				detailsLayer: ["wm.Layer", {"border":"2","caption":"Edit License","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					licenseDetailsPanel: ["wm.FancyPanel", {"title":"Details"}, {}, {
						licenseDBForm: ["wm.DBForm", {"autoScroll":true,"height":"100%","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.logs_ultimeyesvision_com_devdb.data.License"}, {"onEnterKeyPress":"licenseDBForm.saveData"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"licenseDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
								wire1: ["wm.Wire", {"source":"licenseDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
								wire2: ["wm.Wire", {"source":"licenseDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
								wire3: ["wm.Wire", {"source":"licenseDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
								wire4: ["wm.Wire", {"source":"licenseDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
								wire5: ["wm.Wire", {"source":"licenseDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
								wire6: ["wm.Wire", {"expression":undefined,"source":"licenseGrid.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							licenseDBFormEditorFormPanelPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								licenseDBFormEditorFormPanel: ["wm.FormPanel", {"height":"100%"}, {}, {
									seatsAllocatedEditor1: ["wm.Number", {"caption":"SeatsAllocated","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"seatsAllocated","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									updatedAtEditor1: ["wm.DateTime", {"caption":"UpdatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"updatedAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"showing":false,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
										}]
									}],
									createdAtEditor1: ["wm.DateTime", {"caption":"CreatedAt","captionSize":"120px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"createdAt","height":"26px","ignoreParentReadonly":true,"readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
										}]
									}],
									macMaxEditor1: ["wm.Number", {"caption":"MacMax","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"macMax","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									keynameEditor1: ["wm.Text", {"caption":"Key","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"key","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									number1: ["wm.Number", {"caption":"LeasePeriod","captionSize":"120px","desktopHeight":"26px","emptyValue":"emptyString","formField":"leasePeriod","height":"26px","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"28","targetProperty":"dataValue"}, {}]
										}]
									}],
									idEditor1: ["wm.Number", {"caption":"Id","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","ignoreParentReadonly":true,"readonly":true,"required":true,"width":"100%"}, {}]
								}],
								licenseDBFormOneToManyFormPanel: ["wm.FormPanel", {"captionAlign":"left","captionPosition":"top","captionSize":"20px","height":"100%","width":"200px"}, {}, {
									licenseMacsOneToMany1: ["wm.OneToMany", {"caption":"LicenseMacs","captionAlign":"left","captionPosition":"top","captionSize":"20px","dataValue":undefined,"displayExpression":"${id.macAddr}","displayField":"id","formField":"licenseMacs","height":"100%","minDesktopHeight":100,"width":"100%"}, {}],
									customerProductAssociatesOneToMany1: ["wm.OneToMany", {"caption":"Users","captionAlign":"left","captionPosition":"top","captionSize":"20px","dataValue":undefined,"displayField":"username","formField":"customerProductAssociates","height":"100%","minDesktopHeight":100,"width":"100%"}, {}]
								}]
							}],
							licenseDBFormButtonPanel: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								licenseDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"licenseDBForm.editNewObject"}],
								licenseDBFormEditButton: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"licenseDBForm.editCurrentObject","onclick1":"licenseDBFormEditButtonClick1"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"licenseDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								licenseDBFormDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"licenseDBForm.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"licenseDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								licenseDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"licenseDBForm.cancelEdit"}],
								licenseDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"licenseDBForm.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"${licenseDBForm.invalid} || !${licenseDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				addLicenseLayer: ["wm.Layer", {"border":"2","caption":"Bulk Add","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					licenseEditor: ["wm.LargeTextArea", {"caption":"Paste in licenses","captionSize":"28px","dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {}],
					panel1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						importButton: ["wm.Button", {"caption":"Add Licenses","margin":"4","width":"114px"}, {"onclick":"importButtonClick"}]
					}]
				}]
			}]
		}]
	}]
}