import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  {
    path: 'pocetna',
    loadComponent: () => import('./projects/projects.component').then(c => c.ProjectsComponent),
  },
];
