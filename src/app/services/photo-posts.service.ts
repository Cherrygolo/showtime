import { Injectable } from "@angular/core";
import { PhotoPost } from "../models/photo-post.model";
import { InteractionType } from "../models/interaction-type.type";

// Pour utiliser la classe comme un service
@Injectable({
    providedIn: 'root'
})
export class PhotoPostsService {

    private photoPosts: PhotoPost[] = [
      new PhotoPost(
        'Amanite mouche', 
        'Le plus beau champignon qu\'il ne faut surtout pas manger !', 
        'https://cdn.pixabay.com/photo/2014/11/04/08/13/fly-agaric-516281_1280.jpg', 
        new Date(), 
        50),
      new PhotoPost(
        'Morille', 
        'Un champignon très savoureux dans une sauce.', 
        'https://cdn.pixabay.com/photo/2021/05/03/19/09/morels-6227065_1280.jpg', 
        new Date(), 
        111),
      new PhotoPost(
        'Champignon de paris', 
        'Le plus plus franchouillard des champignons !', 
        'https://cdn.pixabay.com/photo/2019/05/16/20/17/fungus-4208115_1280.jpg', 
        new Date(), 
        199)
        .withLocation('Champignonnière des Carrières (EVECQUEMONT)')
    ]

    getPhotoPosts(): PhotoPost[] {
        return [...this.photoPosts];
    }

    updatePhotoPostInteractionById(photoPostId: string, interactionType: InteractionType): void {
        const photoPost = this.photoPosts.find(p => p.id === photoPostId);
        if (!photoPost) {
            throw new Error('PhotoPost not found');
        }

        if (interactionType === 'like') {
            photoPost.addLike();
        } else if (interactionType === 'unlike') {
            photoPost.removeLike();
        }
    }

}