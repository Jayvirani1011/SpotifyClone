import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsModuleRoutingModule } from './artists-module-routing.module';
import { ArtistsComponent } from './artists.component';
import { MaterialUiModule } from '../material-ui.module';


@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsModuleRoutingModule,
    MaterialUiModule
  ]
})
export class ArtistsModuleModule { }
