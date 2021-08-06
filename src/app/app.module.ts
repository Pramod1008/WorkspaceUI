import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTypeComponent } from './admin-type/admin-type.component';
import { ShowAdminTypeComponent } from './admin-type/show-admin-type/show-admin-type.component';
import { AddEditAdminTypeComponent } from './admin-type/add-edit-admin-type/add-edit-admin-type.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTypeService } from './Service/admin-type.service';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertComponent, AlertModule } from './_components';


@NgModule({
  declarations: [
    AppComponent,    
    AdminTypeComponent,
    ShowAdminTypeComponent,
    AddEditAdminTypeComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AlertModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot()
  ],
  providers: [    
    AdminTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
