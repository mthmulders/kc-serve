import { Slide, SlideObject } from '../SlideObject';
import { TemplatePart } from './Index';
import FooterTemplate from './Footer';
import * as elements from 'typed-html';
import * as path from 'path';

export interface SlidesResolver {
    resolve(): Promise<SlideObject[]>;
}

export default class implements TemplatePart {
    constructor(private resolver: SlidesResolver, 
        private path: string, private footer: FooterTemplate) {
    }

    public async body(): Promise<string> {
      return <div class="reveal">
        <div class="slides">
          {await Promise.all((await this.resolver.resolve()).map(_ => {
            if (_.isFolder) {
              return <section>
                {_.slides.map(s => this.slideHtml(s, true))}
              </section>;
            } else {
              return this.slideHtml(_, false);
            }
          }))}
        </div>
        { await this.footer.body() }
      </div>;
    }

    slideHtml(slide: Slide, isNested: boolean): string {
        let data = path.posix.join(this.path, slide.name); // using posix to always have forward slashes as path separator.

        if (slide.isImage) {
            return <section><img src={data} class="stretch" /></section>;
        } else if (slide.isMarkdown) {
            if (isNested) {
              return <section data-markdown={data} data-separator="^---?$"></section>;
            } else {
              return <section data-markdown={data} data-separator="^---$" data-separator-vertical="^--$"></section>;
            }
        } else {
            return '<empty />';
        }
    }
}