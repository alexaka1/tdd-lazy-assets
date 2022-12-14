import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EditorComponent } from './components/editor/editor.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoaderService } from './services/lazy-loader.service';

@NgModule({
  declarations: [AdminComponent, EditorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxSummernoteModule,
    HttpClientModule,
  ],
  providers: [LazyLoaderService],
})
export class AdminModule {}
