import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

const userRoutes: Routes = [
  { path: 'user',           component: UserComponent },
  { path: 'user/:username', component: UserDetailComponent },
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);