import { Link } from "./link.model";
import { Thumbnail } from "./thumbnail.model";
import { Discography } from "./discography.model";

export class Artist {
  public createdon!: Date;
  public lastused!: Date;
  public artistname!: string;
  public artisttag!: string;
  public artistimg!: string;
  public artistbio!: string;
  public artistry!: string;
  public importantlinks: Link[] | undefined;
  public library: Thumbnail[] | undefined;
  public discography: Discography[] | undefined;
}
