import { expect } from 'chai';
import template from '../../src/template/CustomCss';

describe('Css template', () => {
    it('includes custom css', async () => {
        let css = ['custom.css'];
        let resolver = { resolve: () => Promise.resolve(css) };
        expect(await new template(resolver, 'css').head()).to.match(/<link rel="stylesheet" href="css\/custom.css">/m);
    });

    it('includes multiple css', async () => {
        let css = ['custom.css', 'another.css'];
        let resolver = { resolve: () => Promise.resolve(css) };
        expect(await new template(resolver, 'css').head()).to.match(/.*custom.css".*\n.*another.css">/m);
    });

    it('matches css dir with template', async () => {
        let css = ['custom.css'];
        let resolver = { resolve: () => Promise.resolve(css) };
        expect(await new template(resolver, 'adsfasdf').head()).to.contain('href="adsfasdf/custom.css"');
    });
});