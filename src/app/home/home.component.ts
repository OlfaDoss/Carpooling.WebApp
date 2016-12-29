import {Component, OnInit} from '@angular/core';
import { CarpoolService } from '../carpool.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carpoolsList = [];

  constructor(private carpoolService:CarpoolService) {

    carpoolService.getCarpools()
      .subscribe(
        data => {
          this.carpoolsList = data;
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

  ngOnInit() {
  }

}
