import { Component, signal } from '@angular/core';
import { ImageViewerComponent } from './image-viewer/image-viewer';

@Component({
  selector: 'app-root',
  imports: [
    ImageViewerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
