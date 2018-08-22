import * as elements from 'typed-html';
import { TemplatePart } from './Index';

export interface FooterResolver {
    resolve(): Promise<string>;
}

export default class implements TemplatePart {
    constructor (private resolver: FooterResolver) {
    }

    public async body(): Promise<string> {
        return <div class="footer">{ await this.resolver.resolve() }</div>;
    }
}
