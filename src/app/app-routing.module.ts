import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./home-module/home-module.module').then((m) => m.HomeModuleModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists-module/artists-module.module').then((m) => m.ArtistsModuleModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./album-module/album-module.module').then((m) => m.AlbumModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
