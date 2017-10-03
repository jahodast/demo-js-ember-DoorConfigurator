import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configurator/modelselection/q-model-group', 'Integration | Component | configurator/modelselection/q model group', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configurator/modelselection/q-model-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configurator/modelselection/q-model-group}}
      template block text
    {{/configurator/modelselection/q-model-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
