define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils      = brackets.getModule("utils/ExtensionUtils"),
        ScrollTrackMarkers  = brackets.getModule("search/ScrollTrackMarkers");

    if (ScrollTrackMarkers.setScrollbarTrackOffset) {
        ScrollTrackMarkers.setScrollbarTrackOffset(15);
    }
    ExtensionUtils.loadStyleSheet(module, "styles/scrollbars.less");
});
