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
  photoPosts!: PhotoPost[];

  ngOnInit(): void {

    this.photoPosts = [
      new PhotoPost(
        'Amanite mouche', 
        'Le plus beau champignon qu\'il ne faut surtout pas manger !', 
        'https://cdn.pixabay.com/photo/2014/11/04/08/13/fly-agaric-516281_1280.jpg', 
        new Date(), 
        10),
      new PhotoPost(
        'Morille', 
        'Un champignon très savoureux dans une sauce.', 
        'https://cdn.pixabay.com/photo/2021/05/03/19/09/morels-6227065_1280.jpg', 
        new Date(), 
        7),
      new PhotoPost(
        'Champignon de paris', 
        'Le plus plus franchouillard des champignons !', 
        'https://cdn.pixabay.com/photo/2019/05/16/20/17/fungus-4208115_1280.jpg', 
        new Date(), 
        22)
    ]

    this.photoPosts[2].setLocation('Champignonnière des Carrières (EVECQUEMONT)')
  }
}
