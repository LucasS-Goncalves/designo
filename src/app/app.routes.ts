import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { GraphicDesignComponent } from './pages/graphic-design/graphic-design.component';
import { AppDesignComponent } from './pages/app-design/app-design.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'web-design', component: WebDesignComponent
  },
  {
    path: 'graphic-design', component: GraphicDesignComponent
  },
  {
    path: 'app-design', component: AppDesignComponent
  },
  {
    path: 'about', component: AboutComponent
  },
];
