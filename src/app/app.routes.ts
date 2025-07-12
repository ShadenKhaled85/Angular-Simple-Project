import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { StartframeowrkComponent } from './startframeowrk/startframeowrk.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full', title:'Home'},
  {path:'home', component:StartframeowrkComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'portfolio', component:  PortfolioComponent, title: 'Portfolio'},
  {path: 'contact', component: ContactComponent, title: 'Contact'},
  {path: '**', component: NotfoundComponent, title: 'Not Found'}
];
