export default Ember.HTMLBars.template({"id":"eRQ3eNoU","block":"{\"symbols\":[\"tag\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"tagsPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"tags\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"tag-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\",\"editText\",\"callOpenEditTagDialog\"],[[22,1,[]],[23,[\"currentTagId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]],[23,[\"editText\"]],[27,\"action\",[[22,0,[]],\"openEditTagDialog\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"openAddTagDialog\"]],[9],[0,\"\\n    \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set tag dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"tagDialog\"],[11,\"class\",\"dialogWrapper tagDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"tag-dialog-component\",null,[[\"languages\",\"heading\",\"callAddTag\",\"callEditTag\"],[[23,[\"model\",\"languages\",\"data\"]],[23,[\"dialogHeading\"]],[27,\"action\",[[22,0,[]],\"addTag\"],null],[27,\"action\",[[22,0,[]],\"editTag\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}","meta":{"moduleName":"spartan-console/templates/tags.hbs"}});