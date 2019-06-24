yarn init -y; 
yarn add jest html5-validator stylelint; 
touch .stylelintIgnore; 
touch .stylelintrc.json;
echo 'check_logic\npackage.json\nyarn-error.log' >> .stylelintIgnore;
echo '{ "rules": {"at-rule-no-unknown": true, "at-rule-semicolon-newline-after": "always", "block-no-empty": true, "block-opening-brace-newline-after": "always", "color-no-invalid-hex": true, "comment-no-empty": true, "declaration-block-no-duplicate-properties": true, "declaration-block-no-shorthand-property-overrides": true, "font-family-no-duplicate-names": true, "font-family-no-missing-generic-family-keyword": true, "no-duplicate-selectors": true, "no-empty-source": true, "no-extra-semicolons": true, "color-no-invalid-hex": true } }' >> .stylelintrc.json
