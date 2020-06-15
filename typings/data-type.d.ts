
interface pathType {
}

interface largeType {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   path: pathType;
   size: number;
   width: number;
   height: number;
}

interface smallType {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   path: pathType;
   size: number;
   width: number;
   height: number;
}

interface mediumType {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   path: pathType;
   size: number;
   width: number;
   height: number;
}

interface thumbnailType {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   path: pathType;
   size: number;
   width: number;
   height: number;
}

interface formatsType {
   large: largeType;
   small: smallType;
   medium: mediumType;
   thumbnail: thumbnailType;
}

interface previewUrlType {
}

interface provider_metadataType {
}

interface imgItemType {
   id: number;
   name: string;
   alternativeText: string;
   caption: string;
   width: number;
   height: number;
   formats: formatsType;
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: previewUrlType;
   provider: string;
   provider_metadata: provider_metadataType;
   created_at: string;
   updated_at: string;
}

interface imageItemType {
   id: number;
   title: string;
   description: string;
   active: boolean;
   img: Array<imgItemType>;
}

interface descriptionItemType {
   id: number;
   title: string;
   detail: string;
}

interface rootElementItemType {
   id: number;
   name: string;
   productCatagoryType: string;
   created_at: string;
   updated_at: string;
   image: Array<imageItemType>;
   description: Array<descriptionItemType>;
}
