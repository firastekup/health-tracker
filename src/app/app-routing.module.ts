import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nutrition', pathMatch: 'full' },
  { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityPageModule) },
  { path: 'hydration', loadChildren: () => import('./hydration/hydration-routing.module').then(m => m.HydrationPageRoutingModule) },
  { path: 'sleep', loadChildren: () => import('./sleep/sleep-routing.module').then(m => m.SleepPageRoutingModule) },
  { path: 'nutrition', loadChildren: () => import('./nutrition/nutrition-routing.module').then(m => m.NutritionPageRoutingModule) },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
