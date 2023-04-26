$(function() {
    function AutoConnectAndPrintViewModel(parameters) {
        var self = this;

        self.settingsViewModel = parameters[0];

        self.onBeforeBinding = function() {
            self.settings = self.settingsViewModel.settings;
        };
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: AutoConnectAndPrintViewModel,
        dependencies: ["settingsViewModel"],
        elements: ["#settings_plugin_auto_connect_and_print"]
    });
});
