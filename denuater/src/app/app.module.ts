import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EbayComponent } from './components/ebay/ebay.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';



import {ScrapeService} from './service/scrape.service';
import { InventarioComponent } from './components/ebay/inventario/inventario.component';
import { PedidosComponent } from './components/ebay/inventario/pedidos.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EbayComponent,
    NavbarComponent,
    InventarioComponent,
    PedidosComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
    
    
  ],
  providers: [ScrapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
