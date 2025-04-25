import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CasPratique1Component } from './pages/cas-pratique-1/cas-pratique-1.component';
import { CasPratique2Component } from './pages/cas-pratique-2/cas-pratique-2.component';
import { CasPratique3Component } from './pages/cas-pratique-3/cas-pratique-3.component';
import { CasPratique4Component } from './pages/cas-pratique-4/cas-pratique-4.component';
import { CasPratique5Component } from './pages/cas-pratique-5/cas-pratique-5.component';
import { CasPratique6Component } from './pages/cas-pratique-6/cas-pratique-6.component';
import { CiCdComponent } from './pages/ci-cd/ci-cd.component';
import { BonusComponent } from './pages/bonus/bonus.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RessourcesComponent } from './pages/ressources/ressources.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AccueilComponent,
  },
  {
    path: 'cas-pratique-1',
    component: CasPratique1Component,
  },
  {
    path: 'cas-pratique-2',
    component: CasPratique2Component,
  },
  {
    path: 'cas-pratique-3',
    component: CasPratique3Component,
  },
  {
    path: 'cas-pratique-4',
    component: CasPratique4Component,
  },
  {
    path: 'cas-pratique-5',
    component: CasPratique5Component,
  },
  {
    path: 'cas-pratique-6',
    component: CasPratique6Component,
  },
  {
    path: 'ci-cd',
    component: CiCdComponent,
  },
  {
    path: 'bonus',
    component: BonusComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'ressources',
    component: RessourcesComponent,
  },
  {
    path: 'a-propos',
    component: AProposComponent,
  },
];
