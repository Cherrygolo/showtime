import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-post',
  imports: [],
  templateUrl: './photo-post.component.html',
  styleUrl: './photo-post.component.scss',
})
export class PhotoPostComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  likes!: number;
  imageUrl!: string;
  userHasLiked!: boolean;

  ngOnInit(): void {
    this.title = 'Amanite mouche';
    this.description = 'Le plus beau champignon !';
    this.createdAt = new Date();
    this.likes = 5;
    this.userHasLiked = false;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2014/11/04/08/13/fly-agaric-516281_1280.jpg';
  }

  onLikeButtonClick() : void {
    this.userHasLiked = !this.userHasLiked;
    this.likes += this.userHasLiked ? 1 : -1;
  }

  get likeButtonText(): string {
    return this.userHasLiked ? '❤️' : '🩶';
  }
}
