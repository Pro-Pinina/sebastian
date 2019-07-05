import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { RegistroexcelentesComponent } from './registroexcelentes/registroexcelentes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroexcelentesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmazingTimePickerModule,
    BsDatepickerModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling:false,
      customClass:'modal-content',
      confirmButtonClass:'btn btn-primary',
      cancelButtonClass:'btn'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
