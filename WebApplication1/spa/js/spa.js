/// <reference path="spa.shell.js" />

var spa = (function () {
    var initMoule = function ($container) {
        spa.shell.initModule($container);
    }
    return {
        initModule: initMoule
    }
}())

