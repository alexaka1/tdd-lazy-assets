import { Component } from '@angular/core';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';

@Component({
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  config: SummernoteOptions;
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
}
