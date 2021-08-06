import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAdminTypeComponent } from './admin-type/add-edit-admin-type/add-edit-admin-type.component';
import { ShowAdminTypeComponent } from './admin-type/show-admin-type/show-admin-type.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/admintype', pathMatch: 'full' },
   {path:'showadmintype',component:ShowAdminTypeComponent},
  { path: 'admintype', component: AddEditAdminTypeComponent },
  { path: 'admintype/:id', component: AddEditAdminTypeComponent },
  // {
  //   path: 'admintype',
  //   component: AddEditAdminTypeComponent,
  //   //canActivate: [AuthGuard],
  //   children: [
  //     { path: 'new', component: AddEditAdminTypeComponent },
  //     {
  //       path: ':id',
  //       component: AddEditAdminTypeComponent,
  //       //resolve: [RecipesResolverService]
  //     },
  //     {
  //       path: ':id/edit',
  //       component: AddEditAdminTypeComponent,
  //      // resolve: [RecipesResolverService]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
