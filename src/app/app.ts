import { Component, signal } from '@angular/core';
import { PhotoPost } from './photo-post/photo-post';

@Component({
  selector: 'app-root',
  imports: [
    PhotoPost
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
