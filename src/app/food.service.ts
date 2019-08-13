import { Injectable } from '@angular/core';
import { Food } from './food';
import { FOODS } from './mock-foods';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  private foodsUrl = 'api/foods';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a FoodService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.foodsUrl)
      .pipe(
        tap(_ => this.log('fetched foods')),
        catchError(this.handleError<Food[]>('getFoods', []))
      );
  }

  getFood(id: number): Observable<Food> {
    const url = `${this.foodsUrl}/${id}`;
    return this.http.get<Food>(url).pipe(
     tap(_ => this.log(`fetched food id=${id}`)),
     catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateFood (food: Food): Observable<any> {
    return this.http.put(this.foodsUrl, food, this.httpOptions).pipe(
     tap(_ => this.log(`updated hero id=${food.id}`)),
     catchError(this.handleError<any>('updateFood'))
    );
  }

  /** POST: add a new food to the server */
addFood(food: Food): Observable<Food> {
  return this.http.post<Food>(this.foodsUrl, food, this.httpOptions).pipe(
    tap((newFood: Food) => this.log(`added food w/ id=${newFood.id}`)),
    catchError(this.handleError<Food>('addFood'))
  );
}

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** DELETE: delete the foood from the server */
    deleteFood(food: Food | number): Observable<Food> {
      const id = typeof food === 'number' ? food : food.id;
      const url = `${this.foodsUrl}/${id}`;

      return this.http.delete<Food>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted food id=${id}`)),
        catchError(this.handleError<Food>('deleteFood'))
      );
    }
}
