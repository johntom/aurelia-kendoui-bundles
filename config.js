System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "kendo.*": "jspm_packages/kendo/bower-kendo-ui@2016.1.322/js/kendo.*.js",
    "kendo:*": "jspm_packages/kendo/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-kendoui-bridge": "npm:aurelia-kendoui-bridge@0.7.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@0.9.18",
    "jquery": "npm:jquery@2.1.4",
    "kendo-ui": "kendo:bower-kendo-ui@2016.1.322",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-kendoui-bridge@0.7.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1",
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "bundles/bundle.js": [
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "kendo.aspnetmvc.min",
      "kendo.autocomplete.min",
      "kendo.binder.min",
      "kendo.button.min",
      "kendo.calendar.min",
      "kendo.color.min",
      "kendo.colorpicker.min",
      "kendo.columnmenu.min",
      "kendo.columnsorter.min",
      "kendo.combobox.min",
      "kendo.core.min",
      "kendo.data.min",
      "kendo.data.odata.min",
      "kendo.data.signalr.min",
      "kendo.data.xml.min",
      "kendo.dataviz.barcode.min",
      "kendo.dataviz.chart.funnel.min",
      "kendo.dataviz.chart.min",
      "kendo.dataviz.chart.polar.min",
      "kendo.dataviz.core.min",
      "kendo.dataviz.diagram.min",
      "kendo.dataviz.gauge.min",
      "kendo.dataviz.map.min",
      "kendo.dataviz.qrcode.min",
      "kendo.dataviz.sparkline.min",
      "kendo.dataviz.stock.min",
      "kendo.dataviz.themes.min",
      "kendo.dataviz.treemap.min",
      "kendo.datepicker.min",
      "kendo.datetimepicker.min",
      "kendo.dom.min",
      "kendo.draganddrop.min",
      "kendo.drawing.min",
      "kendo.dropdownlist.min",
      "kendo.editable.min",
      "kendo.editor.min",
      "kendo.excel.min",
      "kendo.filebrowser.min",
      "kendo.filtercell.min",
      "kendo.filtermenu.min",
      "kendo.fx.min",
      "kendo.gantt.list.min",
      "kendo.gantt.min",
      "kendo.gantt.timeline.min",
      "kendo.grid.min",
      "kendo.groupable.min",
      "kendo.imagebrowser.min",
      "kendo.list.min",
      "kendo.listview.min",
      "kendo.maskedtextbox.min",
      "kendo.menu.min",
      "kendo.mobile.actionsheet.min",
      "kendo.mobile.application.min",
      "kendo.mobile.button.min",
      "kendo.mobile.buttongroup.min",
      "kendo.mobile.collapsible.min",
      "kendo.mobile.drawer.min",
      "kendo.mobile.listview.min",
      "kendo.mobile.loader.min",
      "kendo.mobile.modalview.min",
      "kendo.mobile.navbar.min",
      "kendo.mobile.pane.min",
      "kendo.mobile.popover.min",
      "kendo.mobile.scroller.min",
      "kendo.mobile.scrollview.min",
      "kendo.mobile.shim.min",
      "kendo.mobile.splitview.min",
      "kendo.mobile.switch.min",
      "kendo.mobile.tabstrip.min",
      "kendo.mobile.view.min",
      "kendo.multiselect.min",
      "kendo.notification.min",
      "kendo.numerictextbox.min",
      "kendo.ooxml.min",
      "kendo.pager.min",
      "kendo.panelbar.min",
      "kendo.pdf.min",
      "kendo.pivot.configurator.min",
      "kendo.pivot.fieldmenu.min",
      "kendo.pivotgrid.min",
      "kendo.popup.min",
      "kendo.progressbar.min",
      "kendo.reorderable.min",
      "kendo.resizable.min",
      "kendo.responsivepanel.min",
      "kendo.router.min",
      "kendo.scheduler.agendaview.min",
      "kendo.scheduler.dayview.min",
      "kendo.scheduler.min",
      "kendo.scheduler.monthview.min",
      "kendo.scheduler.recurrence.min",
      "kendo.scheduler.timelineview.min",
      "kendo.scheduler.view.min",
      "kendo.selectable.min",
      "kendo.slider.min",
      "kendo.sortable.min",
      "kendo.splitter.min",
      "kendo.tabstrip.min",
      "kendo.timepicker.min",
      "kendo.timezones.min",
      "kendo.toolbar.min",
      "kendo.tooltip.min",
      "kendo.touch.min",
      "kendo.treelist.min",
      "kendo.treeview.draganddrop.min",
      "kendo.treeview.min",
      "kendo.upload.min",
      "kendo.userevents.min",
      "kendo.validator.min",
      "kendo.view.min",
      "kendo.virtuallist.min",
      "kendo.webcomponents.min",
      "kendo.window.min",
      "kendo:bower-kendo-ui@2016.1.322/js/jszip.min.js",
      "kendo:bower-kendo-ui@2016.1.322/js/pako_deflate.min.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.1.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.1.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-kendoui-bridge@0.7.0.js",
      "npm:aurelia-kendoui-bridge@0.7.0/autocomplete/autocomplete.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/autocomplete/autocomplete.js",
      "npm:aurelia-kendoui-bridge@0.7.0/barcode/barcode.js",
      "npm:aurelia-kendoui-bridge@0.7.0/button/button.js",
      "npm:aurelia-kendoui-bridge@0.7.0/buttongroup/buttongroup.js",
      "npm:aurelia-kendoui-bridge@0.7.0/calendar/calendar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/calendar/calendar.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/chart.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/chart.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/sparkline.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/sparkline.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/stock.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/stock.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/treemap.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/chart/treemap.js",
      "npm:aurelia-kendoui-bridge@0.7.0/colorpalette/colorpalette.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/colorpalette/colorpalette.js",
      "npm:aurelia-kendoui-bridge@0.7.0/colorpicker/colorpicker.js",
      "npm:aurelia-kendoui-bridge@0.7.0/combobox/combobox.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/combobox/combobox.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/bindables.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/constants.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/control-properties.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/decorators.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/options-builder.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/template-compiler.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/template-gatherer.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/template.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/util.js",
      "npm:aurelia-kendoui-bridge@0.7.0/common/widget-base.js",
      "npm:aurelia-kendoui-bridge@0.7.0/config-builder.js",
      "npm:aurelia-kendoui-bridge@0.7.0/contextmenu/contextmenu.js",
      "npm:aurelia-kendoui-bridge@0.7.0/datepicker/datepicker.js",
      "npm:aurelia-kendoui-bridge@0.7.0/datetimepicker/datetimepicker.js",
      "npm:aurelia-kendoui-bridge@0.7.0/diagram/diagram.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/diagram/diagram.js",
      "npm:aurelia-kendoui-bridge@0.7.0/draggable/draggable.js",
      "npm:aurelia-kendoui-bridge@0.7.0/drop-target/drop-target-area.js",
      "npm:aurelia-kendoui-bridge@0.7.0/drop-target/drop-target.js",
      "npm:aurelia-kendoui-bridge@0.7.0/dropdownlist/dropdownlist.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/dropdownlist/dropdownlist.js",
      "npm:aurelia-kendoui-bridge@0.7.0/editor/editor.js",
      "npm:aurelia-kendoui-bridge@0.7.0/flatcolorpicker/flatcolorpicker.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/flatcolorpicker/flatcolorpicker.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gantt/gantt-col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gantt/gantt-col.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gantt/gantt.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gantt/gantt.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gauges/linear-gauge.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gauges/linear-gauge.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gauges/radial-gauge.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/gauges/radial-gauge.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/col.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/grid-toolbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/grid-toolbar.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/grid.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/grid/grid.js",
      "npm:aurelia-kendoui-bridge@0.7.0/index.js",
      "npm:aurelia-kendoui-bridge@0.7.0/listview/listview.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/listview/listview.js",
      "npm:aurelia-kendoui-bridge@0.7.0/map/map.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/map/map.js",
      "npm:aurelia-kendoui-bridge@0.7.0/maskedtextbox/maskedtextbox.js",
      "npm:aurelia-kendoui-bridge@0.7.0/menu/menu.js",
      "npm:aurelia-kendoui-bridge@0.7.0/multiselect/multiselect.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/multiselect/multiselect.js",
      "npm:aurelia-kendoui-bridge@0.7.0/notification/notification-template.js",
      "npm:aurelia-kendoui-bridge@0.7.0/notification/notification.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/notification/notification.js",
      "npm:aurelia-kendoui-bridge@0.7.0/numerictextbox/numerictextbox.js",
      "npm:aurelia-kendoui-bridge@0.7.0/panelbar/panelbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/panelbar/panelbar.js",
      "npm:aurelia-kendoui-bridge@0.7.0/pdf/pdf.js",
      "npm:aurelia-kendoui-bridge@0.7.0/pivotgrid/pivotconfigurator.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/pivotgrid/pivotconfigurator.js",
      "npm:aurelia-kendoui-bridge@0.7.0/pivotgrid/pivotgrid.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/pivotgrid/pivotgrid.js",
      "npm:aurelia-kendoui-bridge@0.7.0/progressbar/progressbar.js",
      "npm:aurelia-kendoui-bridge@0.7.0/qrcode/qrcode.js",
      "npm:aurelia-kendoui-bridge@0.7.0/rangeslider/rangeslider.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/rangeslider/rangeslider.js",
      "npm:aurelia-kendoui-bridge@0.7.0/responsivepanel/responsivepanel.js",
      "npm:aurelia-kendoui-bridge@0.7.0/scheduler/scheduler.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/scheduler/scheduler.js",
      "npm:aurelia-kendoui-bridge@0.7.0/scrollview/scrollview.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/scrollview/scrollview.js",
      "npm:aurelia-kendoui-bridge@0.7.0/slider/slider.js",
      "npm:aurelia-kendoui-bridge@0.7.0/sortable/sortable.js",
      "npm:aurelia-kendoui-bridge@0.7.0/splitter/splitter.js",
      "npm:aurelia-kendoui-bridge@0.7.0/spreadsheet/spreadsheet.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/spreadsheet/spreadsheet.js",
      "npm:aurelia-kendoui-bridge@0.7.0/switch/switch.js",
      "npm:aurelia-kendoui-bridge@0.7.0/tabstrip/tabstrip.js",
      "npm:aurelia-kendoui-bridge@0.7.0/timepicker/timepicker.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar-item-button.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar-item-button.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar-item.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar-item.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/toolbar/toolbar.js",
      "npm:aurelia-kendoui-bridge@0.7.0/tooltip/tooltip.js",
      "npm:aurelia-kendoui-bridge@0.7.0/treelist/tree-col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/treelist/tree-col.js",
      "npm:aurelia-kendoui-bridge@0.7.0/treelist/treelist.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/treelist/treelist.js",
      "npm:aurelia-kendoui-bridge@0.7.0/treeview/treeview.js",
      "npm:aurelia-kendoui-bridge@0.7.0/upload/upload.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@0.7.0/upload/upload.js",
      "npm:aurelia-kendoui-bridge@0.7.0/validator/validator.js",
      "npm:aurelia-kendoui-bridge@0.7.0/valueconverters/valueconverters.js",
      "npm:aurelia-kendoui-bridge@0.7.0/window/window.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.1.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.1/aurelia-templating.js",
      "npm:jquery@2.1.4.js",
      "npm:jquery@2.1.4/dist/jquery.js"
    ]
  }
});