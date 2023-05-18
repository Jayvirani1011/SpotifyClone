import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumModuleRoutingModule } from './album-module-routing.module';
import { AlbumsComponent } from './albums.component';
import { FormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui.module';


@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    AlbumModuleRoutingModule,
    MaterialUiModule,
    FormsModule
  ]
})
export class AlbumModuleModule { }
