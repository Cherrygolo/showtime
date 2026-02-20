import { Component, Input, OnInit } from '@angular/core';
import { PhotoPost } from '../models/photo-post.model';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { PhotoPostsService } from '../services/photo-posts.service';

@Component({
  selector: 'app-photo-post',
  imports: [
    NgStyle, NgClass, TitleCasePipe, DatePipe
  ],
  templateUrl: './photo-post.component.html',
  styleUrl: './photo-post.component.scss',
})
export class PhotoPostComponent implements OnInit {

  @Input() photoPost! : PhotoPost;
  userHasLiked!: boolean;

  constructor(private photoPostService: PhotoPostsService) {}

  ngOnInit(): void {
    this.userHasLiked = false;
  }

  onLikeButtonClick() : void {
    this.userHasLiked = !this.userHasLiked;
    this.userHasLiked ? this.like() : this.unLike();
  }

  get likeButtonText(): string {
    return this.userHasLiked ? '❤️' : '🩶';
  }

  like() {
    this.photoPostService.updatePhotoPostInteractionById(this.photoPost.id, 'like')
  }

  unLike() {
    this.photoPostService.updatePhotoPostInteractionById(this.photoPost.id, 'unlike')
  }
}
