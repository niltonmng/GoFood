import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
// import { FOODS } from '../mock-foods';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})

// export class FoodsComponent implements OnInit {

//   // foods = FOODS;
//   foods: Food[];
//   selectedFood: Food;

//   constructor(private foodService: FoodService) { }

//   ngOnInit() {
//     this.getFoods();
//   }

//   // getFoods(): void {
//   //   this.foods = this.foodService.getFoods();    // original
//   // }

//   getFoods(): void {
//     this.foodService.getFoods()
//         .subscribe(foods => this.foods = foods);  // observable
//   }

//   onSelect(food: Food): void {
//     this.selectedFood = food;
//   }

// }

export class FoodsComponent implements OnInit {
  foods: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods()
    .subscribe(foods => this.foods = foods);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.foodService.addFood({ title } as Food)
      .subscribe(food => {
        this.foods.push(food);
      });
  }

  delete(food: Food): void {
    this.foods = this.foods.filter(h => h !== food);
    this.foodService.deleteFood(food).subscribe();
  }
}
