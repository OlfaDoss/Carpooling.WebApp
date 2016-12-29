import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarpoolService } from '../carpool.service';
import {Router} from '@angular/router';
import { SearchCarpoolComponent } from '../search-carpool/search-carpool.component';
declare var jQuery:any;

@Component({
  selector: 'app-list-carpools',
  templateUrl: './list-carpools.component.html',
  styleUrls: ['./list-carpools.component.css'],
})
export class ListCarpoolsComponent implements OnInit {

  carpoolsListing = [];
  count:number = 0;
  alertDel:boolean = false;
  deltTitle:string;

  constructor(private carpoolService:CarpoolService,  private router:Router) {

    carpoolService.getCarpools()
      .subscribe(
        data => {
          this.carpoolsListing = data;
          this.count = this.carpoolsListing.length;

        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );


  }

  ngOnInit() {
  }

  onChangeCarpools(model:any):void {
    this.carpoolsListing = model;
    this.count = this.carpoolsListing.length;
  }

  removeCarpool(Id:any,title:string) {
    this.carpoolService.removeCarpool(Id).subscribe(
      data => {
       this.alertDel = true;
       this.deltTitle = title;
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        jQuery('#'+Id).css("display","none");
      },
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  };

}
