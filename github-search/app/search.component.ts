import { Component } from '@angular/core';
import { getData } from './getData.service';
@Component({
  moduleId:module.id,
    selector: 'my-app',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers:[getData]
})
export class SearchComponent {
    selectedNumber: number;
    data: any;
    constructor(private getdata:getData){}
    onSelect(num: number): void {
        this.selectedNumber = num;
    };
    returnData(s:any){
       this.getdata.getHub(s).then(res =>this.data = res.items);
    }
    onSubmit(e:any){
      e.preventDefault();
      console.log('sub')
    }
}
