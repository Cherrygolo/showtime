import { Routes } from '@angular/router';
import { PhotoPostListComponent } from './photo-post-list/photo-post-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePhotoPostComponent } from './single-photo-post/single-photo-post.component';
import { PhotoPostGridComponent } from './photo-post-grid/photo-post-grid.component';

export const routes: Routes = [
    { path: 'photoposts', component: PhotoPostListComponent },
    { path: 'discover', component: PhotoPostGridComponent },
    { path: 'discover/:id', component: SinglePhotoPostComponent },
    { path: '', component: LandingPageComponent }
];
