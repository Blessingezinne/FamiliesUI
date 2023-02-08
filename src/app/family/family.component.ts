import { Component, OnInit }  from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Family {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public address: string,
    public email: string,
    public phone: string,
    public country: string
  ) {
  }
}

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  families: Family[];
  constructor(
   private httpClient: HttpClient
  ) {}
 ngOnInit(): void {
    this.getFamilies();
  }
  getFamilies(){
    this.httpClient.get<any>('http://localhost:9001/families').subscribe(
      response => {
        console.log(response);
        this.families = response;
      }
    );
  }

}
