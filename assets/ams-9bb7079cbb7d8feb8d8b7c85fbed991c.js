'use strict';



;define("ams/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("ams/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ams/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ams/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ams/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    'device-xs': '(max-width: 575px)',
    'device-sm': '(min-width: 576px) and (max-width: 767px)',
    'device-md': '(min-width: 768px) and (max-width: 991px)',
    'device-lg': '(min-width: 992px) and (max-width: 1199px)',
    'device-xl': '(min-width: 1200px) and (max-width: 10000px)'
  };
  _exports.default = _default;
});
;define("ams/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("ams/components/-dynamic-element-alt", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElementAlt extends _component.default {}
  _exports.default = DynamicElementAlt;
});
;define("ams/components/-dynamic-element", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component"eaimeta@70e063a35619d71f
  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  // eslint-disable-next-line ember/no-empty-glimmer-component-classes
  class DynamicElement extends _component.default {}
  _exports.default = DynamicElement;
});
;define("ams/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item/body"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-accordion/item/title"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-alert"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button-group"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button-group/button"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-button"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-carousel"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-carousel/slide"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-collapse"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/button"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu/divider"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/menu/item"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-dropdown/toggle"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/checkbox"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/input"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/radio"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control/switch", ["exports", "ember-bootstrap/components/bs-form/element/control/switch"], function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _switch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/switch"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/control/textarea"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/errors"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/feedback-icon"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/help-text"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/label"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/horizontal"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/inline"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/inline/checkbox"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/vertical"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-form/element/legend"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-link-to", ["exports", "ember-bootstrap/components/bs-link-to"], function (_exports, _bsLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsLinkTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-link-to"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal-simple"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/body"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/dialog"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/footer"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header/close"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-modal/header/title"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-nav"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-nav/item"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/content"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/link-to"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/nav"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-navbar/toggle"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-popover"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-popover/element"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-progress"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-progress/bar"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tab"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tab/pane"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tooltip"eaimeta@70e063a35619d71f
});
;define("ams/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/components/bs-tooltip/element"eaimeta@70e063a35619d71f
});
;define("ams/components/go-to-top", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/application", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _application, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/application",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div id="gotoTop" class="icon-angle-up"  {{did-insert this.addScrollListener}} style={{if this.isShown "display: block;"}} {{on "click" this.scrollToTop}}></div>
  */
  {
    "id": "HhikW2+K",
    "block": "[[[11,0],[24,1,\"gotoTop\"],[24,0,\"icon-angle-up\"],[16,5,[52,[30,0,[\"isShown\"]],\"display: block;\"]],[4,[38,1],[[30,0,[\"addScrollListener\"]]],null],[4,[38,2],[\"click\",[30,0,[\"scrollToTop\"]]],null],[12],[13]],[],false,[\"if\",\"did-insert\",\"on\"]]",
    "moduleName": "ams/components/go-to-top.hbs",
    "isStrictMode": false
  });
  let GoToTopComponent = (_class = class GoToTopComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "fastboot", _descriptor, this);
      _initializerDefineProperty(this, "isShown", _descriptor2, this);
    }
    addScrollListener() {
      if (!this.fastboot.isFastBoot) {
        const document = (0, _application.getOwner)(this).lookup('service:-document');
        document.addEventListener('scroll', () => {
          const lastKnownScrollPosition = window.scrollY;
          const browserWindowHeight = window.innerHeight;
          if (lastKnownScrollPosition > browserWindowHeight / 3) {
            this.isShown = true;
          } else {
            this.isShown = false;
          }
        });
      }
      ;
    }
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fastboot", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isShown", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addScrollListener", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addScrollListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "scrollToTop", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "scrollToTop"), _class.prototype)), _class);
  _exports.default = GoToTopComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, GoToTopComponent);
});
;define("ams/components/head-content", ["exports", "@ember/service", "@glimmer/component", "ams/templates/head", "@ember/component"], function (_exports, _service, _component, _head, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/component",0,"ams/templates/head",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let HeadContent = (_dec = (0, _service.inject)('head-data'), (_class = class HeadContent extends _component.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "model", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "model", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = HeadContent;
  (0, _component2.setComponentTemplate)(_head.default, HeadContent);
});
;define("ams/components/head-layout", ["exports", "ember-cli-head/components/head-layout"], function (_exports, _headLayout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headLayout.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-head/components/head-layout"eaimeta@70e063a35619d71f
});
;define("ams/components/header", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/application", "@glimmer/tracking", "@ember/service", "@ember/object", "ams/util/set"], function (_exports, _component, _templateFactory, _component2, _application, _tracking, _service, _object, _set) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/application",0,"@glimmer/tracking",0,"@ember/service",0,"@ember/object",0,"ams/util/set"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Header
  ============================================= --}}
  <header id="header" class="header-size-sm {{if this.isSticky "sticky-header"}}" {{did-insert this.addScrollListener}}>
      <div class="container">
          <div class="header-row">
  
              <Header::Logo/>
  
              <div class="header-misc d-none d-lg-flex">
  
                  <ul class="header-extras">
                      <Header::Contact @icon="icon-call">
                          {{t "header.call"}}
                          <span>(1) 22 54215821</span>
                      </Header::Contact>
                      <Header::Contact @icon="icon-line2-envelope">
                          {{t "header.email"}}
                          <span>info@canvas.com</span>
                      </Header::Contact>
                      <Header::Contact @icon="icon-line-clock">
                          {{t "header.open"}}
                          <span>Mon - Sat, 10AM to 6PM</span>
                      </Header::Contact>
                  </ul>
  
              </div>
  
          </div>
      </div>
  
      <div id="header-wrap">
          <div class="container">
              <div class="header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center">
  
                  <div class="header-misc">
  
                      {{!-- Top Search
                      ============================================= --}}
                      <div id="top-search" class="header-misc-icon">
                          <a href="#" id="top-search-trigger"><i class="icon-line-search"></i><i class="icon-line-cross"></i></a>
                      </div>{{!-- #top-search end --}}
  
                  </div>
  
                  <div id="primary-menu-trigger">
                      <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                  </div>
  
                  <Header::PrimaryNavigation/>
  
                  <form class="top-search-form" action="search.html" method="get">
                      <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.." autocomplete="off">
                  </form>
  
              </div>
          </div>
      </div>
      <div class="header-wrap-clone"></div>
  </header>{{!-- #header end --}}
  */
  {
    "id": "CUPRD8b3",
    "block": "[[[11,\"header\"],[24,1,\"header\"],[16,0,[29,[\"header-size-sm \",[52,[30,0,[\"isSticky\"]],\"sticky-header\"]]]],[4,[38,1],[[30,0,[\"addScrollListener\"]]],null],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"header-row\"],[12],[1,\"\\n\\n            \"],[8,[39,2],null,null,null],[1,\"\\n\\n            \"],[10,0],[14,0,\"header-misc d-none d-lg-flex\"],[12],[1,\"\\n\\n                \"],[10,\"ul\"],[14,0,\"header-extras\"],[12],[1,\"\\n                    \"],[8,[39,3],null,[[\"@icon\"],[\"icon-call\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[28,[35,4],[\"header.call\"],null]],[1,\"\\n                        \"],[10,1],[12],[1,\"(1) 22 54215821\"],[13],[1,\"\\n                    \"]],[]]]]],[1,\"\\n                    \"],[8,[39,3],null,[[\"@icon\"],[\"icon-line2-envelope\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[28,[35,4],[\"header.email\"],null]],[1,\"\\n                        \"],[10,1],[12],[1,\"info@canvas.com\"],[13],[1,\"\\n                    \"]],[]]]]],[1,\"\\n                    \"],[8,[39,3],null,[[\"@icon\"],[\"icon-line-clock\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[28,[35,4],[\"header.open\"],null]],[1,\"\\n                        \"],[10,1],[12],[1,\"Mon - Sat, 10AM to 6PM\"],[13],[1,\"\\n                    \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,1,\"header-wrap\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center\"],[12],[1,\"\\n\\n                \"],[10,0],[14,0,\"header-misc\"],[12],[1,\"\\n\\n\"],[1,\"                    \"],[10,0],[14,1,\"top-search\"],[14,0,\"header-misc-icon\"],[12],[1,\"\\n                        \"],[10,3],[14,6,\"#\"],[14,1,\"top-search-trigger\"],[12],[10,\"i\"],[14,0,\"icon-line-search\"],[12],[13],[10,\"i\"],[14,0,\"icon-line-cross\"],[12],[13],[13],[1,\"\\n                    \"],[13],[1,\"\\n\\n                \"],[13],[1,\"\\n\\n                \"],[10,0],[14,1,\"primary-menu-trigger\"],[12],[1,\"\\n                    \"],[10,\"svg\"],[14,0,\"svg-trigger\"],[14,\"viewBox\",\"0 0 100 100\"],[12],[10,\"path\"],[14,\"d\",\"m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20\"],[12],[13],[10,\"path\"],[14,\"d\",\"m 30,50 h 40\"],[12],[13],[10,\"path\"],[14,\"d\",\"m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20\"],[12],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n                \"],[8,[39,5],null,null,null],[1,\"\\n\\n                \"],[10,\"form\"],[14,0,\"top-search-form\"],[14,\"action\",\"search.html\"],[14,\"method\",\"get\"],[12],[1,\"\\n                    \"],[10,\"input\"],[14,3,\"q\"],[14,0,\"form-control\"],[14,2,\"\"],[14,\"placeholder\",\"Type & Hit Enter..\"],[14,\"autocomplete\",\"off\"],[14,4,\"text\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"header-wrap-clone\"],[12],[13],[1,\"\\n\"],[13]],[],false,[\"if\",\"did-insert\",\"header/logo\",\"header/contact\",\"t\",\"header/primary-navigation\"]]",
    "moduleName": "ams/components/header.hbs",
    "isStrictMode": false
  });
  let HeaderComponent = (_class = class HeaderComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "topOffsetScroll", 140);
      _defineProperty(this, "desktopMedia", new Set(['device-xl', 'device-lg']));
      _initializerDefineProperty(this, "isSticky", _descriptor, this);
      _initializerDefineProperty(this, "media", _descriptor2, this);
      _initializerDefineProperty(this, "fastboot", _descriptor3, this);
    }
    addScrollListener() {
      if (!this.fastboot.isFastBoot) {
        const document = (0, _application.getOwner)(this).lookup('service:-document');
        document.addEventListener('scroll', () => {
          const hasMedia = new Set(this.media.matches);
          if ((0, _set.isSuperset)(this.desktopMedia, hasMedia) && window.scrollY >= this.topOffsetScroll) {
            this.isSticky = true;
          } else {
            this.isSticky = false;
          }
        });
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isSticky", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "media", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fastboot", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addScrollListener", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addScrollListener"), _class.prototype)), _class);
  _exports.default = HeaderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderComponent);
});
;define("ams/components/header/contact", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li>
      <i class="i-plain {{@icon}} m-0"></i>
      <div class="he-text">
          {{yield}}
      </div>
  </li>
  */
  {
    "id": "ifrA/GM5",
    "block": "[[[10,\"li\"],[12],[1,\"\\n    \"],[10,\"i\"],[15,0,[29,[\"i-plain \",[30,1],\" m-0\"]]],[12],[13],[1,\"\\n    \"],[10,0],[14,0,\"he-text\"],[12],[1,\"\\n        \"],[18,2,null],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@icon\",\"&default\"],false,[\"yield\"]]",
    "moduleName": "ams/components/header/contact.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ams/components/header/locale-switcher", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li class="top-links-item"><a href="#">{{t 'locale.language'}}<i class="icon-angle-down"></i></a>
      <ul class="top-links-sub-menu">
          <li class="top-links-item"><a {{on "click" (fn this.switch 'en-us')}}>{{t 'locale.en-us'}}</a></li>
          <li class="top-links-item"><a {{on "click" (fn this.switch 'uk-ua')}}>{{t 'locale.uk-ua'}}</a></li>
      </ul>
  </li>
  */
  {
    "id": "rMNB3wlB",
    "block": "[[[10,\"li\"],[14,0,\"top-links-item\"],[12],[10,3],[14,6,\"#\"],[12],[1,[28,[35,0],[\"locale.language\"],null]],[10,\"i\"],[14,0,\"icon-angle-down\"],[12],[13],[13],[1,\"\\n    \"],[10,\"ul\"],[14,0,\"top-links-sub-menu\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"top-links-item\"],[12],[11,3],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"switch\"]],\"en-us\"],null]],null],[12],[1,[28,[35,0],[\"locale.en-us\"],null]],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"top-links-item\"],[12],[11,3],[4,[38,1],[\"click\",[28,[37,2],[[30,0,[\"switch\"]],\"uk-ua\"],null]],null],[12],[1,[28,[35,0],[\"locale.uk-ua\"],null]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[],false,[\"t\",\"on\",\"fn\"]]",
    "moduleName": "ams/components/header/locale-switcher.hbs",
    "isStrictMode": false
  });
  let HeaderLocaleSwitcherComponent = (_class = class HeaderLocaleSwitcherComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "intl", _descriptor, this);
    }
    switch(language) {
      console.log(language);
      this.intl.setLocale([language]);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "switch", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "switch"), _class.prototype)), _class);
  _exports.default = HeaderLocaleSwitcherComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderLocaleSwitcherComponent);
});
;define("ams/components/header/logo", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Logo
  ============================================= --}}
  <div id="logo" class="ml-auto ml-lg-0 mr-lg-auto">
      <a href="index.html" class="standard-logo"><img src="assets/images/logo-2d6ee0ff1f379699c0508c723c109f0f.png" alt="Canvas Logo"></a>
      <a href="index.html" class="retina-logo"><img src="assets/images/logo@2x-9d84c2e4caca2e298f20030c833a5595.png" alt="Canvas Logo"></a>
  </div>{{!-- #logo end --}}
  */
  {
    "id": "xYtQ3Kos",
    "block": "[[[10,0],[14,1,\"logo\"],[14,0,\"ml-auto ml-lg-0 mr-lg-auto\"],[12],[1,\"\\n    \"],[10,3],[14,6,\"index.html\"],[14,0,\"standard-logo\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/logo-2d6ee0ff1f379699c0508c723c109f0f.png\"],[14,\"alt\",\"Canvas Logo\"],[12],[13],[13],[1,\"\\n    \"],[10,3],[14,6,\"index.html\"],[14,0,\"retina-logo\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/logo@2x-9d84c2e4caca2e298f20030c833a5595.png\"],[14,\"alt\",\"Canvas Logo\"],[12],[13],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "ams/components/header/logo.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ams/components/header/primary-navigation", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Primary Navigation
  ============================================= --}}
  <nav class="primary-menu with-arrows">
  
      <ul class="menu-container">
          <li class="menu-item current"><a class="menu-link" href="demo-construction.html"><div>Home</div></a></li>
          <li class="menu-item">
              <a class="menu-link" href="demo-construction-services.html">
                  <div>What we do
                      <i class="icon-angle-down"></i>
                  </div>
              </a>
              <ul class="sub-menu-container">
                  <li class="menu-item">
                      <a class="menu-link" href="#">
                          <div>Housing Management</div
                      ></a>
                  </li>
                  <li class="menu-item">
                      <a class="menu-link" href="#">
                          <div>Construction Planning</div>
                      </a>
                  </li>
                  <li class="menu-item"><a class="menu-link" href="#"><div>Green Homes</div></a></li>
                  <li class="menu-item"><a class="menu-link" href="#"><div>Architecture Design</div></a></li>
                  <li class="menu-item"><a class="menu-link" href="#"><div>Interior Planning</div></a></li>
              </ul>
          </li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-about-us.html"><div>About Us</div></a></li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-projects.html"><div>Projects<i class="icon-angle-down"></i></div></a>
              <ul class="sub-menu-container">
                  <li class="menu-item"><a class="menu-link" href="demo-construction-projects-2.html"><div>2 Columns</div></a></li>
                  <li class="menu-item"><a class="menu-link" href="demo-construction-projects-3.html"><div>3 Columns</div></a></li>
                  <li class="menu-item"><a class="menu-link" href="demo-construction-projects.html"><div>4 Columns</div></a></li>
                  <li class="menu-item"><a class="menu-link" href="demo-construction-projects-5.html"><div>5 Columns</div></a></li>
              </ul>
          </li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-investors.html"><div>Investors</div></a></li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-blog.html"><div>News</div></a></li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-careers.html"><div>Careers</div></a></li>
          <li class="menu-item"><a class="menu-link" href="demo-construction-contact.html"><div>Contact</div></a></li>
      </ul>
  
  </nav>{{!-- #primary-menu end --}}
  */
  {
    "id": "3YxWh5L8",
    "block": "[[[10,\"nav\"],[14,0,\"primary-menu with-arrows\"],[12],[1,\"\\n\\n    \"],[10,\"ul\"],[14,0,\"menu-container\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item current\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction.html\"],[12],[10,0],[12],[1,\"Home\"],[13],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[1,\"\\n            \"],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-services.html\"],[12],[1,\"\\n                \"],[10,0],[12],[1,\"What we do\\n                    \"],[10,\"i\"],[14,0,\"icon-angle-down\"],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"sub-menu-container\"],[12],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[1,\"\\n                    \"],[10,3],[14,0,\"menu-link\"],[14,6,\"#\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"Housing Management\"],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[1,\"\\n                    \"],[10,3],[14,0,\"menu-link\"],[14,6,\"#\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"Construction Planning\"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"#\"],[12],[10,0],[12],[1,\"Green Homes\"],[13],[13],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"#\"],[12],[10,0],[12],[1,\"Architecture Design\"],[13],[13],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"#\"],[12],[10,0],[12],[1,\"Interior Planning\"],[13],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-about-us.html\"],[12],[10,0],[12],[1,\"About Us\"],[13],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-projects.html\"],[12],[10,0],[12],[1,\"Projects\"],[10,\"i\"],[14,0,\"icon-angle-down\"],[12],[13],[13],[13],[1,\"\\n            \"],[10,\"ul\"],[14,0,\"sub-menu-container\"],[12],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-projects-2.html\"],[12],[10,0],[12],[1,\"2 Columns\"],[13],[13],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-projects-3.html\"],[12],[10,0],[12],[1,\"3 Columns\"],[13],[13],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-projects.html\"],[12],[10,0],[12],[1,\"4 Columns\"],[13],[13],[13],[1,\"\\n                \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-projects-5.html\"],[12],[10,0],[12],[1,\"5 Columns\"],[13],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-investors.html\"],[12],[10,0],[12],[1,\"Investors\"],[13],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-blog.html\"],[12],[10,0],[12],[1,\"News\"],[13],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-careers.html\"],[12],[10,0],[12],[1,\"Careers\"],[13],[13],[13],[1,\"\\n        \"],[10,\"li\"],[14,0,\"menu-item\"],[12],[10,3],[14,0,\"menu-link\"],[14,6,\"demo-construction-contact.html\"],[12],[10,0],[12],[1,\"Contact\"],[13],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[13]],[],false,[]]",
    "moduleName": "ams/components/header/primary-navigation.hbs",
    "isStrictMode": false
  });
  class HeaderPrimaryNavigationComponent extends _component2.default {}
  _exports.default = HeaderPrimaryNavigationComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderPrimaryNavigationComponent);
});
;define("ams/components/header/social", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <li>
      <a href="{{@url}}" class="si-{{@slag}}">
          <span class="ts-icon">
              <i class="icon-{{@slag}}"></i>
          </span>
          <span class="ts-text">{{@name}}</span>
      </a>
  </li>
  */
  {
    "id": "jixRnCQU",
    "block": "[[[10,\"li\"],[12],[1,\"\\n    \"],[10,3],[15,6,[29,[[30,1]]]],[15,0,[29,[\"si-\",[30,2]]]],[12],[1,\"\\n        \"],[10,1],[14,0,\"ts-icon\"],[12],[1,\"\\n            \"],[10,\"i\"],[15,0,[29,[\"icon-\",[30,2]]]],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,1],[14,0,\"ts-text\"],[12],[1,[30,3]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13]],[\"@url\",\"@slag\",\"@name\"],false,[]]",
    "moduleName": "ams/components/header/social.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("ams/components/slider", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-75" data-loop="true">
      
          <Swiper
          @navigation = {{hash nextEl=".swiper-button-next" prevEl=".swiper-button-prev"}}
          class="swiper-container swiper-parent"
           as |swiper|>
          <swiper.slide>
              <div class="container">
                      <div class="slider-caption">
                          <div>
                              <h2>Welcome to Canvas</h2>
                              <p class="d-none d-sm-block">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on your own Canvas.</p>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide-bg" style="background-image: url('assets/images/slider/2-4063fd772818eafdbd6f30b876e0f0ac.jpg'); background-position: center top;"></div>
          </swiper.slide>
          <swiper.slide>
              <div class="container">
                      <div class="slider-caption slider-caption-right">
                          <div>
                              <h2>Beautifully Flexible</h2>
                              <p class="d-none d-sm-block">Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Powerful Layout with Responsive functionality that can be adapted to any screen size.</p>
                          </div>
                      </div>
                  </div>
                  {{#if this.showVideo}}
                      <Slider::Video/>
                  {{else}}
                      <div class="video-placeholder" style="background-image: url(assets/images/videos/1-21240afabfac3775484ba497804a8881.jpg);"></div>
                  {{/if}}
                  
          </swiper.slide>
          <swiper.slide>
              <div class="container">
                      <div class="slider-caption">
                          <div>
                              <h2>Premium Constructions</h2>
                              <p class="d-none d-sm-block">You'll be surprised to see the Final Results of your Creation &amp; would crave for more.</p>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide-bg" style="background-image: url('assets/images/slider/1-30d8b38eb6ef9557ee37a94674906503.jpg'); background-position: center bottom;"></div>
          </swiper.slide>
          <swiper.navigation>
              <div class="slider-arrow-left swiper-button-prev"><i class="icon-angle-left"></i></div>
              <div class="slider-arrow-right swiper-button-next"><i class="icon-angle-right"></i></div>
          </swiper.navigation>
          <swiper.scrollbar />
      </Swiper>
  
  </section>
  
  */
  {
    "id": "WTryfcPC",
    "block": "[[[10,\"section\"],[14,1,\"slider\"],[14,0,\"slider-element slider-parallax swiper_wrapper min-vh-75\"],[14,\"data-loop\",\"true\"],[12],[1,\"\\n    \\n        \"],[8,[39,0],[[24,0,\"swiper-container swiper-parent\"]],[[\"@navigation\"],[[28,[37,1],null,[[\"nextEl\",\"prevEl\"],[\".swiper-button-next\",\".swiper-button-prev\"]]]]],[[\"default\"],[[[[1,\"\\n        \"],[8,[30,1,[\"slide\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"slider-caption\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"\\n                            \"],[10,\"h2\"],[12],[1,\"Welcome to Canvas\"],[13],[1,\"\\n                            \"],[10,2],[14,0,\"d-none d-sm-block\"],[12],[1,\"Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on your own Canvas.\"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"swiper-slide-bg\"],[14,5,\"background-image: url('assets/images/slider/2-4063fd772818eafdbd6f30b876e0f0ac.jpg'); background-position: center top;\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"slide\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"slider-caption slider-caption-right\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"\\n                            \"],[10,\"h2\"],[12],[1,\"Beautifully Flexible\"],[13],[1,\"\\n                            \"],[10,2],[14,0,\"d-none d-sm-block\"],[12],[1,\"Looks beautiful & ultra-sharp on Retina Screen Displays. Powerful Layout with Responsive functionality that can be adapted to any screen size.\"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n\"],[41,[30,0,[\"showVideo\"]],[[[1,\"                    \"],[8,[39,3],null,null,null],[1,\"\\n\"]],[]],[[[1,\"                    \"],[10,0],[14,0,\"video-placeholder\"],[14,5,\"background-image: url(assets/images/videos/1-21240afabfac3775484ba497804a8881.jpg);\"],[12],[13],[1,\"\\n\"]],[]]],[1,\"                \\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"slide\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n                    \"],[10,0],[14,0,\"slider-caption\"],[12],[1,\"\\n                        \"],[10,0],[12],[1,\"\\n                            \"],[10,\"h2\"],[12],[1,\"Premium Constructions\"],[13],[1,\"\\n                            \"],[10,2],[14,0,\"d-none d-sm-block\"],[12],[1,\"You'll be surprised to see the Final Results of your Creation & would crave for more.\"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,0],[14,0,\"swiper-slide-bg\"],[14,5,\"background-image: url('assets/images/slider/1-30d8b38eb6ef9557ee37a94674906503.jpg'); background-position: center bottom;\"],[12],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"navigation\"]],null,null,[[\"default\"],[[[[1,\"\\n            \"],[10,0],[14,0,\"slider-arrow-left swiper-button-prev\"],[12],[10,\"i\"],[14,0,\"icon-angle-left\"],[12],[13],[13],[1,\"\\n            \"],[10,0],[14,0,\"slider-arrow-right swiper-button-next\"],[12],[10,\"i\"],[14,0,\"icon-angle-right\"],[12],[13],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n        \"],[8,[30,1,[\"scrollbar\"]],null,null,null],[1,\"\\n    \"]],[1]]]]],[1,\"\\n\\n\"],[13],[1,\"\\n\"]],[\"swiper\"],false,[\"swiper\",\"hash\",\"if\",\"slider/video\"]]",
    "moduleName": "ams/components/slider.hbs",
    "isStrictMode": false
  });
  let SliderComponent = (_dec = (0, _object.computed)('media.isDeviceXs', 'media.isDeviceSm'), (_class = class SliderComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "media", _descriptor, this);
    }
    get showVideo() {
      return !(this.media.isDeviceXs | this.media.isDeviceSm);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "media", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "showVideo", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "showVideo"), _class.prototype)), _class));
  _exports.default = SliderComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SliderComponent);
});
;define("ams/components/slider/video", ["exports", "@ember/component", "@ember/template-factory"], function (_exports, _component, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <video id="slide-video" poster="assets/images/videos/1-21240afabfac3775484ba497804a8881.jpg" preload="auto" loop autoplay muted>
      <source src='assets/images/videos/1.webm' type='video/webm' />
      <source src='assets/images/videos/1.mp4' type='video/mp4' />
  </video>
  <div class="video-overlay" style="background-color: rgba(0,0,0,0.1);"></div>
  
  */
  {
    "id": "RdKFh1Cg",
    "block": "[[[10,\"video\"],[14,1,\"slide-video\"],[14,\"poster\",\"assets/images/videos/1-21240afabfac3775484ba497804a8881.jpg\"],[14,\"preload\",\"auto\"],[14,\"loop\",\"\"],[14,\"autoplay\",\"\"],[14,\"muted\",\"\"],[12],[1,\"\\n    \"],[10,\"source\"],[14,\"src\",\"assets/images/videos/1.webm\"],[14,4,\"video/webm\"],[12],[13],[1,\"\\n    \"],[10,\"source\"],[14,\"src\",\"assets/images/videos/1.mp4\"],[14,4,\"video/mp4\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"video-overlay\"],[14,5,\"background-color: rgba(0,0,0,0.1);\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ams/components/slider/video.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, _component.default.extend({
    classNames: ['video-wrap'],
    didInsertElement() {
      this._super(...arguments);
      let video = this.element.children[0];
      video.muted = true;
    }
  }));
  _exports.default = _default;
});
;define("ams/components/swiper", ["exports", "ember-swiper7/components/swiper"], function (_exports, _swiper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _swiper.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper"eaimeta@70e063a35619d71f
});
;define("ams/components/swiper/content", ["exports", "ember-swiper7/components/swiper/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper/content"eaimeta@70e063a35619d71f
});
;define("ams/components/swiper/navigation", ["exports", "ember-swiper7/components/swiper/navigation"], function (_exports, _navigation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _navigation.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper/navigation"eaimeta@70e063a35619d71f
});
;define("ams/components/swiper/pagination", ["exports", "ember-swiper7/components/swiper/pagination"], function (_exports, _pagination) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pagination.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper/pagination"eaimeta@70e063a35619d71f
});
;define("ams/components/swiper/scrollbar", ["exports", "ember-swiper7/components/swiper/scrollbar"], function (_exports, _scrollbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollbar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper/scrollbar"eaimeta@70e063a35619d71f
});
;define("ams/components/swiper/slide", ["exports", "ember-swiper7/components/swiper/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/components/swiper/slide"eaimeta@70e063a35619d71f
});
;define("ams/components/top-bar", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "ams/data/socials"], function (_exports, _component, _templateFactory, _component2, _socials) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"ams/data/socials"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- Top Bar
  ============================================= --}}
  <div id="top-bar">
      <div class="container clearfix">
  
          <div class="row justify-content-between">
              <div class="col-12 col-md-auto">
  
                  {{!-- Top Social
                  ============================================= --}}
                  <ul id="top-social">
                      {{#each this.socials as |social|}}
                          <Header::Social @url={{social.url}} @slag={{social.slag}} @name={{social.name}}/>
                      {{/each}}
                  </ul>{{!-- #top-social end --}}
  
              </div>
  
              <div class="col-12 col-md-auto">
  
                  {{!-- Top Links
                  ============================================= --}}
                  <div class="top-links">
                      <ul class="top-links-container">
                          <Header::LocaleSwitcher/>
                          <li class="top-links-item"><a href="contact.html">{{t "header.contact"}}</a></li>
                      </ul>
                  </div>{{!-- .top-links end --}}
  
              </div>
          </div>
  
      </div>
  </div>{{!-- #top-bar end --}}
  */
  {
    "id": "n2mDPA3u",
    "block": "[[[10,0],[14,1,\"top-bar\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container clearfix\"],[12],[1,\"\\n\\n        \"],[10,0],[14,0,\"row justify-content-between\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"col-12 col-md-auto\"],[12],[1,\"\\n\\n\"],[1,\"                \"],[10,\"ul\"],[14,1,\"top-social\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"socials\"]]],null]],null],null,[[[1,\"                        \"],[8,[39,2],null,[[\"@url\",\"@slag\",\"@name\"],[[30,1,[\"url\"]],[30,1,[\"slag\"]],[30,1,[\"name\"]]]],null],[1,\"\\n\"]],[1]],null],[1,\"                \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"col-12 col-md-auto\"],[12],[1,\"\\n\\n\"],[1,\"                \"],[10,0],[14,0,\"top-links\"],[12],[1,\"\\n                    \"],[10,\"ul\"],[14,0,\"top-links-container\"],[12],[1,\"\\n                        \"],[8,[39,3],null,null,null],[1,\"\\n                        \"],[10,\"li\"],[14,0,\"top-links-item\"],[12],[10,3],[14,6,\"contact.html\"],[12],[1,[28,[35,4],[\"header.contact\"],null]],[13],[13],[1,\"\\n                    \"],[13],[1,\"\\n                \"],[13],[1,\"\\n\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n    \"],[13],[1,\"\\n\"],[13]],[\"social\"],false,[\"each\",\"-track-array\",\"header/social\",\"header/locale-switcher\",\"t\"]]",
    "moduleName": "ams/components/top-bar.hbs",
    "isStrictMode": false
  });
  class TopBarComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "socials", _socials.socials);
    }
  }
  _exports.default = TopBarComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TopBarComponent);
});
;define("ams/controllers/application", ["exports", "ember-swiper7/controllers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _application.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-swiper7/controllers/application"eaimeta@70e063a35619d71f
});
;define("ams/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("ams/data/socials", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.socials = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  const socials = [{
    url: '#',
    slag: 'facebook',
    name: 'Facebook'
  }, {
    url: '#',
    slag: 'twitter',
    name: 'Twitter'
  }, {
    url: '#',
    slag: 'instagram',
    name: 'Instagram'
  }];
  _exports.socials = socials;
});
;define("ams/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      compact: {
        notation: 'compact'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR'
      },
      USD: {
        style: 'currency',
        currency: 'USD'
      }
    }
  };
  _exports.default = _default;
});
;define("ams/helpers/app-version", ["exports", "@ember/component/helper", "ams/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ams/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("ams/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-contains"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-default"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-eq"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-form-horiz-input-class", ["exports", "ember-bootstrap/helpers/bs-form-horiz-input-class"], function (_exports, _bsFormHorizInputClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsFormHorizInputClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-form-horiz-input-class"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-form-horiz-offset-class", ["exports", "ember-bootstrap/helpers/bs-form-horiz-offset-class"], function (_exports, _bsFormHorizOffsetClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsFormHorizOffsetClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-form-horiz-offset-class"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-noop"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-size-class"eaimeta@70e063a35619d71f
});
;define("ams/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-bootstrap/helpers/bs-type-class"eaimeta@70e063a35619d71f
});
;define("ams/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("ams/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/did-insert"eaimeta@70e063a35619d71f
});
;define("ams/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/did-update"eaimeta@70e063a35619d71f
});
;define("ams/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-element-helper/helpers/element"eaimeta@70e063a35619d71f
});
;define("ams/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("ams/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-date"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-message"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-number"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-relative"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-time"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/helpers/media"eaimeta@70e063a35619d71f
});
;define("ams/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on-document"eaimeta@70e063a35619d71f
});
;define("ams/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on-window"eaimeta@70e063a35619d71f
});
;define("ams/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-helper/helpers/on"eaimeta@70e063a35619d71f
});
;define("ams/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("ams/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ams/helpers/popper-modifier", ["exports", "ember-popper-modifier/helpers/popper-modifier"], function (_exports, _popperModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "buildPopperModifier", {
    enumerable: true,
    get: function () {
      return _popperModifier.buildPopperModifier;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popperModifier.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/helpers/popper-modifier"eaimeta@70e063a35619d71f
});
;define("ams/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-ref-bucket/helpers/ref-to"eaimeta@70e063a35619d71f
});
;define("ams/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ams/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/t"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("ams/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-render-helpers/helpers/will-destroy"eaimeta@70e063a35619d71f
});
;define("ams/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ams/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ams/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ams/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("ams/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("ams/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ams/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/initializers/responsive"eaimeta@70e063a35619d71f
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("ams/initializers/load-bootstrap-config", ["exports", "ams/config/environment", "ember-bootstrap/config", "ember-bootstrap/version"], function (_exports, _environment, _config, _version) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ams/config/environment",0,"ember-bootstrap/config",0,"ember-bootstrap/version"eaimeta@70e063a35619d71f
  function initialize( /* container, application */
  ) {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
    (0, _version.registerLibrary)();
  }
  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("ams/initializers/responsive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    name: 'responsive',
    initialize(application) {
      application.inject('controller', 'media', 'service:media');
      application.inject('component', 'media', 'service:media');
    }
  };
  _exports.default = _default;
});
;define("ams/instance-initializers/animation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function initialize() {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
      let currTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (currTime - lastTime));
      let id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
  var _default = {
    initialize
  };
  _exports.default = _default;
});
;define("ams/instance-initializers/body-class", ["exports", "ember-body-class/instance-initializers/body-class"], function (_exports, _bodyClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bodyClass.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _bodyClass.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-body-class/instance-initializers/body-class"eaimeta@70e063a35619d71f
  /* eslint-disable prettier/prettier */
});
;define("ams/instance-initializers/clear-double-boot", ["exports", "ember-cli-fastboot/instance-initializers/clear-double-boot"], function (_exports, _clearDoubleBoot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clearDoubleBoot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/instance-initializers/clear-double-boot"eaimeta@70e063a35619d71f
});
;define("ams/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("ams/instance-initializers/head-browser", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    name: 'head-browser',
    initialize() {
      // do nothing!
      // this functionality has been moved into addon/components/head-layout.js
      // This is only here in order to not break existing addons relying on this, e.g. ember-page-title.
    }
  };
  _exports.default = _default;
});
;define("ams/locations/none", ["exports", "ember-cli-fastboot/locations/none"], function (_exports, _none) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _none.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/locations/none"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-ref-bucket/modifiers/create-ref"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap.js"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-focus-trap/modifiers/focus-trap.js"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/popper-tooltip", ["exports", "ember-popper-modifier/modifiers/popper-tooltip"], function (_exports, _popperTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popperTooltip.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/modifiers/popper-tooltip"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/popper", ["exports", "ember-popper-modifier/modifiers/popper"], function (_exports, _popper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _popper.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-popper-modifier/modifiers/popper"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-style-modifier/modifiers/style"eaimeta@70e063a35619d71f
});
;define("ams/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("ams/router", ["exports", "@ember/routing/router", "ams/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ams/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("ams/routes/application", ["exports", "@ember/routing/route", "@ember/service", "@glimmer/tracking", "@ember/application", "ember-body-class/util/bodyClass", "ams/util/set"], function (_exports, _route, _service, _tracking, _application, _bodyClass, _set) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/application",0,"ember-body-class/util/bodyClass",0,"ams/util/set"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationRoute = (_dec = (0, _service.service)('language-detector'), (_class = class ApplicationRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "intl", _descriptor, this);
      _initializerDefineProperty(this, "media", _descriptor2, this);
      _initializerDefineProperty(this, "languageDetector", _descriptor3, this);
      _initializerDefineProperty(this, "mediaClass", _descriptor4, this);
      _defineProperty(this, "classNames", ['stretched', this.media.matches]);
    }
    beforeModel() {
      super.beforeModel(...arguments);
      this.media.on('mediaChanged', () => this.changeBodyClass());
      let language = 'uk-ua';
      this.intl.locales.forEach(item => {
        if (this.languageDetector.isUserLanguage(item)) {
          language = item;
        }
      });
      this.intl.setLocale(language);
    }
    changeBodyClass() {
      const document = (0, _application.getOwner)(this).lookup('service:-document');
      const body = document.body;
      const allClasses = new Set(Object.keys(this.media.matchers));
      const currentClasses = new Set(this.media.matches);
      if (currentClasses.size) {
        const needRemove = (0, _set.difference)(allClasses, currentClasses);
        needRemove.forEach(classItem => {
          (0, _bodyClass.removeClass)(body, classItem);
        });
        currentClasses.forEach(classItem => {
          (0, _bodyClass.addClass)(body, classItem);
        });
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "intl", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "media", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "languageDetector", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "mediaClass", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});
;define("ams/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("ams/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("ams/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("ams/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("ams/services/fastboot", ["exports", "ember-cli-fastboot/services/fastboot"], function (_exports, _fastboot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fastboot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fastboot/services/fastboot"eaimeta@70e063a35619d71f
});
;define("ams/services/head-data", ["exports", "ember-cli-head/services/head-data"], function (_exports, _headData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headData.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-head/services/head-data"eaimeta@70e063a35619d71f
});
;define("ams/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/services/intl"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("ams/services/language-detector", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f
  const languageStorageKey = 'selected_language';
  const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  function escapeRegexp(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string');
    }
    return str.replace(matchOperatorsRe, '\\$&');
  }
  class LanguageDetectorService extends _service.default {
    getUserLanguage() {
      if (typeof localStorage !== 'undefined') {
        const language = localStorage.getItem(languageStorageKey);
        if (language) {
          return language;
        }
        return navigator.language;
      }
      return '';
    }
    saveChoice(language) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(languageStorageKey, language);
      }
    }
    isUserLanguage(language) {
      let userLang = this.getUserLanguage();
      let escapedString = escapeRegexp(userLang);
      let regexp = new RegExp(escapedString, 'i');
      return regexp.test(language);
    }
  }
  _exports.default = LanguageDetectorService;
});
;define("ams/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-responsive/services/media"eaimeta@70e063a35619d71f
  var _default = _media.default;
  _exports.default = _default;
});
;define("ams/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("ams/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{head-layout}}
  
  {{!-- Document Wrapper
  ============================================= --}}
  <div id="wrapper" class="clearfix">
  
  	<TopBar/>
  
  	<Header/>
  
  	<Slider/>
  	{{!-- Content
  	============================================= --}}
  	<section id="content">
  		<div class="content-wrap">
  
  			<div class="promo promo-light promo-full promo-uppercase p-5 bottommargin-lg header-stick">
  				<div class="container clearfix">
  					<div class="row align-items-center">
  						<div class="col-12 col-lg">
  							<h3 style="letter-spacing: 2px;">Start Planning your New Dream Home with us</h3>
  							<span>We strive to provide Our Customers with Top Notch Support to make their Theme</span>
  						</div>
  						<div class="col-12 col-lg-auto mt-4 mt-lg-0">
  							<a href="#" class="button button-large button-circle button-black m-0">Start Now</a>
  						</div>
  					</div>
  				</div>
  			</div>
  
  			<div class="container clearfix">
  
  				<div class="row justify-content-center col-mb-50">
  					<div class="col-sm-6 col-lg-4">
  						<div class="feature-box media-box">
  							<div class="fbox-media">
  								<img class="rounded" src="assets/images/services/1-5bcefa682b4209a37ffa312b632ff106.jpg" alt="Why choose Us?">
  							</div>
  							<div class="fbox-content px-0">
  								<h3>Skilled Professionals.<span class="subtitle">Your Property in Good Hands.</span></h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.</p>
  							</div>
  						</div>
  					</div>
  
  					<div class="col-sm-6 col-lg-4">
  						<div class="feature-box media-box">
  							<div class="fbox-media">
  								<img class="rounded" src="assets/images/services/1-5bcefa682b4209a37ffa312b632ff106.jpg" alt="Effective Planning">
  							</div>
  							<div class="fbox-content px-0">
  								<h3>Effective Planning.<span class="subtitle">Construction Process Organized.</span></h3>
  								<p>Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.</p>
  							</div>
  						</div>
  					</div>
  
  					<div class="col-sm-6 col-lg-4">
  						<div class="feature-box media-box">
  							<div class="fbox-media">
  								<img class="rounded" src="assets/images/services/2-b1144b2bc9b1b69f4c287b7902c74a9e.jpg" alt="Why choose Us?">
  							</div>
  							<div class="fbox-content px-0">
  								<h3>Risk Management.<span class="subtitle">We have got you Covered.</span></h3>
  								<p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum quo.</p>
  							</div>
  						</div>
  					</div>
  				</div>
  
  			</div>
  
  			<div class="section parallax dark" style="background-image: url('assets/images/slider/1-30d8b38eb6ef9557ee37a94674906503.jpg'); padding: 120px 0;"  data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
  
  				<div class="fslider testimonial testimonial-full" data-arrows="false" style="z-index: 2;">
  					<div class="flexslider">
  						<div class="slider-wrap">
  							<div class="slide">
  								<div class="testi-image">
  									<a href="#"><img src="assets/images/testimonials/3-bd4bd545d8c2b297cd1582dd1cf1f415.jpg" alt="Customer Testimonails"></a>
  								</div>
  								<div class="testi-content">
  									<p>Similique fugit repellendus expedita excepturi iure provident quia eaque. Repellendus, vero numquam?</p>
  									<div class="testi-meta">
  										Steve Jobs
  										<span>Apple Inc.</span>
  									</div>
  								</div>
  							</div>
  							<div class="slide">
  								<div class="testi-image">
  									<a href="#"><img src="assets/images/testimonials/2-443a47d46e03b7f7594519741a728d24.jpg" alt="Customer Testimonails"></a>
  								</div>
  								<div class="testi-content">
  									<p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
  									<div class="testi-meta">
  										Collis Ta'eed
  										<span>Envato Inc.</span>
  									</div>
  								</div>
  							</div>
  							<div class="slide">
  								<div class="testi-image">
  									<a href="#"><img src="assets/images/testimonials/1-55ed1bc7068e4ec37267cd6d95d2a1cc.jpg" alt="Customer Testimonails"></a>
  								</div>
  								<div class="testi-content">
  									<p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
  									<div class="testi-meta">
  										John Doe
  										<span>XYZ Inc.</span>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  
  				<div class="video-wrap" style="z-index: 1;">
  					<div class="video-overlay" style="background: rgba(241,128,82,0.9);"></div>
  				</div>
  
  			</div>
  
  			<div class="container">
  
  				<div class="row align-items-stretch col-mb-50">
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/building-7a021e7a32114dd6b6efdbe3f96a67de.png" alt="Concrete Developments"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Concrete Developments</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/bank-aceb389cc7c389b3c2c924b757211201.png" alt="Finance Assistance"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Finance Assistance</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/drawer-370844495d67fc10da4b41d7709d7175.png" alt="Interiorly Designed"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Interiorly Designed</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/paper-money-ac186d05ce9c34a7fbf5092fd2af7f65.png" alt="Cost Effective Solutions"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Cost Effective Solutions</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/traffic-cone-748f0b9e4b1e0fabe1eaaac2c3405e45.png" alt="Smart Builders"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Smart Builders</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  					<div class="col-lg-4 col-md-6">
  						<div class="feature-box fbox-plain">
  							<div class="fbox-icon">
  								<a href="#"><img src="assets/images/icons/paint-brush-ea1515e1b6934a51bd5677e4f2ee2d9e.png" alt="Quality Infrastructure"></a>
  							</div>
  							<div class="fbox-content">
  								<h3>Quality Infrastructure</h3>
  								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.</p>
  							</div>
  						</div>
  					</div>
  				</div>
  
  			</div>
  
  			<div class="section mb-0">
  				<h2 class="center mb-0 ls1">Some of Our Esteemed Projects:</h2>
  			</div>
  
  			<div id="portfolio" class="portfolio row grid-container no-gutters">
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-media pf-icons">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/1-3d2bac646f09966bfee1cfb2350e4227.jpg" alt="The Atmosphere">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3><a href="#">The Atmosphere</a></h3>
  							<span>Chicago, USA</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-illustrations">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/2-5bd02f37523922200b967487e848f928.jpg" alt="Wavelength Structure">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Wavelength Structure</h3>
  							<span>Madrid, Spain</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics pf-uielements">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/3-94d18748677b80524dfba331b2281b10.jpg" alt="Greenhouse Garden">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Greenhouse Garden</h3>
  							<span>Bali, Indonesia</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-icons pf-illustrations">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/4-60947721f6f98c8bf196431666bc6945.jpg" alt="Industrial Hub">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Industrial Hub</h3>
  							<span>Beijing, China</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-uielements pf-media">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/5-c225c930a8a71d10901691ffb8d725d8.jpg" alt="Corporate Headquarters">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Corporate Headquarters</h3>
  							<span>California, USA</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics pf-illustrations">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/6-5aba56b53df2f769f5721787e91b77fe.jpg" alt="Space Station">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Space Station</h3>
  							<span>Moscow, Russia</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-uielements pf-icons">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/7-8cfee8d4758e7f0f901328867daf200f.jpg" alt="Bent Architecture">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Bent Architecture</h3>
  							<span>Melbourne, Australia</span>
  						</div>
  					</div>
  				</article>
  
  				<article class="portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics">
  					<div class="grid-inner">
  						<div class="portfolio-image">
  							<img src="assets/images/projects/8-e82aa9657d3e54c92f8e66c9992b8c16.jpg" alt="Lakeview Center">
  							<div class="bg-overlay">
  								<div class="bg-overlay-content dark" data-hover-animate="fadeIn">
  									<a href="#" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-animate-out="zoomOut" data-hover-speed="350"><i class="icon-line-ellipsis"></i></a>
  								</div>
  								<div class="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
  							</div>
  						</div>
  						<div class="portfolio-desc">
  							<h3>Lakeview Center</h3>
  							<span>Auckland, New Zealand</span>
  						</div>
  					</div>
  				</article>
  
  			</div>
  
  			<a href="portfolio.html" class="button button-3d border-bottom-0 button-full center text-right bottommargin-lg font-weight-light font-primary" style="font-size: 26px;">
  				<div class="container clearfix">
  					Would you like to Build your Dream Home with Us? <strong>Enquire Here</strong> <i class="icon-angle-right" style="top:3px;"></i>
  				</div>
  			</a>
  
  			<div class="container topmargin-lg cleafix">
  
  				<div class="row col-mb-50">
  					<div class="col-md-8">
  
  						<div class="tabs tabs-justify mb-0 clearfix" id="construction-tabs">
  
  							<ul class="tab-nav clearfix">
  								<li><a href="#construction-tab-1">Why Us?</a></li>
  								<li><a href="#construction-tab-2">Work Ethic</a></li>
  								<li><a href="#construction-tab-3">Team</a></li>
  								<li><a href="#construction-tab-4">Locations</a></li>
  							</ul>
  
  							<div class="tab-container">
  
  								<div class="tab-content clearfix" id="construction-tab-1">
  									<p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
  									<div class="row col-mb-30">
  										<div class="col-sm-6 col-lg-3 text-center">
  											<div class="counter ls1 font-weight-semibold" style="color: #D2D2D2;"><span data-from="100" data-to="964" data-refresh-interval="50" data-speed="2000"></span></div>
  											<h5>Floors Built</h5>
  										</div>
  
  										<div class="col-sm-6 col-lg-3 text-center">
  											<div class="counter ls1 font-weight-semibold" style="color: #D2D2D2;"><span data-from="100" data-to="8514" data-refresh-interval="50" data-speed="2500"></span></div>
  											<h5>Employees</h5>
  										</div>
  
  										<div class="col-sm-6 col-lg-3 text-center">
  											<div class="counter ls1 font-weight-semibold" style="color: #D2D2D2;"><span data-from="100" data-to="458" data-refresh-interval="50" data-speed="3500"></span></div>
  											<h5>Happy Clients</h5>
  										</div>
  
  										<div class="col-sm-6 col-lg-3 text-center">
  											<div class="counter ls1 font-weight-semibold" style="color: #D2D2D2;"><span data-from="14" data-to="159" data-refresh-interval="15" data-speed="2700"></span></div>
  											<h5>Cities Served</h5>
  										</div>
  									</div>
  								</div>
  								<div class="tab-content clearfix" id="construction-tab-2">
  									<img src="assets/images/projects/3-94d18748677b80524dfba331b2281b10.jpg" width="260" alt="Image" class="img-thumbnail alignleft">
  									<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
  								</div>
  								<div class="tab-content clearfix" id="construction-tab-3">
  									<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
  									<div class="row col-mb-30">
  										<div class="col-sm-6 col-md-4">
  											<ul class="iconlist mb-0">
  												<li><i class="icon-ok"></i> 100% Assurance</li>
  												<li><i class="icon-ok"></i> Hard Working</li>
  												<li><i class="icon-ok"></i> Trustworthy</li>
  											</ul>
  										</div>
  										<div class="col-sm-6 col-md-4">
  											<ul class="iconlist mb-0">
  												<li><i class="icon-ok"></i> Intelligent</li>
  												<li><i class="icon-ok"></i> Always Curious</li>
  												<li><i class="icon-ok"></i> Perfectionists</li>
  											</ul>
  										</div>
  										<div class="col-sm-6 col-md-4">
  											<ul class="iconlist mb-0">
  												<li><i class="icon-ok"></i> Friendly &amp; Helpful</li>
  												<li><i class="icon-ok"></i> Accomodating Nature</li>
  												<li><i class="icon-ok"></i> Available 24x7</li>
  											</ul>
  										</div>
  									</div>
  								</div>
  								<div class="tab-content clearfix" id="construction-tab-4">
  
  									<div class="row col-mb-30">
  										<div class="col-md-7">
  											<p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor.</p>
  											<div class="row col-mb-30">
  												<div class="col-md-6">
  													<address>
  														<strong>Headquarters:</strong><br>
  														795 Folsom Ave, Suite 600<br>
  														San Francisco, CA 94107<br>
  													</address>
  												</div>
  												<div class="col-md-6">
  													<abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br>
  													<abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br>
  													<abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
  												</div>
  											</div>
  										</div>
  										<div class="col-md-5">
  											<img src="https://maps.googleapis.com/maps/api/staticmap?center=-37.814107,144.963280&zoom=12&markers=-37.814107,144.963280&size=300x180&key=AIzaSyCzkxzbEni5vR_Ugt1De8gBzrLX3236bnA" alt="Google Map" class="img-thumbnail">
  										</div>
  									</div>
  
  								</div>
  
  							</div>
  
  						</div>
  
  					</div>
  
  					<div class="col-md-4">
  
  						<div class="widget quick-contact-widget form-widget clearfix">
  							<h4>Quick Quotation Form</h4>
  							<div class="form-result"></div>
  							<form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" class="quick-contact-form mb-0">
  								<div class="form-process">
  									<div class="css3-spinner">
  										<div class="css3-spinner-scaler"></div>
  									</div>
  								</div>
  								<input type="text" class="required sm-form-control input-block-level" id="quick-contact-form-name" name="quick-contact-form-name" value="" placeholder="Full Name" />
  								<input type="text" class="required sm-form-control email input-block-level" id="quick-contact-form-email" name="quick-contact-form-email" value="" placeholder="Email Address" />
  								<textarea class="required sm-form-control input-block-level short-textarea" id="quick-contact-form-message" name="quick-contact-form-message" rows="4" cols="30" placeholder="Message"></textarea>
  								<input type="text" class="d-none" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" value="" />
  								<input type="hidden" name="prefix" value="quick-contact-form-">
  								<button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" class="button button-small button-3d m-0" value="submit">Send Email</button>
  							</form>
  
  						</div>
  
  					</div>
  				</div>
  
  				<div class="line"></div>
  
  				<div class="row col-mb-50">
  					<div class="col-md-5">
  						<h4>Clients Overview</h4>
  
  						<p>We prize our Clients more than everything else. We strive to provide Quality Services to all our Clients on a Priority Basis. You are invited to join our Clients List and enjoy our Services. <a href="#">See more...</a></p>
  
  						<ul class="clients-grid grid-2 grid-sm-3 mb-0">
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/1-8cb4608f36847bb49632f3125ddb4f9f.png" alt="Clients"></a></li>
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/2-b54032a199d68c3fb60aa2c713b71b56.png" alt="Clients"></a></li>
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/3-885e4f54584d07b16c0f3a374242e1c6.png" alt="Clients"></a></li>
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/4-0aaa2a3a55ee79b308a607c184403765.png" alt="Clients"></a></li>
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/5-b7b696c86e4b650181a476dca40ca3e5.png" alt="Clients"></a></li>
  							<li class="grid-item" style="padding: 20px;"><a href="#"><img src="assets/images/clients/6-33e0e10f3c745238921d59302d376902.png" alt="Clients"></a></li>
  						</ul>
  					</div>
  
  					<div class="col-md-7">
  						<h4>Recent News</h4>
  
  						<div id="oc-posts" class="owl-carousel posts-carousel carousel-widget posts-md" data-margin="20" data-nav="true" data-pagi="true" data-items-xs="1" data-items-xl="2">
  
  							<div class="oc-item">
  								<div class="entry">
  									<div class="entry-image">
  										<a href="assets/images/blog/5-fd8e7d6c0499a4ece2809c80bea2d668.jpg" data-lightbox="image"><img src="assets/images/blog/5-fd8e7d6c0499a4ece2809c80bea2d668.jpg" alt="Standard Post with Image"></a>
  									</div>
  									<div class="entry-title title-sm nott">
  										<h3><a href="#">Upcoming Projects in Australia</a></h3>
  									</div>
  									<div class="entry-meta">
  										<ul>
  											<li>10th Feb 2021</li>
  											<li><a href="#comments">13 Comments</a></li>
  										</ul>
  									</div>
  									<div class="entry-content">
  										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.</p>
  									</div>
  								</div>
  							</div>
  
  							<div class="oc-item">
  								<div class="entry">
  									<div class="entry-image">
  										<div class="fslider" data-arrows="false" data-lightbox="gallery">
  											<div class="flexslider">
  												<div class="slider-wrap">
  													<div class="slide"><a href="assets/images/blog/2-06fb958a318b9ad7792bc420c4fbb0ae.jpg" data-lightbox="gallery-item"><img src="assets/images/blog/2-06fb958a318b9ad7792bc420c4fbb0ae.jpg" alt="Standard Post with Gallery"></a></div>
  													<div class="slide"><a href="assets/images/blog/1-71dc4b6f04e5c153fa80e51e3e75eadb.jpg" data-lightbox="gallery-item"><img src="assets/images/blog/1-71dc4b6f04e5c153fa80e51e3e75eadb.jpg" alt="Standard Post with Gallery"></a></div>
  													<div class="slide"><a href="assets/images/blog/3-6176a7c1f4e21a2b4d29d9ce0c2de2c5.jpg" data-lightbox="gallery-item"><img src="assets/images/blog/3-6176a7c1f4e21a2b4d29d9ce0c2de2c5.jpg" alt="Standard Post with Gallery"></a></div>
  												</div>
  											</div>
  										</div>
  									</div>
  									<div class="entry-title title-sm nott">
  										<h3><a href="#">Real Estate just got a little more Expensive</a></h3>
  									</div>
  									<div class="entry-meta">
  										<ul>
  											<li>24th Feb 2021</li>
  											<li><a href="#comments">21 Comments</a></li>
  										</ul>
  									</div>
  									<div class="entry-content">
  										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem!</p>
  									</div>
  								</div>
  							</div>
  
  							<div class="oc-item">
  								<div class="entry">
  									<div class="entry-image">
  										<a href="assets/images/blog/4-4476e805f888a2507a1f1d562fe81805.jpg" data-lightbox="image"><img src="assets/images/blog/4-4476e805f888a2507a1f1d562fe81805.jpg" alt="Standard Post with Image"></a>
  									</div>
  									<div class="entry-title title-sm nott">
  										<h3><a href="#">Global Excellence Construction Award</a></h3>
  									</div>
  									<div class="entry-meta">
  										<ul>
  											<li>5th May 2021</li>
  											<li><a href="#comments">6 Comments</a></li>
  										</ul>
  									</div>
  									<div class="entry-content">
  										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.</p>
  									</div>
  								</div>
  							</div>
  
  						</div>
  
  					</div>
  				</div>
  
  			</div>
  
  			<div class="line topmargin-sm"></div>
  
  			<div class="section bg-transparent mt-0 p-0 footer-stick">
  				<div class="container clearfix">
  
  					<div class="row">
  						<div class="col-lg-7">
  							<img src="assets/images/services/bottom-trust-9f44959a4e61104f21a5f0c25d747299.jpg" alt="Bottom Trust">
  						</div>
  						<div class="col-lg-5 topmargin-sm">
  							<div class="heading-block border-bottom-0">
  								<h2>You're in Good Hands.</h2>
  								<span class="ls1">Five Points that define Our Reliability.</span>
  							</div>
  
  							<ul class="iconlist iconlist-large iconlist-color">
  								<li><i class="icon-ok"></i> Market Leader since 1915</li>
  								<li><i class="icon-ok"></i> Positive Results within Deadlines</li>
  								<li><i class="icon-ok"></i> 100% Reliability &amp; Guarantee</li>
  								<li><i class="icon-ok"></i> Dedicated Professional Team of 500+</li>
  								<li><i class="icon-ok"></i> Unmatched After Project Completion Support</li>
  							</ul>
  						</div>
  					</div>
  
  				</div>
  			</div>
  		</div>
  	</section>{{!-- #content end --}}
  
  	{{!-- Footer
  	============================================= --}}
  	<footer id="footer" class="dark">
  		<div class="container">
  
  			{{!-- Footer Widgets
  			============================================= --}}
  			<div class="footer-widgets-wrap">
  
  				<div class="row">
  					<div class="col-lg-9">
  						<div class="widget clearfix">
  
  							<img src="assets/images/footer-widget-logo-032eaec81a90892c3d06145e63f9ec6c.png" alt="Image" class="alignleft" style="margin-top: 8px; padding-right: 18px; border-right: 1px solid #4A4A4A;">
  
  							<p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.</p>
  
  							<div class="line" style="margin: 30px 0;"></div>
  
  							<div class="row col-mb-30">
  								<div class="col-lg-3 col-6 widget_links">
  									<ul>
  										<li><a href="#">Home</a></li>
  										<li><a href="#">About</a></li>
  										<li><a href="#">FAQs</a></li>
  										<li><a href="#">Support</a></li>
  										<li><a href="#">Contact</a></li>
  									</ul>
  								</div>
  
  								<div class="col-lg-3 col-6 widget_links">
  									<ul>
  										<li><a href="#">Shop</a></li>
  										<li><a href="#">Portfolio</a></li>
  										<li><a href="#">Blog</a></li>
  										<li><a href="#">Events</a></li>
  										<li><a href="#">Forums</a></li>
  									</ul>
  								</div>
  
  								<div class="col-lg-3 col-6 widget_links">
  									<ul>
  										<li><a href="#">Corporate</a></li>
  										<li><a href="#">Agency</a></li>
  										<li><a href="#">eCommerce</a></li>
  										<li><a href="#">Personal</a></li>
  										<li><a href="#">One Page</a></li>
  									</ul>
  								</div>
  
  								<div class="col-lg-3 col-6 widget_links">
  									<ul>
  										<li><a href="#">Restaurant</a></li>
  										<li><a href="#">Wedding</a></li>
  										<li><a href="#">App Showcase</a></li>
  										<li><a href="#">Magazine</a></li>
  										<li><a href="#">Landing Page</a></li>
  									</ul>
  								</div>
  							</div>
  
  						</div>
  					</div>
  
  					<div class="col-lg-3 mt-5 mt-lg-0">
  						<div class="widget clearfix">
  
  							<div class="row col-mb-30">
  								<div class="col-12">
  									<div class="footer-big-contacts">
  										<span>Call Us:</span>
  										(1) 22 55412474
  									</div>
  								</div>
  
  								<div class="col-12">
  									<div class="footer-big-contacts">
  										<span>Send an Email:</span>
  										info@canvas.com
  									</div>
  								</div>
  							</div>
  
  						</div>
  
  						<div class="widget subscribe-widget clearfix">
  
  							<div class="row col-mb-30">
  								<div class="col-12 col-sm-6 clearfix">
  									<a href="#" class="social-icon si-dark si-colored si-facebook mb-0" style="margin-right: 10px;">
  										<i class="icon-facebook"></i>
  										<i class="icon-facebook"></i>
  									</a>
  									<a href="#"><small style="display: block; margin-top: 3px;"><strong>Like us</strong><br>on Facebook</small></a>
  								</div>
  								<div class="col-12 col-sm-6 clearfix">
  									<a href="#" class="social-icon si-dark si-colored si-rss mb-0" style="margin-right: 10px;">
  										<i class="icon-rss"></i>
  										<i class="icon-rss"></i>
  									</a>
  									<a href="#"><small style="display: block; margin-top: 3px;"><strong>Subscribe</strong><br>to RSS Feeds</small></a>
  								</div>
  							</div>
  
  						</div>
  					</div>
  				</div>
  
  			</div>{{!-- .footer-widgets-wrap end --}}
  		</div>
  
  		{{!-- Copyrights
  		============================================= --}}
  		<div id="copyrights">
  			<div class="container">
  
  				<div class="row justify-content-between col-mb-30">
  					<div class="col-12 col-md-auto text-center text-md-left">
  						Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.<br>
  						<div class="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
  					</div>
  
  					<div class="col-12 col-md-auto text-center text-md-right">
  						<div class="copyrights-menu copyright-links clearfix">
  							<a href="#">Home</a>/<a href="#">About Us</a>/<a href="#">Team</a>/<a href="#">Clients</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
  						</div>
  					</div>
  				</div>
  
  			</div>
  		</div>{{!-- #copyrights end --}}
  	</footer>{{!-- #footer end --}}
  
  </div>{{!-- #wrapper end --}}
  
  {{go-to-top}}
  
  {{outlet}}
  */
  {
    "id": "4uRTAY5J",
    "block": "[[[1,[34,0]],[1,\"\\n\\n\"],[10,0],[14,1,\"wrapper\"],[14,0,\"clearfix\"],[12],[1,\"\\n\\n\\t\"],[8,[39,1],null,null,null],[1,\"\\n\\n\\t\"],[8,[39,2],null,null,null],[1,\"\\n\\n\\t\"],[8,[39,3],null,null,null],[1,\"\\n\"],[1,\"\\t\"],[10,\"section\"],[14,1,\"content\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"content-wrap\"],[12],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"promo promo-light promo-full promo-uppercase p-5 bottommargin-lg header-stick\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row align-items-center\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-lg\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[14,5,\"letter-spacing: 2px;\"],[12],[1,\"Start Planning your New Dream Home with us\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"We strive to provide Our Customers with Top Notch Support to make their Theme\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-lg-auto mt-4 mt-lg-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"button button-large button-circle button-black m-0\"],[12],[1,\"Start Now\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"container clearfix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row justify-content-center col-mb-50\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box media-box\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-media\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,0,\"rounded\"],[14,\"src\",\"assets/images/services/1-5bcefa682b4209a37ffa312b632ff106.jpg\"],[14,\"alt\",\"Why choose Us?\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content px-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Skilled Professionals.\"],[10,1],[14,0,\"subtitle\"],[12],[1,\"Your Property in Good Hands.\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box media-box\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-media\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,0,\"rounded\"],[14,\"src\",\"assets/images/services/1-5bcefa682b4209a37ffa312b632ff106.jpg\"],[14,\"alt\",\"Effective Planning\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content px-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Effective Planning.\"],[10,1],[14,0,\"subtitle\"],[12],[1,\"Construction Process Organized.\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box media-box\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-media\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,0,\"rounded\"],[14,\"src\",\"assets/images/services/2-b1144b2bc9b1b69f4c287b7902c74a9e.jpg\"],[14,\"alt\",\"Why choose Us?\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content px-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Risk Management.\"],[10,1],[14,0,\"subtitle\"],[12],[1,\"We have got you Covered.\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum quo.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"section parallax dark\"],[14,5,\"background-image: url('assets/images/slider/1-30d8b38eb6ef9557ee37a94674906503.jpg'); padding: 120px 0;\"],[14,\"data-bottom-top\",\"background-position:0px 300px;\"],[14,\"data-top-bottom\",\"background-position:0px -300px;\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"fslider testimonial testimonial-full\"],[14,\"data-arrows\",\"false\"],[14,5,\"z-index: 2;\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"flexslider\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slider-wrap\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/testimonials/3-bd4bd545d8c2b297cd1582dd1cf1f415.jpg\"],[14,\"alt\",\"Customer Testimonails\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Similique fugit repellendus expedita excepturi iure provident quia eaque. Repellendus, vero numquam?\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tSteve Jobs\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Apple Inc.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/testimonials/2-443a47d46e03b7f7594519741a728d24.jpg\"],[14,\"alt\",\"Customer Testimonails\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tCollis Ta'eed\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Envato Inc.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/testimonials/1-55ed1bc7068e4ec37267cd6d95d2a1cc.jpg\"],[14,\"alt\",\"Customer Testimonails\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"testi-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tJohn Doe\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"XYZ Inc.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"video-wrap\"],[14,5,\"z-index: 1;\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"video-overlay\"],[14,5,\"background: rgba(241,128,82,0.9);\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row align-items-stretch col-mb-50\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/building-7a021e7a32114dd6b6efdbe3f96a67de.png\"],[14,\"alt\",\"Concrete Developments\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Concrete Developments\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/bank-aceb389cc7c389b3c2c924b757211201.png\"],[14,\"alt\",\"Finance Assistance\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Finance Assistance\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/drawer-370844495d67fc10da4b41d7709d7175.png\"],[14,\"alt\",\"Interiorly Designed\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Interiorly Designed\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/paper-money-ac186d05ce9c34a7fbf5092fd2af7f65.png\"],[14,\"alt\",\"Cost Effective Solutions\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Cost Effective Solutions\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/traffic-cone-748f0b9e4b1e0fabe1eaaac2c3405e45.png\"],[14,\"alt\",\"Smart Builders\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Smart Builders\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-4 col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"feature-box fbox-plain\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/icons/paint-brush-ea1515e1b6934a51bd5677e4f2ee2d9e.png\"],[14,\"alt\",\"Quality Infrastructure\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fbox-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Quality Infrastructure\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minima, facere distinctio placeat.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"section mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"h2\"],[14,0,\"center mb-0 ls1\"],[12],[1,\"Some of Our Esteemed Projects:\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,1,\"portfolio\"],[14,0,\"portfolio row grid-container no-gutters\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-media pf-icons\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/1-3d2bac646f09966bfee1cfb2350e4227.jpg\"],[14,\"alt\",\"The Atmosphere\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"The Atmosphere\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Chicago, USA\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-illustrations\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/2-5bd02f37523922200b967487e848f928.jpg\"],[14,\"alt\",\"Wavelength Structure\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Wavelength Structure\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Madrid, Spain\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics pf-uielements\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/3-94d18748677b80524dfba331b2281b10.jpg\"],[14,\"alt\",\"Greenhouse Garden\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Greenhouse Garden\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Bali, Indonesia\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-icons pf-illustrations\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/4-60947721f6f98c8bf196431666bc6945.jpg\"],[14,\"alt\",\"Industrial Hub\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Industrial Hub\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Beijing, China\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-uielements pf-media\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/5-c225c930a8a71d10901691ffb8d725d8.jpg\"],[14,\"alt\",\"Corporate Headquarters\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Corporate Headquarters\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"California, USA\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics pf-illustrations\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/6-5aba56b53df2f769f5721787e91b77fe.jpg\"],[14,\"alt\",\"Space Station\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Space Station\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Moscow, Russia\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-uielements pf-icons\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/7-8cfee8d4758e7f0f901328867daf200f.jpg\"],[14,\"alt\",\"Bent Architecture\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Bent Architecture\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Melbourne, Australia\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,\"article\"],[14,0,\"portfolio-item col-12 col-sm-6 col-md-4 col-lg-3 pf-graphics\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"grid-inner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/8-e82aa9657d3e54c92f8e66c9992b8c16.jpg\"],[14,\"alt\",\"Lakeview Center\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-content dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"overlay-trigger-icon bg-light text-dark\"],[14,\"data-hover-animate\",\"zoomIn\"],[14,\"data-hover-animate-out\",\"zoomOut\"],[14,\"data-hover-speed\",\"350\"],[12],[10,\"i\"],[14,0,\"icon-line-ellipsis\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"bg-overlay-bg dark\"],[14,\"data-hover-animate\",\"fadeIn\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"portfolio-desc\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[1,\"Lakeview Center\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Auckland, New Zealand\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,3],[14,6,\"portfolio.html\"],[14,0,\"button button-3d border-bottom-0 button-full center text-right bottommargin-lg font-weight-light font-primary\"],[14,5,\"font-size: 26px;\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\tWould you like to Build your Dream Home with Us? \"],[10,\"strong\"],[12],[1,\"Enquire Here\"],[13],[1,\" \"],[10,\"i\"],[14,0,\"icon-angle-right\"],[14,5,\"top:3px;\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"container topmargin-lg cleafix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-50\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-8\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tabs tabs-justify mb-0 clearfix\"],[14,1,\"construction-tabs\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"tab-nav clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#construction-tab-1\"],[12],[1,\"Why Us?\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#construction-tab-2\"],[12],[1,\"Work Ethic\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#construction-tab-3\"],[12],[1,\"Team\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#construction-tab-4\"],[12],[1,\"Locations\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tab-container\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tab-content clearfix\"],[14,1,\"construction-tab-1\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-3 text-center\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"counter ls1 font-weight-semibold\"],[14,5,\"color: #D2D2D2;\"],[12],[10,1],[14,\"data-from\",\"100\"],[14,\"data-to\",\"964\"],[14,\"data-refresh-interval\",\"50\"],[14,\"data-speed\",\"2000\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h5\"],[12],[1,\"Floors Built\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-3 text-center\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"counter ls1 font-weight-semibold\"],[14,5,\"color: #D2D2D2;\"],[12],[10,1],[14,\"data-from\",\"100\"],[14,\"data-to\",\"8514\"],[14,\"data-refresh-interval\",\"50\"],[14,\"data-speed\",\"2500\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h5\"],[12],[1,\"Employees\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-3 text-center\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"counter ls1 font-weight-semibold\"],[14,5,\"color: #D2D2D2;\"],[12],[10,1],[14,\"data-from\",\"100\"],[14,\"data-to\",\"458\"],[14,\"data-refresh-interval\",\"50\"],[14,\"data-speed\",\"3500\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h5\"],[12],[1,\"Happy Clients\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-lg-3 text-center\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"counter ls1 font-weight-semibold\"],[14,5,\"color: #D2D2D2;\"],[12],[10,1],[14,\"data-from\",\"14\"],[14,\"data-to\",\"159\"],[14,\"data-refresh-interval\",\"15\"],[14,\"data-speed\",\"2700\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h5\"],[12],[1,\"Cities Served\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tab-content clearfix\"],[14,1,\"construction-tab-2\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/projects/3-94d18748677b80524dfba331b2281b10.jpg\"],[14,\"width\",\"260\"],[14,\"alt\",\"Image\"],[14,0,\"img-thumbnail alignleft\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tab-content clearfix\"],[14,1,\"construction-tab-3\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-md-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"iconlist mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" 100% Assurance\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Hard Working\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Trustworthy\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-md-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"iconlist mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Intelligent\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Always Curious\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Perfectionists\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-sm-6 col-md-4\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"iconlist mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Friendly & Helpful\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Accomodating Nature\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Available 24x7\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"tab-content clearfix\"],[14,1,\"construction-tab-4\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"address\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"strong\"],[12],[1,\"Headquarters:\"],[13],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t795 Folsom Ave, Suite 600\"],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tSan Francisco, CA 94107\"],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-6\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"abbr\"],[14,\"title\",\"Phone Number\"],[12],[10,\"strong\"],[12],[1,\"Phone:\"],[13],[13],[1,\" (1) 8547 632521\"],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"abbr\"],[14,\"title\",\"Fax\"],[12],[10,\"strong\"],[12],[1,\"Fax:\"],[13],[13],[1,\" (1) 11 4752 1433\"],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"abbr\"],[14,\"title\",\"Email Address\"],[12],[10,\"strong\"],[12],[1,\"Email:\"],[13],[13],[1,\" info@canvas.com\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"https://maps.googleapis.com/maps/api/staticmap?center=-37.814107,144.963280&zoom=12&markers=-37.814107,144.963280&size=300x180&key=AIzaSyCzkxzbEni5vR_Ugt1De8gBzrLX3236bnA\"],[14,\"alt\",\"Google Map\"],[14,0,\"img-thumbnail\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"widget quick-contact-widget form-widget clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h4\"],[12],[1,\"Quick Quotation Form\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-result\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"form\"],[14,1,\"quick-contact-form\"],[14,3,\"quick-contact-form\"],[14,\"action\",\"include/form.php\"],[14,\"method\",\"post\"],[14,0,\"quick-contact-form mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"form-process\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"css3-spinner\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"css3-spinner-scaler\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"required sm-form-control input-block-level\"],[14,1,\"quick-contact-form-name\"],[14,3,\"quick-contact-form-name\"],[14,2,\"\"],[14,\"placeholder\",\"Full Name\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"required sm-form-control email input-block-level\"],[14,1,\"quick-contact-form-email\"],[14,3,\"quick-contact-form-email\"],[14,2,\"\"],[14,\"placeholder\",\"Email Address\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"textarea\"],[14,0,\"required sm-form-control input-block-level short-textarea\"],[14,1,\"quick-contact-form-message\"],[14,3,\"quick-contact-form-message\"],[14,\"rows\",\"4\"],[14,\"cols\",\"30\"],[14,\"placeholder\",\"Message\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,0,\"d-none\"],[14,1,\"quick-contact-form-botcheck\"],[14,3,\"quick-contact-form-botcheck\"],[14,2,\"\"],[14,4,\"text\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,3,\"prefix\"],[14,2,\"quick-contact-form-\"],[14,4,\"hidden\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,1,\"quick-contact-form-submit\"],[14,3,\"quick-contact-form-submit\"],[14,0,\"button button-small button-3d m-0\"],[14,2,\"submit\"],[14,4,\"submit\"],[12],[1,\"Send Email\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"line\"],[12],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-50\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"h4\"],[12],[1,\"Clients Overview\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"We prize our Clients more than everything else. We strive to provide Quality Services to all our Clients on a Priority Basis. You are invited to join our Clients List and enjoy our Services. \"],[10,3],[14,6,\"#\"],[12],[1,\"See more...\"],[13],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"clients-grid grid-2 grid-sm-3 mb-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/1-8cb4608f36847bb49632f3125ddb4f9f.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/2-b54032a199d68c3fb60aa2c713b71b56.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/3-885e4f54584d07b16c0f3a374242e1c6.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/4-0aaa2a3a55ee79b308a607c184403765.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/5-b7b696c86e4b650181a476dca40ca3e5.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"grid-item\"],[14,5,\"padding: 20px;\"],[12],[10,3],[14,6,\"#\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/clients/6-33e0e10f3c745238921d59302d376902.png\"],[14,\"alt\",\"Clients\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-md-7\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"h4\"],[12],[1,\"Recent News\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,1,\"oc-posts\"],[14,0,\"owl-carousel posts-carousel carousel-widget posts-md\"],[14,\"data-margin\",\"20\"],[14,\"data-nav\",\"true\"],[14,\"data-pagi\",\"true\"],[14,\"data-items-xs\",\"1\"],[14,\"data-items-xl\",\"2\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"oc-item\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"assets/images/blog/5-fd8e7d6c0499a4ece2809c80bea2d668.jpg\"],[14,\"data-lightbox\",\"image\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/blog/5-fd8e7d6c0499a4ece2809c80bea2d668.jpg\"],[14,\"alt\",\"Standard Post with Image\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-title title-sm nott\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Upcoming Projects in Australia\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"10th Feb 2021\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#comments\"],[12],[1,\"13 Comments\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"oc-item\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"fslider\"],[14,\"data-arrows\",\"false\"],[14,\"data-lightbox\",\"gallery\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"flexslider\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slider-wrap\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[10,3],[14,6,\"assets/images/blog/2-06fb958a318b9ad7792bc420c4fbb0ae.jpg\"],[14,\"data-lightbox\",\"gallery-item\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/blog/2-06fb958a318b9ad7792bc420c4fbb0ae.jpg\"],[14,\"alt\",\"Standard Post with Gallery\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[10,3],[14,6,\"assets/images/blog/1-71dc4b6f04e5c153fa80e51e3e75eadb.jpg\"],[14,\"data-lightbox\",\"gallery-item\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/blog/1-71dc4b6f04e5c153fa80e51e3e75eadb.jpg\"],[14,\"alt\",\"Standard Post with Gallery\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"slide\"],[12],[10,3],[14,6,\"assets/images/blog/3-6176a7c1f4e21a2b4d29d9ce0c2de2c5.jpg\"],[14,\"data-lightbox\",\"gallery-item\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/blog/3-6176a7c1f4e21a2b4d29d9ce0c2de2c5.jpg\"],[14,\"alt\",\"Standard Post with Gallery\"],[12],[13],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-title title-sm nott\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Real Estate just got a little more Expensive\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"24th Feb 2021\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#comments\"],[12],[1,\"21 Comments\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem!\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"oc-item\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-image\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"assets/images/blog/4-4476e805f888a2507a1f1d562fe81805.jpg\"],[14,\"data-lightbox\",\"image\"],[12],[10,\"img\"],[14,\"src\",\"assets/images/blog/4-4476e805f888a2507a1f1d562fe81805.jpg\"],[14,\"alt\",\"Standard Post with Image\"],[12],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-title title-sm nott\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h3\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Global Excellence Construction Award\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-meta\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[1,\"5th May 2021\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#comments\"],[12],[1,\"6 Comments\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"entry-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"line topmargin-sm\"],[12],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,0,\"section bg-transparent mt-0 p-0 footer-stick\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"container clearfix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-7\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/services/bottom-trust-9f44959a4e61104f21a5f0c25d747299.jpg\"],[14,\"alt\",\"Bottom Trust\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-5 topmargin-sm\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"heading-block border-bottom-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[1,\"You're in Good Hands.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"ls1\"],[12],[1,\"Five Points that define Our Reliability.\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"iconlist iconlist-large iconlist-color\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Market Leader since 1915\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Positive Results within Deadlines\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" 100% Reliability & Guarantee\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Dedicated Professional Team of 500+\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"i\"],[14,0,\"icon-ok\"],[12],[13],[1,\" Unmatched After Project Completion Support\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\n\"],[1,\"\\t\"],[10,\"footer\"],[14,1,\"footer\"],[14,0,\"dark\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\n\"],[1,\"\\t\\t\\t\"],[10,0],[14,0,\"footer-widgets-wrap\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-9\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"widget clearfix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"assets/images/footer-widget-logo-032eaec81a90892c3d06145e63f9ec6c.png\"],[14,\"alt\",\"Image\"],[14,0,\"alignleft\"],[14,5,\"margin-top: 8px; padding-right: 18px; border-right: 1px solid #4A4A4A;\"],[12],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[1,\"We believe in \"],[10,\"strong\"],[12],[1,\"Simple\"],[13],[1,\", \"],[10,\"strong\"],[12],[1,\"Creative\"],[13],[1,\" & \"],[10,\"strong\"],[12],[1,\"Flexible\"],[13],[1,\" Design Standards with a Retina & Responsive Approach. Browse the amazing Features this template offers.\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"line\"],[14,5,\"margin: 30px 0;\"],[12],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-3 col-6 widget_links\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Home\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"About\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"FAQs\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Support\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Contact\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-3 col-6 widget_links\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Shop\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Portfolio\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Blog\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Events\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Forums\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-3 col-6 widget_links\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Corporate\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Agency\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"eCommerce\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Personal\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"One Page\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-3 col-6 widget_links\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Restaurant\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Wedding\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"App Showcase\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Magazine\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Landing Page\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-lg-3 mt-5 mt-lg-0\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"widget clearfix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"footer-big-contacts\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Call Us:\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(1) 22 55412474\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"footer-big-contacts\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[12],[1,\"Send an Email:\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinfo@canvas.com\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"widget subscribe-widget clearfix\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"row col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-sm-6 clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"social-icon si-dark si-colored si-facebook mb-0\"],[14,5,\"margin-right: 10px;\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-facebook\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-facebook\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"small\"],[14,5,\"display: block; margin-top: 3px;\"],[12],[10,\"strong\"],[12],[1,\"Like us\"],[13],[10,\"br\"],[12],[13],[1,\"on Facebook\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-sm-6 clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"social-icon si-dark si-colored si-rss mb-0\"],[14,5,\"margin-right: 10px;\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-rss\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"icon-rss\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[10,\"small\"],[14,5,\"display: block; margin-top: 3px;\"],[12],[10,\"strong\"],[12],[1,\"Subscribe\"],[13],[10,\"br\"],[12],[13],[1,\"to RSS Feeds\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\n\"],[1,\"\\t\\t\"],[10,0],[14,1,\"copyrights\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"row justify-content-between col-mb-30\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-md-auto text-center text-md-left\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\tCopyrights © 2020 All Rights Reserved by Canvas Inc.\"],[10,\"br\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"copyright-links\"],[12],[10,3],[14,6,\"#\"],[12],[1,\"Terms of Use\"],[13],[1,\" / \"],[10,3],[14,6,\"#\"],[12],[1,\"Privacy Policy\"],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"col-12 col-md-auto text-center text-md-right\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"copyrights-menu copyright-links clearfix\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[12],[1,\"Home\"],[13],[1,\"/\"],[10,3],[14,6,\"#\"],[12],[1,\"About Us\"],[13],[1,\"/\"],[10,3],[14,6,\"#\"],[12],[1,\"Team\"],[13],[1,\"/\"],[10,3],[14,6,\"#\"],[12],[1,\"Clients\"],[13],[1,\"/\"],[10,3],[14,6,\"#\"],[12],[1,\"FAQs\"],[13],[1,\"/\"],[10,3],[14,6,\"#\"],[12],[1,\"Contact\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[1,[34,4]],[1,\"\\n\\n\"],[46,[28,[37,6],null,null],null,null,null]],[],false,[\"head-layout\",\"top-bar\",\"header\",\"slider\",\"go-to-top\",\"component\",\"-outlet\"]]",
    "moduleName": "ams/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ams/templates/head", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    
  */
  {
    "id": "9izoTbDv",
    "block": "[[],[],false,[]]",
    "moduleName": "ams/templates/head.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ams/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    
  */
  {
    "id": "UmofyXiW",
    "block": "[[],[],false,[]]",
    "moduleName": "ams/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("ams/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ams/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ams/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ams/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ams/util/set", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.difference = difference;
  _exports.intersection = intersection;
  _exports.isSuperset = isSuperset;
  _exports.symmetricDifference = symmetricDifference;
  _exports.union = union;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function isSuperset(set, subset) {
    for (const elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  }
  function union(setA, setB) {
    const _union = new Set(setA);
    for (const elem of setB) {
      _union.add(elem);
    }
    return _union;
  }
  function intersection(setA, setB) {
    const _intersection = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }
  function symmetricDifference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
      if (_difference.has(elem)) {
        _difference.delete(elem);
      } else {
        _difference.add(elem);
      }
    }
    return _difference;
  }
  function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }
});
;define("ams/utils/intl/missing-message", ["exports", "ember-intl/-private/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/-private/utils/missing-message"eaimeta@70e063a35619d71f
});
;

;define('ams/config/environment', [], function() {
  if (typeof FastBoot !== 'undefined') {
return FastBoot.config('ams');
} else {
var prefix = 'ams';try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

}
});

;
if (typeof FastBoot === 'undefined') {
  if (!runningTests) {
    require('ams/app')['default'].create({"name":"ams","version":"0.0.0+9606d048"});
  }
}

