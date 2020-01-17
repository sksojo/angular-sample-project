import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  public posts: any[];
  private post: any;
  private url: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response as any[];
      })
   }

   postTitle(input){
     this.post = {title: input.value}
     this.http.post(this.url, JSON.stringify(this.post))
      .subscribe(response => {
        this.post.id = response.id;
        this.posts.splice(0,0,this.post)
      })
   }

  ngOnInit() {
  }

}
