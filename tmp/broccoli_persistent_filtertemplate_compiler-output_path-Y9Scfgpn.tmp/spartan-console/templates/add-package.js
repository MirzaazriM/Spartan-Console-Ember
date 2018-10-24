export default Ember.HTMLBars.template({"id":"4zzPQmHQ","block":"{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-package-component\",null,[[\"callSave\",\"tabName\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\",[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set package image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"plans\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package plans \"],[10],[0,\"\\n\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"nut\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"nutplans\",\"data\"]],[23,[\"selectedNutritionPlans\"]],\"add\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"wor\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"worplans\",\"data\"]],[23,[\"selectedWorkoutPlans\"]],\"add\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n    \"],[10],[0,\"\\n\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}","meta":{"moduleName":"spartan-console/templates/add-package.hbs"}});