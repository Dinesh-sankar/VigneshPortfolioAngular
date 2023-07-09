import { Component, OnInit } from '@angular/core';
import { Publications } from './publications';
import { PublicationDataService } from '../publication-data.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers:[PublicationDataService]    //Decalring the service created in the root level (App level)
})
export class PublicationsComponent implements OnInit {
  publicationlist: Publications[];    //Declaring the publicationlist object of type Publications

  constructor(private publicationService:PublicationDataService) //Declaring the publicationService object for the class PublicationDataService
  {
    console.log("List Component is get Created.")
    this.publicationlist = this.publicationService.getList()  //Storing the data from PublicationDataService into publicationlist object   
  }

  ngOnInit(): void {
  }

}
