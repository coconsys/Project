// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutUsComponent } from './about-us/about-us.component';
import { NewPostHomeComponent } from './add-new-post/new-post-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostHomeComponent } from './post/post-home.component';
import { WrongRouterComponent } from './wrong-router/wrong-router.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: "posts", component: PostHomeComponent },
  { path: "add-post", component: NewPostHomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: '**', component: WrongRouterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
