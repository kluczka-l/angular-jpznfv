export class Kard {
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  footer: string;
  
    constructor(title: string,
                subTitle: string,
                description: string,
                imageUrl: string,
                footer: string) {
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.imageUrl = imageUrl;
        this.footer = footer;
    }
}