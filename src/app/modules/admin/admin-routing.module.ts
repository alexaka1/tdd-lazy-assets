import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'editor', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
