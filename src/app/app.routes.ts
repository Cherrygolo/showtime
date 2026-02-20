import { Routes } from '@angular/router';
import { PhotoPostListComponent } from './photo-post-list/photo-post-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'photoposts', component: PhotoPostListComponent },
    { path: '', component: LandingPageComponent }
];
