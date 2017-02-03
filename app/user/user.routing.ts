import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSectionComponent } from './user-section.component';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

const userRoutes: Routes = [
  { 
    path: 'user',
    component: UserSectionComponent,
    children: [
      { path: '', component: UserComponent },
      { path: ':username', component: UserDetailComponent }
    ]
  }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);