export class Kard {
  title: string;
  subTitle: string;
  imageText: string;
  imageUrl: string;
  footer: string;
  
    constructor(title: string,
                subTitle: string,
                imageText: string,
                imageUrl: string,
                footer: string) {
        this.title = title;
        this.subTitle = subTitle;
        this.imageUrl = imageUrl;
        this.footer = footer;
    }
}
