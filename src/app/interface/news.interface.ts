
export class news {
  title: string;
  publishedAtFormatted: string;
  mainImage:MainImage;
  content: Array<content>;


}

export class content {
  content: any;
  type:string



}
export class MainImage {
  imagesUrls:    ImagesUrls;
  isHasArticles: boolean;
  imageName:     string;
  description:   string;
  id:            number;
  createdAt:     string;
}

export class ImagesUrls {
  lowOriginal: string;
  inner:       string;
  bannerImage: string;
  full:        string;
  big:         string;
  swide:       string;
  med:         string;
  small:       string;
  thumb:       string;
}
