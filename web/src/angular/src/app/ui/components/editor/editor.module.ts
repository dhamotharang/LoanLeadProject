import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {AceEditorModule} from "ng2-ace-editor";
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/theme-chrome'

@NgModule({
  declarations: [EditorComponent],
  exports: [
    EditorComponent,
  ],
  imports: [
    CommonModule,
    AceEditorModule
  ]
})
export class EditorModule {
}
