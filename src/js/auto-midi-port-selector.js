/*
 * Flocking UI MIDI Port Selector
 *   Copyright 2015, Colin Clark
 *
 * Dual licensed under the MIT and GPL Version 2 licenses.
 */

/*global require, jQuery*/

var fluid = fluid || require("infusion"),
    flock = fluid.registerNamespace("flock");

(function () {
    "use strict";

    fluid.defaults("flock.auto.ui.midiPortSelector", {
        gradeNames: ["flock.ui.midiPortSelector"],

        implicitPorts: [{ id: false, name: "None" }],

        components: {
            midiSystem: {
                type: "flock.auto.midi.system"
            }
        },

        listeners: {
            "onPortsAvailable.updatePortsModel": {
                funcName: "flock.auto.ui.midiPortSelector.updatePortsModel",
                args: ["{that}", "{arguments}.0", ]
            }
        }
    });

    flock.auto.ui.midiPortSelector.updatePortsModel = function (that, ports) {
        var portType = that.options.portType + "s";
        var portsForType = fluid.copy(that.options.implicitPorts).concat(ports[portType]);

        fluid.fireChanges(that.applier, [
            { path: "ports", type: "DELETE" },
            { path: "ports", value: portsForType }
        ]);
    };
}());
