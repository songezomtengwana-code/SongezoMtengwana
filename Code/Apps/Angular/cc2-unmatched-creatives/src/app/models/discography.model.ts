import { DiscographyLinks } from './discography-links.model'

export class Discography {
  public imgurl!: string;
  public name!: string;
  public links!: DiscographyLinks[] | undefined;
}
