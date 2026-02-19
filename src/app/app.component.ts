import { Component, signal } from '@angular/core';
import { PhotoPostComponent } from './photo-post/photo-post.component';

@Component({
  selector: 'app-root',
  imports: [
    PhotoPostComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
