import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'toolbar-page', loadChildren: './toolbar-page/toolbar-page.module#ToolbarPagePageModule' },
  { path: 'tab2-page1', loadChildren: './tab2/tab2-page1/tab2-page1.module#Tab2Page1PageModule' },
  { path: 'tab2-page2', loadChildren: './tab2/tab2-page2/tab2-page2.module#Tab2Page2PageModule' },
  // { path: 'page1', loadChildren: './tab2/tab2-page1/page1/page1.module#Page1PageModule' },
  // { path: 'page2', loadChildren: './tab2/tab2-page1/page2/page2.module#Page2PageModule' },
  { path: 'page1', loadChildren: './tab2/tab2-page2/page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './tab2/tab2-page2/page2/page2.module#Page2PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
