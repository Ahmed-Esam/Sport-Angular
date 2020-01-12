import { ContentComponent } from './Home/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './Home/news/news.component';
import { SearchComponent } from './Home/search/search.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: 'search/:name', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
