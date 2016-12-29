import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CarpoolService } from '../carpool.service';
import {NgForm}  from '@angular/forms';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search-carpool',
  templateUrl: './search-carpool.component.html',
  styleUrls: ['./search-carpool.component.css']
})
export class SearchCarpoolComponent implements OnInit {

  rideStart:string = null;
  rideEnd:string = null;
  rideDate:string = null;
  carpoolsList = [];

  @Output()
  notify: EventEmitter<any> = new EventEmitter<any>();


  constructor(private carpoolService:CarpoolService, private router:Router) {
  }

  searchCarpool(form:NgForm):void {
    console.log(form.value);
    //this.router.navigate(['/search', form.value.rideStart, form.value.rideEnd, form.value.rideDate]);
    let ride_start = form.value.rideStart ? form.value.rideStart : null;
    let ride_end = form.value.rideEnd  ? form.value.rideEnd : null;
    let ride_date = form.value.rideDate ? form.value.rideDate : null;
    console.log(ride_start || ride_end || ride_date);
    if (ride_start != null || ride_end != null  || ride_date != null ) {
      this.carpoolService.searchCarpools(ride_start, ride_end, ride_date)
        .subscribe(
          data => {
            this.carpoolsList = data
            this.notify.emit(this.carpoolsList );
          },
          error => console.error('Error: ' + error),
          () => console.log('Completed! ee')
        );
    }
  }

  ngOnInit() {
  }

}
