import { Component, Input, OnInit } from '@angular/core';
import { PhotoPost } from '../models/photo-post.model';

@Component({
  selector: 'app-photo-post',
  imports: [],
  templateUrl: './photo-post.component.html',
  styleUrl: './photo-post.component.scss',
})
export class PhotoPostComponent implements OnInit {

  @Input() photoPost! : PhotoPost;
  userHasLiked!: boolean;

  ngOnInit(): void {
    this.userHasLiked = false;
  }

  onLikeButtonClick() : void {
    this.userHasLiked = !this.userHasLiked;
    this.userHasLiked ? this.photoPost.addLike() : this.photoPost.removeLike();
  }

  get likeButtonText(): string {
    return this.userHasLiked ? '❤️' : '🩶';
  }
}
