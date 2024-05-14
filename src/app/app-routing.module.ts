import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,   
  },
  {
    path: 'About',
    component: AboutComponent ,   
  },
  {
    path: 'Services',
    component: ServicesComponent ,   
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent ,   
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent ,   
  },
  {
    path: 'case-Studies',
    component: CaseStudiesComponent ,   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
