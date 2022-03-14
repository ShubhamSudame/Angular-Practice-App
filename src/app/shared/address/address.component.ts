import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  //addressForm = this.fb.group({
  //  type: null,
  //  address: [null, Validators.required],
  //  address2: null,
  //  city: [null, Validators.required],
  //  state: [null, Validators.required],
  //  postalCode: [null, Validators.compose([
  //    Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //  ]
  //});
  @Input() title: string;
  
  addressForm: FormGroup;

  hasUnitNumber = false;

  states = [
    { name: 'Andhra Pradesh', abbreviation: 'AP' },
    { name: 'Arunachal Pradesh', abbreviation: 'AR' },
    { name: 'Assam', abbreviation: 'AS' },
    { name: 'Bihar', abbreviation: 'BR' },
    { name: 'Chhattisgarh', abbreviation: 'CG' },
    { name: 'Goa', abbreviation: 'GA' },
    { name: 'Gujarat', abbreviation: 'GJ' },
    { name: 'Haryana', abbreviation: 'HR' },
    { name: 'Himachal Pradesh', abbreviation: 'HP' },
    { name: 'Jharkhand', abbreviation: 'JH' },
    { name: 'Karnataka', abbreviation: 'KA' },
    { name: 'Kerala', abbreviation: 'KL' },
    { name: 'Madhya Pradesh', abbreviation: 'MP' },
    { name: 'Maharashtra', abbreviation: 'MH' },
    { name: 'Manipur', abbreviation: 'MN' },
    { name: 'Meghalaya', abbreviation: 'ML' },
    { name: 'Mizoram', abbreviation: 'MZ' },
    { name: 'Nagaland', abbreviation: 'NL' },
    { name: 'Odisha', abbreviation: 'OD' },
    { name: 'Punjab', abbreviation: 'PB' },
    { name: 'Rajasthan', abbreviation: 'RJ' },
    { name: 'Sikkim', abbreviation: 'SK' },
    { name: 'Tamil Nadu', abbreviation: 'TN' },
    { name: 'Telangana', abbreviation: 'TS' },
    { name: 'Tripura', abbreviation: 'TR' },
    { name: 'Uttar Pradesh', abbreviation: 'UP' },
    { name: 'Uttarakhand', abbreviation: 'UK' },
    { name: 'West Bengal', abbreviation: 'WB' },
    { name: 'Andaman and Nicobar Islands', abbreviation: 'AN' },
    { name: 'Chandigarh', abbreviation: 'CH' },
    { name: 'Dadra and Nagar Haveli', abbreviation: 'DN' },
    { name: 'Daman and Diu', abbreviation: 'DD' },
    { name: 'Delhi', abbreviation: 'DL' },
    { name: 'Jammu and Kashmir', abbreviation: 'JK' },
    { name: 'Ladakh', abbreviation: 'LA' },
    { name: 'Lakshadweep', abbreviation: 'LD' },
    { name: 'Puducherry', abbreviation: 'PY' }
  ];

  constructor(private ds: DataStorageService,
              private auth: AuthService) { 
  }

  ngOnInit(): void {
    const user_id = this.auth.user.value.id;



    this.ds.getAddress().subscribe(address => {
      console.log(address.data);
      if (address.userid === user_id) {
        this.addressForm = new FormGroup({
          type: new FormControl(address.data.type),
          address: new FormControl(address.data.address, Validators.required),
          address2: new FormControl(address.data.address2),
          city: new FormControl(address.data.city, Validators.required),
          state: new FormControl(address.data.state, Validators.required),
          postalCode: new FormControl(address.data.postalCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        });
      }
    });

    this.addressForm = new FormGroup({
      type: new FormControl(''),
      address: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      postalCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });

  }

  onSubmit(): void {
    console.log(this.addressForm.value);
    this.ds.storeAddress(this.auth.user.value.id, this.addressForm.value);
  }

}
