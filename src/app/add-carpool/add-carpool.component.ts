import { Component, OnInit } from '@angular/core';
import { CarpoolService } from '../carpool.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-carpool',
  templateUrl: './add-carpool.component.html',
  styleUrls: ['./add-carpool.component.css']
})
export class AddCarpoolComponent implements OnInit {

  form:FormGroup;

  constructor(fb:FormBuilder, private carpoolService:CarpoolService, private router:Router) {
    this.form = fb.group({
      "title": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
      "start": ["", Validators.required],
      "end": ["", Validators.required],
      "time": ["", Validators.required],
      "car": ["", Validators.required],
      "price": ["", Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
      "available_seats": ["", Validators.required],
      "frequence": ["", Validators.required],
      "smoke_authorise": ["", Validators.required],
      "driver_firstname": ["", Validators.required],
      "driver_lastname": ["", Validators.required],
      "driver_phone": ["", Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
      "driver_sexe": ["", Validators.required],
    })
  };

  addCarpool(model:any, isValid:boolean) {

    if (isValid) {
      this.carpoolService.createCarpool(model).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/carpools']);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }
  };


  ngOnInit() {
  }

}
