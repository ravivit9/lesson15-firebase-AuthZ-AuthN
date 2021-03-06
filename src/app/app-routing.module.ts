import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: 'welcome',
    loadChildren: './modules/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'books',
    loadChildren: './modules/books/books.module#BooksModule'
  },
  {
    path: 'kitchensink',
    loadChildren: './modules/kitchensink/kitchensink.module#KitchensinkModule'
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
