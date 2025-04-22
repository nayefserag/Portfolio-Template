import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent , data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortofolioComponent} ,
  { path: 'skills', component: SkillsComponent},
  { path: '**', redirectTo: '', data: { animation: 'AboutPage' } },
];