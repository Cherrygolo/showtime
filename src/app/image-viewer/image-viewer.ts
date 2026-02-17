import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  imports: [],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss',
})
export class ImageViewerComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Amanite mouche';
    this.description = 'Le plus beau champignon !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2014/11/04/08/13/fly-agaric-516281_1280.jpg';
  }
}
