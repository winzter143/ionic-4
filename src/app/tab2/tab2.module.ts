import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SelectOptionComponent } from '../select-option/select-option.component';


const routes: Routes = [
  {
    path: '',
    component: Tab2Page, //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    children: [
      { 
        path: 'tab2-page1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./tab2-page1/tab2-page1.module').then(m => m.Tab2Page1PageModule)
          }
        ] 
        // loadChildren: './tab2-page1/tab2-page1.module#Tab2Page1PageModule' 
      },
      // {
      //   path: 'tab2-page2', 
      //   loadChildren: './tab2-page2/tab2-page2.module#Tab2Page2PageModule' },
    ]

  },
  // { path: 'tab2-page1', loadChildren: './tab2/tab2-page1/tab2-page1.module#Tab2Page1PageModule' },
  // { path: 'tab2-page2', loadChildren: './tab2/tab2-page2/tab2-page2.module#Tab2Page2PageModule' },
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    // RouterModule.forChild([{ path: '', component: Tab2Page }]),
  ],
   exports: [RouterModule],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    Tab2Page, 
    SelectOptionComponent,
    ToolbarComponent
  ]
})
export class Tab2PageModule {}
