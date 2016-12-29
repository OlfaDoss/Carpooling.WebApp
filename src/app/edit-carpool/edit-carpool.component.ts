import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'app-edit-carpool',
  templateUrl: './edit-carpool.component.html',
  styleUrls: ['./edit-carpool.component.css']
})
export class EditCarpoolComponent implements OnInit {

  form:FormGroup;
  carpool = {
    id: "",
    title:"",
    start:"",
    end:"",
    time:"",
    car:"",
    price:"",
    available_seats:"",
    frequence:"",
    smoke_authorise:"",
    driver : {
      firstname:"",
      lastname:"",
      phone:"",
      sexe:""
    }
  };

  constructor(fb:FormBuilder, private carpoolService:CarpoolService, private router:Router, private route:ActivatedRoute) {
    this.form = fb.group({
      "title": [this.carpool.title, Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
      "start": [this.carpool.start, Validators.required],
      "end": [this.carpool.end, Validators.required],
      "time": [this.carpool.time, Validators.required],
      "car": [this.carpool.car, Validators.required],
      "price": [this.carpool.price, Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
      "available_seats": [this.carpool.available_seats, Validators.required],
      "frequence": [this.carpool.frequence, Validators.required],
      "smoke_authorise": [this.carpool.smoke_authorise, Validators.required],
      "driver_firstname": [this.carpool.driver.firstname, Validators.required],
      "driver_lastname": [this.carpool.driver.lastname, Validators.required],
      "driver_phone": [this.carpool.driver.phone, Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
      "driver_sexe": [this.carpool.driver.sexe, Validators.required],
    })
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['Id'] ;

      this.carpoolService.getCarpool(id)
        .subscribe(
          data => {
            this.carpool = data;
            console.log( this.carpool);
            this.form.controls['title'].setValue(this.carpool.title);
            this.form.controls['start'].setValue(this.carpool.start);
            this.form.controls['end'].setValue(this.carpool.end);
            this.form.controls['time'].setValue(this.carpool.time);
            this.form.controls['car'].setValue(this.carpool.car);
            this.form.controls['price'].setValue(this.carpool.price);
            this.form.controls['available_seats'].setValue(this.carpool.available_seats);
            this.form.controls['frequence'].setValue(this.carpool.frequence);
            this.form.controls['smoke_authorise'].setValue(this.carpool.smoke_authorise);
            this.form.controls['driver_firstname'].setValue(this.carpool.driver.firstname);
            this.form.controls['driver_lastname'].setValue(this.carpool.driver.lastname);
            this.form.controls['driver_phone'].setValue(this.carpool.driver.phone);
            this.form.controls['driver_sexe'].setValue(this.carpool.driver.sexe);
          },
          error => console.error('Error: ' + error),
          () => console.log('Completed! ee')
        );
    });
  }

  editCarpool(model:any, isValid:boolean) {
    if (isValid) {
      this.carpoolService.editCarpool(model,this.carpool.id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/carpools']);
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }
  };

}
