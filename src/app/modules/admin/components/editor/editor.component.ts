import { Component, OnInit } from '@angular/core';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';

@Component({
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  config: SummernoteOptions;
  loaded = false;
  constructor() {
    this.config = {
      placeholder: '',
      tabsize: 2,
      // height: '200px',
      // uploadImagePath: '/api/upload',
      toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        [
          'font',
          [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'clear',
          ],
        ],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']],
      ],
      fontNames: [
        'Helvetica',
        'Arial',
        'Arial Black',
        'Comic Sans MS',
        'Courier New',
        'Roboto',
        'Times',
      ],
    };
  }

  loadStyle(/*styleName: string*/) {
    const head = document.getElementsByTagName('head')[0];

    // let themeLink = document.getElementById('summernote-lin') as HTMLLinkElement;

    // if (themeLink) {
    //   themeLink.href = styleName;
    // } else {
    const style = document.createElement('link');
    style.id = 'summernote-lazy';
    style.rel = 'stylesheet';
    // style.href =
    //   'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css';
    style.href = 'summernote.css';

    head.appendChild(style);
    // }
  }
  loadDynamicScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = window.document.createElement('script');
      scriptElement.src = 'summernote.js';

      scriptElement.onload = () => {
        resolve(undefined);
      };

      scriptElement.onerror = () => {
        reject();
      };

      window.document.body.appendChild(scriptElement);
    });
  }

  ngOnInit(): void {
    this.loadStyle();
    this.loadDynamicScript().then(
      (value) => {
        console.log('script loaded');
        this.loaded = true;
      },
      (reason) => {
        console.log('script not loaded');
      }
    );
  }
}
