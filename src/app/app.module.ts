import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component'


const appRoutes: Routes = [
  { path: ''  , component: BookListComponent },
  { path: 'products'  , component: ProductListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
