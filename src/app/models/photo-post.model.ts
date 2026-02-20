export class PhotoPost {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public likes: number ) {

        this.id = crypto.randomUUID().substring(0, 8);
    }
    
    addLike() : void {
        this.likes++;
    }

    removeLike() : void {
        this.likes--;
    }

    setLocation(location: string) {
        this.location = location;
    }

    withLocation(location: string) {
        this.location = location;
        return this;
    }
}