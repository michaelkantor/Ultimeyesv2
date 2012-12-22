dojo.declare("LicensesPage", wm.Page, {
    start: function() {
        
    },
    "preferredDevice": "desktop",

    licenseDBFormEditButtonClick1: function(inSender) {
        this.keynameEditor1.setReadonly(true);
    },
    importButtonClick: function(inSender) {
        var text = this.licenseEditor.getDataValue();
        var licenses = text.split(/\s+/);
        dojo.forEach(licenses, function(l) {
            this.bulkAddLicenseLVar.sourceData.setValue("key", l);
            this.bulkAddLicenseLVar.update();            
        }, this);
    },
    bulkAddLicenseLVarSuccess: function(inSender, inDeprecated) {
        if (inSender._inFlightBacklog.length == 0) {
            this.licenseLiveVariable1.update();
        }
    },
    _end: 0
});