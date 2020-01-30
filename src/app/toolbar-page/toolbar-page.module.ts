import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarPagePage } from './toolbar-page.page';
import { ToolbarComponent } from '../toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: ToolbarPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ToolbarPagePage,
    //ToolbarComponent
    ]
})
export class ToolbarPagePageModule {}
