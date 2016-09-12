import { Route } from '@angular/router';
import { LegalComponent } from './legal.component';

export const legalRoutes: Route[] = [
  {
    path: 'terms',
    component: LegalComponent
  },
  {
    path: 'privacy',
    component: LegalComponent
  }
];
