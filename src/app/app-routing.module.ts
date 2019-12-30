import { ContentComponent } from './Home/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './Home/news/news.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'news/:id', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
