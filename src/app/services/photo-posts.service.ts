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
            .withLocation('Champignonnière des Carrières (EVECQUEMONT)'),
        
        new PhotoPost(
            'Pleurote en huître (Pleurotus eryngii)',
            'Champignon comestible souvent cultivé, ici dans son environnement naturel.',
            'https://c.pxhere.com/photos/5b/6c/tree_fungi_beech_forest_tree_mushrooms-766857.jpg!d',
            new Date('2024-10-08'),
            155
        ),
        new PhotoPost(
            'Giroles',
            'Un champignon très apprécié pour sa saveur délicate, souvent utilisé dans la cuisine gastronomique.',
            'https://cdn.pixabay.com/photo/2023/09/11/08/37/mushrooms-8246346_1280.jpg',
            new Date('2024-10-15'),
            175
        ),
        new PhotoPost(
            'Macropore forestier',
            'Un assortiment de champignons forestiers avec diversité de formes.',
            'https://c.pxhere.com/photos/b2/4b/mushrooms_summer_nature-576133.jpg!d',
            new Date('2024-09-25'),
            142
        )
    ];

    getPhotoPosts(): PhotoPost[] {
        return [...this.photoPosts];
    }

    getPhotoPostById(photoPostId: string): PhotoPost {
        const foundPhotoPost = this.photoPosts.find(faceSnap => faceSnap.id === photoPostId);
        if (!foundPhotoPost) {
        throw new Error('PhotoPost not found!');
        }
        return foundPhotoPost;
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