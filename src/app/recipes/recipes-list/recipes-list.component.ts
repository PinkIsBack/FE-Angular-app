import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is simply a test', 'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21-200x200.jpg'),
    new Recipe('A test recipe','This is simply a test', 'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21-200x200.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
