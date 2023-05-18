import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home.component';
import { MaterialUiModule } from '../material-ui.module';
import { DilogBoxComponent } from './dilog-box/dilog-box.component';


@NgModule({
  declarations: [
    HomeComponent,
    DilogBoxComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MaterialUiModule
  ]
})
export class HomeModuleModule { }
