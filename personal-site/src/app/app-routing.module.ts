import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AntiCopyPasterComponent } from './projects/anticopypaster/anticopypaster.component';
import { BookFinderComponent } from './projects/bookfinder/bookfinder.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReadingComponent } from './reading/reading.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './writing/blog/blog.component';
import { DangerousTextsComponent } from './writing/dangerous-texts/dangerous-texts.component';
import { InvitationToABeheadingComponent } from './writing/dangerous-texts/invitation-to-a-beheading/invitation-to-a-beheading.component';
import { LolitaComponent } from './writing/dangerous-texts/lolita/lolita.component';
import { FilmCritiquesComponent } from './writing/film-critiques/film-critiques.component';
import { WritingComponent } from './writing/writing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'bookfinder', component: BookFinderComponent },
  { path: 'anticopypaster', component: AntiCopyPasterComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'writing/dangerous-texts', component: DangerousTextsComponent },
  { path: 'writing/dangerous-texts/invitation-to-a-beheading', component: InvitationToABeheadingComponent },
  { path: 'writing/dangerous-texts/lolita', component: LolitaComponent },
  { path: 'film-critiques', component: FilmCritiquesComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
