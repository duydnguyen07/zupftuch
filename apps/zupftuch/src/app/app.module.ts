import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from "@angular/cdk/table";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    CdkTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
