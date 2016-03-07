System.register(['angular2/platform/browser', './popup.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, popup_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (popup_component_1_1) {
                popup_component_1 = popup_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(popup_component_1.PopupComponent);
        }
    }
});
//# sourceMappingURL=popup.js.map