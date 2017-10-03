import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configurator/t-modelselection/q-timber', 'Integration | Component | configurator/t modelselection/q timber', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configurator/t-modelselection/q-timber}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configurator/t-modelselection/q-timber}}
      template block text
    {{/configurator/t-modelselection/q-timber}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
