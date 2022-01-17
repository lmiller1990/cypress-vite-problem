import { mount } from '@cypress/vue'
import app from './App.vue'

it('works', () => {
	mount(app)
cy.contains('foo')
})
