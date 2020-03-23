import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';

import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ContactComponent } from './contact/contact.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'add', component: ProductAddComponent},
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ProductListComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'manager/edit/:id', component: ProductEditComponent},
  { path: 'manager/:id', component: ProductDetailComponent}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
