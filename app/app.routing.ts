import { Routes, RouterModule } from '@angular/router';

import { EnterEmailComponent } from './enter-email.component';
import { HeroFormComponent } from './hero-form.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/enter-email',
    pathMatch: 'full'
  },
  {
    path: 'enter-email',
    component: EnterEmailComponent
  },
  {
    path: 'hero-form',
    component:HeroFormComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
