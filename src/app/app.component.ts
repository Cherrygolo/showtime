import { Component, OnInit, signal } from '@angular/core';
import { PhotoPostListComponent } from './photo-post-list/photo-post-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    PhotoPostListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  
}
