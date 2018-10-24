export default Ember.HTMLBars.template({"id":"aiBa+CFc","block":"{\"symbols\":[\"dropdown\",\"virtualItems\",\"option\",\"term\",\"&default\",\"&inverse\"],\"statements\":[[4,\"basic-dropdown\",null,[[\"horizontalPosition\",\"destination\",\"initiallyOpened\",\"matchTriggerWidth\",\"calculatePosition\",\"onClose\",\"onOpen\",\"registerAPI\",\"renderInPlace\",\"verticalPosition\",\"disabled\",\"contentComponent\",\"triggerComponent\"],[[27,\"readonly\",[[23,[\"horizontalPosition\"]]],null],[27,\"readonly\",[[23,[\"destination\"]]],null],[27,\"readonly\",[[23,[\"initiallyOpened\"]]],null],[27,\"readonly\",[[23,[\"matchTriggerWidth\"]]],null],[27,\"readonly\",[[23,[\"calculatePosition\"]]],null],[27,\"action\",[[22,0,[]],\"onClose\"],null],[27,\"action\",[[22,0,[]],\"onOpen\"],null],[27,\"action\",[[22,0,[]],\"registerAPI\"],null],[27,\"readonly\",[[23,[\"renderInPlace\"]]],null],[27,\"readonly\",[[23,[\"verticalPosition\"]]],null],[27,\"readonly\",[[23,[\"disabled\"]]],null],[27,\"readonly\",[[23,[\"contentComponent\"]]],null],[27,\"readonly\",[[23,[\"triggerWrapperComponent\"]]],null]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"trigger\"]]],[[\"tagName\",\"ariaDescribedBy\",\"ariaInvalid\",\"ariaLabel\",\"ariaLabelledBy\",\"ariaRequired\",\"class\",\"onKeyDown\",\"onFocus\",\"onBlur\",\"onMouseDown\",\"tabindex\",\"label\",\"disabled\"],[\"md-autocomplete\",[27,\"readonly\",[[23,[\"ariaDescribedBy\"]]],null],[27,\"readonly\",[[23,[\"ariaInvalid\"]]],null],[27,\"readonly\",[[23,[\"ariaLabel\"]]],null],[27,\"readonly\",[[23,[\"ariaLabelledBy\"]]],null],[27,\"readonly\",[[23,[\"required\"]]],null],[27,\"readonly\",[[23,[\"concatenatedTriggerClasses\"]]],null],[27,\"action\",[[22,0,[]],\"onTriggerKeydown\"],null],[27,\"action\",[[22,0,[]],\"onTriggerFocus\"],null],[27,\"action\",[[22,0,[]],\"deactivate\"],null],[27,\"action\",[[22,0,[]],\"onTriggerMouseDown\"],null],-1,[27,\"readonly\",[[23,[\"label\"]]],null],[27,\"readonly\",[[23,[\"disabled\"]]],null]]],{\"statements\":[[4,\"component\",[[23,[\"triggerComponent\"]]],[[\"allowClear\",\"required\",\"passThru\",\"class\",\"flex\",\"disabled\",\"buildSelection\",\"extra\",\"isTouched\",\"listboxId\",\"onFocus\",\"activate\",\"onBlur\",\"onInput\",\"onClear\",\"placeholder\",\"onKeydown\",\"searchEnabled\",\"searchField\",\"validationErrorMessages\",\"select\",\"selectedItemComponent\",\"hideAllMessages\"],[[27,\"readonly\",[[23,[\"allowClear\"]]],null],[27,\"readonly\",[[23,[\"required\"]]],null],[27,\"readonly\",[[23,[\"passThru\"]]],null],\"layout-row\",[27,\"readonly\",[[23,[\"flex\"]]],null],[23,[\"disabled\"]],[27,\"readonly\",[[23,[\"buildSelection\"]]],null],[27,\"readonly\",[[23,[\"extra\"]]],null],[27,\"readonly\",[[23,[\"isTouched\"]]],null],[27,\"readonly\",[[23,[\"optionsId\"]]],null],[27,\"action\",[[22,0,[]],\"onFocus\"],null],[27,\"action\",[[22,0,[]],\"activate\"],null],[27,\"action\",[[22,0,[]],\"onBlur\"],null],[27,\"action\",[[22,0,[]],\"onInput\"],null],[27,\"readonly\",[[23,[\"onClear\"]]],null],[27,\"readonly\",[[23,[\"placeholder\"]]],null],[27,\"action\",[[22,0,[]],\"onKeydown\"],null],[27,\"readonly\",[[23,[\"searchEnabled\"]]],null],[27,\"readonly\",[[23,[\"searchField\"]]],null],[27,\"readonly\",[[23,[\"validationErrorMessages\"]]],null],[27,\"readonly\",[[23,[\"publicAPI\"]]],null],[27,\"readonly\",[[23,[\"selectedItemComponent\"]]],null],[27,\"readonly\",[[23,[\"hideAllMessages\"]]],null]]],{\"statements\":[[0,\"      \"],[14,5,[[23,[\"publicAPI\"]],[23,[\"selected\"]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\",\"select\"],[[27,\"readonly\",[[23,[\"concatenatedDropdownClasses\"]]],null],[27,\"readonly\",[[23,[\"publicAPI\"]]],null]]],{\"statements\":[[4,\"if\",[[23,[\"mustShowSearchMessage\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[23,[\"searchMessageComponent\"]]],[[\"searchMessage\",\"select\"],[[27,\"readonly\",[[23,[\"searchMessage\"]]],null],[27,\"readonly\",[[23,[\"publicAPI\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"mustShowNoMessages\"]]],null,{\"statements\":[[4,\"if\",[[24,6]],null,{\"statements\":[[0,\"        \"],[14,6],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"noMatchesMessage\"]]],null,{\"statements\":[[0,\"        \"],[7,\"ul\"],[11,\"class\",\"ember-power-select-options md-autocomplete-suggestions\"],[11,\"role\",\"listbox\"],[9],[0,\"\\n          \"],[7,\"li\"],[11,\"class\",\"ember-power-select-option ember-power-select-option--no-matches-message\"],[11,\"role\",\"option\"],[3,\"action\",[[22,0,[]],\"onCreate\",[23,[\"publicAPI\",\"searchText\"]]]],[9],[0,\"\\n            \"],[1,[21,\"noMatchesMessage\"],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"component\",[[23,[\"optionsComponent\"]]],[[\"class\",\"groupIndex\",\"loadingMessage\",\"id\",\"options\",\"optionsComponent\",\"select\"],[\"ember-power-select-options md-autocomplete-suggestions\",\"\",[27,\"readonly\",[[23,[\"loadingMessage\"]]],null],[27,\"readonly\",[[23,[\"optionsId\"]]],null],[27,\"readonly\",[[22,2,[]]],null],[27,\"readonly\",[[23,[\"optionsComponent\"]]],null],[27,\"readonly\",[[23,[\"publicAPI\"]]],null]]],{\"statements\":[[0,\"          \"],[14,5,[[22,3,[]],[22,4,[]]]],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"    \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}","meta":{"moduleName":"ember-paper/templates/components/paper-autocomplete.hbs"}});