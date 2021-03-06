﻿spa.chat = (function () {
    var configMap = {
        mian_html: String() + "<div style='padding:1em;color:#fff;'>" + "Say Hellp to chat" + "</div>",
        settable_map: {}
    },
    stateMap = { $container: null },
    jqueryMap = {},
    setJqueryMap, configModule, initModule;

    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = { $container: $container };
    }

    configModule = function (input_map) {
        spa.util.setConfigMap({
            input_map: input_map,
            settable_map: configMap.settable_map,
            config_map: configMap
        });
        return true;
    }
    initModule = function ($container) {
        $container.html(configMap.mian_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    }
    return {
        configModule: configModule,
        initModule: initModule
    }
}());