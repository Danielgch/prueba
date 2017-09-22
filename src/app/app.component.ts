import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  name : string;
  email : string;
  website : string;
  hobbies: string[];
  showHobbies: Boolean;
  posts: Ipost[];
  post2: {};
  constructor(private  postService:PostService) {
    this.name = "Daniel";
    this.email = "danielgiraldoch@gmail.com";
    this.website= "http//www.facebook.com";
    this.hobbies = ['run','read','write'];
    this.showHobbies = false;     
  }
  
// que es un observable
   ngOnInit() {
     this.postService.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      }
     )
   }

  toggleHobbies()
  {
    this.showHobbies =!  this.showHobbies;
  }
  newHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value='';
    return false;
  }
}

interface Ipost
{
  id: string;
  title: string;
  body: string;
}
