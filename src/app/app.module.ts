import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductCardSliderComponent } from './common/product-card-slider/product-card-slider.component';
import { ProductCardListComponent } from './common/product-card-list/product-card-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { RandomizePipe } from './pipe/randomize.pipe';
import { CategoryPipe } from './pipe/category.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductCardSliderComponent,
    ProductCardListComponent,
    FilterPipe,
    RandomizePipe,
    CategoryPipe,
    FeaturedPipe,
    AdminComponent,
    DataEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
