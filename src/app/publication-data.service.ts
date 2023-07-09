import { Injectable } from '@angular/core';
import { Publications } from './publications/publications';

@Injectable({
  providedIn: 'root'
})
export class PublicationDataService {

  constructor() {
    console.log("Services are get Created.")
   }

   //Creating the JSON object for data and setting it in to the publicationlist object of type Publications, where the Publications type is defined in the publications component
   private publicationlist:Publications[]=[
    {
      "publication_heading":"Reading",
      "publication_description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae at alias provident tempora quisquam deserunt doloremque sunt beatae laudantium magnam, cumque error adipisci saepe corporis molestias nam possimus quod?",
      "publication_title":"To know more about the content",
      "publication_button":"Click Here"
    },
    {
      "publication_heading":"Reading",
      "publication_description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae at alias provident tempora quisquam deserunt doloremque sunt beatae laudantium magnam, cumque error adipisci saepe corporis molestias nam possimus quod?",
      "publication_title":"To know more about the content",
      "publication_button":"Click Here"
    },
    {
      "publication_heading":"Reading",
      "publication_description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae at alias provident tempora quisquam deserunt doloremque sunt beatae laudantium magnam, cumque error adipisci saepe corporis molestias nam possimus quod?",
      "publication_title":"To know more about the content",
      "publication_button":"Click Here"
    },
    {
      "publication_heading":"Reading",
      "publication_description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae at alias provident tempora quisquam deserunt doloremque sunt beatae laudantium magnam, cumque error adipisci saepe corporis molestias nam possimus quod?",
      "publication_title":"To know more about the content",
      "publication_button":"Click Here"
    }
  ]

  //Function which is going to provide the data where it is going to used by other component 
  getList():Publications[]{
    return this.publicationlist   
  }

}
