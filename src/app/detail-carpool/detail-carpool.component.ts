import { Component, OnInit } from '@angular/core';
import { CarpoolService } from '../carpool.service';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-detail-carpool',
  templateUrl: './detail-carpool.component.html',
  styleUrls: ['./detail-carpool.component.css']
})
export class DetailCarpoolComponent implements OnInit {

  public carpool ;

  constructor(private carpoolService:CarpoolService,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['Id'];

      this.carpoolService.getCarpool(id).subscribe(
        data => {
          this.carpool = data;
          console.log(data);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    });
  }


}
