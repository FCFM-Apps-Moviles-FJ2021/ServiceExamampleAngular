import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  multiply(a: number, b: number) : number{
    return a * b;
  }

  divide(a: number, b: number) : number {
    return a / b;
  }

}
