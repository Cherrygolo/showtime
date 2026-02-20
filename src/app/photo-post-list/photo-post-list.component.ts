import { Component, OnInit } from '@angular/core';
import { PhotoPost } from '../models/photo-post.model';
import { PhotoPostComponent } from '../photo-post/photo-post.component';
import { PhotoPostsService } from '../services/photo-posts.service';

@Component({
  selector: 'app-photo-post-list',
  imports: [
    PhotoPostComponent
  ],
  templateUrl: './photo-post-list.component.html',
  styleUrl: './photo-post-list.component.scss',
})
export class PhotoPostListComponent implements OnInit {

  photoPosts!: PhotoPost[];

  constructor(private photoPostsService: PhotoPostsService) {}

  ngOnInit(): void {

    this.photoPosts = this.photoPostsService.getPhotoPosts();

  }

}
