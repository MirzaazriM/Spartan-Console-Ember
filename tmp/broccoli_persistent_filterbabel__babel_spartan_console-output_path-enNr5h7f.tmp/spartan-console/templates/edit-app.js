define("spartan-console/templates/edit-app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6zdfLUqf", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-apps-tab-component\",null,[[\"callSave\",\"tabName\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\",[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app basic info \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"identifier\",\"flex-50 paperInputs\",\"Identifier\",\"Enter identifier\",[23,[\"identifier\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"identifier\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Package container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"pack\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app packages \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"packages-list-component\",null,[[\"list\",\"appPackages\"],[[23,[\"model\",\"packagesList\",\"data\"]],[23,[\"appPackages\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Plans \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"plans\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package plans \"],[10],[0,\"\\n\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"nut\"],[11,\"class\",\"plansList\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\"],[[23,[\"model\",\"nutplans\",\"data\"]]]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"wor\"],[11,\"class\",\"plansList\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\"],[[23,[\"model\",\"worplans\",\"data\"]]]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Exercise container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"exer\"],[11,\"class\",\"tabContainer\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package exercises \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"exercise-list-component\",null,[[\"list\"],[[23,[\"model\",\"exercises\",\"data\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\"],[[23,[\"packageTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-app.hbs" } });
});