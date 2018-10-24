define("spartan-console/templates/components/recipe-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TrVFTDqU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"recipeTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"recipeThumbnail\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeTitle\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/recipe-item-component.hbs" } });
});