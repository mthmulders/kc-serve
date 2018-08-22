import { expect } from 'chai';

import plugin from '../../src/plugins/Footer';

describe('Footer plugin', () => {
    describe('when no footer supplied', () => {
        it('should resolve to an empty body', async () => {
            const body = await new plugin().resolve();
            expect(body).to.eq('');
        });
    });

    describe('when non-existing footer supplied', () => {
        it('should resolve to an empty body', async () => {
            const body = await new plugin('file-does-not-exist.md').resolve();
            expect(body).to.eq('');
        });
    });

    describe('when existing footer supplied', () => {
        it('should resolve to a content of that file', async () => {
            const body = await new plugin('./test/test_data/footer.html').resolve();
            expect(body).to.eq('<img src="acme.png" alt="ACME Logo">\n<span>&copy; 2018 Acme Inc.</span>');
        });
    });

});