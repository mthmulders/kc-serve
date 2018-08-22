import * as fs from 'mz/fs';

const debug = require('debug')('kc:plugins:footer');

const empty = Promise.resolve('');

export default class {
    constructor(private path?: string) {
    }

    async resolve(): Promise<string> {
        if (!this.path) {
            debug('No footer supplied');
            return empty;
        } else if (await fs.exists(this.path)) {
            const resolved = await fs.realpath(this.path);
            debug(`Using supplied footer ${resolved}`);
            return fs.readFile(this.path).then(_ => _.toString());
        } else {
            debug(`Non-existing footer (${this.path}) supplied`);
            return empty;
        }
    }
}
