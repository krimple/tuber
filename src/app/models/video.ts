import { Url } from 'url';
export class Video {
  constructor(public title: string, public description: string, public videoId: string, public imagePreview: Url) {}
}
