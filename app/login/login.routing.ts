import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSectionComponent } from './login-section.component';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginSectionComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
