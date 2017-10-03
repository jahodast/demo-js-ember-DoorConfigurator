import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configurator/modelselection/q-glass', 'Integration | Component | configurator/modelselection/q glass', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configurator/modelselection/q-glass}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configurator/modelselection/q-glass}}
      template block text
    {{/configurator/modelselection/q-glass}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
