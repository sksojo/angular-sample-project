import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    isFavorite: true
  }

  onChangeFavorite(){
    console.log("Favorite component changed!");
  }
}
