import { Component, Input, OnInit } from '@angular/core';
import { PhotoPost } from '../models/photo-post.model';
import { PhotoPostsService } from '../services/photo-posts.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PhotoPostComponent } from '../photo-post/photo-post.component';

@Component({
  selector: 'app-single-photo-post',
  imports: [
    PhotoPostComponent
],
  templateUrl: './single-photo-post.component.html',
  styleUrl: './single-photo-post.component.scss',
})
export class SinglePhotoPostComponent implements OnInit {

  @Input() photoPost! : PhotoPost;
  userHasLiked!: boolean;

  constructor(private photoPostsService: PhotoPostsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.getPhotoPost();
  }

  private getPhotoPost() {
    const photoPostId = this.route.snapshot.params['id'];
    try {
    this.photoPost = this.photoPostsService.getPhotoPostById(photoPostId);
    } catch (error) {
      console.error(error);
      // Redirection vers la page 404
      this.router.navigate(['/404']);
    }
  }

}
