// import { Injectable } from '@angular/core';
import css from '!!raw-loader!./../../../../assets/summernote-chunk.js';
// @Injectable({
//   providedIn: 'root'
// })
export class LazyLoaderService {
  insertedElement?: HTMLElement;
  constructor() {
    this.loadTheme();
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  loadTheme() {
    // import(
    //   /* webpackChunkName: "[request]" */
    //   '../../../../assets/summernote-chunk.js'
    // )
    //   .then((s) => s.default)
    //   .then(this.insertToDom);
    this.insertToDom(css);
  }

  insertToDom = (content: string) => {
    const element = document.createElement('style');
    element.textContent = content;
    document.head.appendChild(element);

    if (this.insertedElement) this.insertedElement.remove();
    this.insertedElement = element;
  };
}
