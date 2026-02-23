import { Component } from '@angular/core';
import { PhotoPostsService } from '../services/photo-posts.service';
import { PhotoPost } from '../models/photo-post.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-post-grid',
  imports: [
    RouterModule
  ],
  templateUrl: './photo-post-grid.component.html',
  styleUrl: './photo-post-grid.component.scss',
})
export class PhotoPostGridComponent {

  photoPosts!: PhotoPost[];
  
    constructor(private photoPostsService: PhotoPostsService) {}
  
    ngOnInit(): void {
  
      this.photoPosts = this.photoPostsService.getPhotoPosts();

    }

}
