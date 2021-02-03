import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Eggs','Eggs with bacon', 'https://image.shutterstock.com/image-photo/cooking-chefs-hands-preparing-vegetable-600w-1034866882.jpg'),
    new Recipe('Chicken','Chicken with bacon', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
