import { Component, OnInit, signal } from '@angular/core';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { PhotoPost } from './models/photo-post.model';

@Component({
  selector: 'app-root',
  imports: [
    PhotoPostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  photoPost! : PhotoPost

  ngOnInit(): void {
    this.photoPost = new PhotoPost(
      'Amanite mouche', 
      'Le plus beau champignon !', 
      'https://cdn.pixabay.com/photo/2014/11/04/08/13/fly-agaric-516281_1280.jpg', 
      new Date(), 
      10);
  }
}
