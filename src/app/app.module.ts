import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: ''  , component: HomeComponent },
  { path: 'list'  , component: ProductListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
