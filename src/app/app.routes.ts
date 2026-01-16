import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/layouts/main-layout';
import { InicioComponent } from './pages/inicio/inicio';
import { QueEsComponent } from './pages/que-es/que-es';
import { GaleriaComponent } from './pages/galeria/galeria';
import { TalleresComponent } from './pages/talleres/talleres';
import { ContactoComponent } from './pages/contacto/contacto';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  
{
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome')
        .then(m => m.WelcomeComponent),
    data: { animation: 'Welcome' }
  },

 
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [

      {
        path: '',
        loadComponent: () =>
          import('./pages/inicio/inicio')
            .then(m => m.InicioComponent),
        data: { animation: 'Inicio' }
      },

      {
        path: 'que-es',
        loadComponent: () =>
          import('./pages/que-es/que-es')
            .then(m => m.QueEsComponent),
        data: { animation: 'QueEs' }
      },

      {
        path: 'galeria',
        loadComponent: () =>
          import('./pages/galeria/galeria')
            .then(m => m.GaleriaComponent),
        data: { animation: 'Galeria' }
      },

      {
        path: 'talleres',
        loadComponent: () =>
          import('./pages/talleres/talleres')
            .then(m => m.TalleresComponent),
        data: { animation: 'Talleres' }
      },

      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contacto/contacto')
            .then(m => m.ContactoComponent),
        data: { animation: 'Contacto' }
      }
    ]
  }
];