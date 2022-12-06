import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello',
    pathMatch: 'full',
  },
  { path: 'hello', component: HelloComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
