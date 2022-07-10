import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ItemComponent } from './components/item/item.component';
import { AppserviceService } from './service/appservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
