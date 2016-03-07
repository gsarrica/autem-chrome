System.register(['angular2/platform/browser', './settings.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, settings_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(settings_component_1.SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.js.map