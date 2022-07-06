import { Component, OnInit, Input } from '@angular/core';
import { DiscographyLinks } from 'src/app/models/discography-links.model';

@Component({
  selector: 'app-discography-card',
  templateUrl: './discography-card.component.html',
  styleUrls: ['./discography-card.component.scss']
})
export class DiscographyCardComponent implements OnInit {
  @Input() projectname: string = "project name";
  @Input() projectlink: string = "project link";
  @Input() projectimage: string = "project image";
  @Input() projectbgcolor: string = "project bg color";
  @Input() projecticon: string = "project icon";
  @Input() artist: string = "project icon";
  @Input() links: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae perspiciatis debitis distinctio natus laborum accusamus amet, nulla quaerat odit, quis quia hic rerum unde? Illo assumenda omnis nobis quam culpa, voluptas debitis, possimus nemo, ipsa minus blanditiis impedit earum quo exercitationem sit repellendus ullam veritatis. Voluptatibus quidem velit ipsam."

  constructor() { }

  ngOnInit(): void {
  }

}
