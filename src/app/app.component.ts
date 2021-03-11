import { Component } from '@angular/core';
import {myModels} from '../app/Models/myModels';
import { OperationsService } from './Services/operations.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private operations: OperationsService){}
  data: myModels.data;
  a: number;
  b: number;

  mult: number;
  div: number;

  processing : boolean;

  ngOnInit(){
    this.data = <myModels.data>{}; // new Data()
    this.data.title = "Mi pagina web";
    this.data.name = "Rolando";
    this.data.age = 21;
    this.data.school = "FCFM";
    this.a = 20;
    this.b = 10;
    
 
  }

  makeExtraOperations()
  {
   debugger;
   this.processing = true;
   this.mult =  this.operations.multiply(this.a, this.b);
  //  this.div =  this.operations.divide(this.a, this.b);
   this.processing = false;

  }


  
}
