import { expect } from 'chai';
import template from '../../src/template/Footer';

describe('Footer template', () => {
    const text = 'my magic footer';
    const resolver = { resolve: () => Promise.resolve(text) };

    it('includes the resolved footer', async () => {
        const body = await new template(resolver).body();
        expect(body).to.eq(`<div class="footer">${text}</div>`);
    });
});