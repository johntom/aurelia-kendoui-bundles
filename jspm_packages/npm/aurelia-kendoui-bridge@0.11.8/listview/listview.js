/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.listview.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ListView = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ListView = exports.ListView = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'list-view'), _dec2 = (0, _decorators.generateBindables)('kendoListView'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ListView(element, widgetBase, viewResources) {
      _classCallCheck(this, ListView);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoListView').linkViewModel(this).useViewResources(viewResources);
    }

    ListView.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    ListView.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ListView.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoListView', templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    ListView.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return ListView;
  }()) || _class) || _class) || _class);
});