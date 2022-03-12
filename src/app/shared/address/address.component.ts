import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  addressForm = this.fb.group({
    type: null,
    //firstName: [null, Validators.required],
    //lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Andhra Pradesh', abbreviation: 'AP'},
    {name: 'Arunachal Pradesh', abbreviation: 'AR'},
    {name: 'Assam', abbreviation: 'AS'},
    {name: 'Bihar', abbreviation: 'BR'},
    {name: 'Chhattisgarh', abbreviation: 'CG'},
    {name: 'Goa', abbreviation: 'GA'},
    {name: 'Gujarat', abbreviation: 'GJ'},
    {name: 'Haryana', abbreviation: 'HR'},
    {name: 'Himachal Pradesh', abbreviation: 'HP'},
    {name: 'Jharkhand', abbreviation: 'JH'},
    {name: 'Karnataka', abbreviation: 'KA'},
    {name: 'Kerala', abbreviation: 'KL'},
    {name: 'Madhya Pradesh', abbreviation: 'MP'},
    {name: 'Maharashtra', abbreviation: 'MH'},
    {name: 'Manipur', abbreviation: 'MN'},
    {name: 'Meghalaya', abbreviation: 'ML'},
    {name: 'Mizoram', abbreviation: 'MZ'},
    {name: 'Nagaland', abbreviation: 'NL'},
    {name: 'Odisha', abbreviation: 'OD'},
    {name: 'Punjab', abbreviation: 'PB'},
    {name: 'Rajasthan', abbreviation: 'RJ'},
    {name: 'Sikkim', abbreviation: 'SK'},
    {name: 'Tamil Nadu', abbreviation: 'TN'},
    {name: 'Telangana', abbreviation: 'TS'},
    {name: 'Tripura', abbreviation: 'TR'},
    {name: 'Uttar Pradesh', abbreviation: 'UP'},
    {name: 'Uttarakhand', abbreviation: 'UK'},
    {name: 'West Bengal', abbreviation: 'WB'},
    {name: 'Andaman and Nicobar Islands', abbreviation: 'AN'},
    {name: 'Chandigarh', abbreviation: 'CH'},
    {name: 'Dadra and Nagar Haveli', abbreviation: 'DN'},
    {name: 'Daman and Diu', abbreviation: 'DD'},
    {name: 'Delhi', abbreviation: 'DL'},
    {name: 'Jammu and Kashmir', abbreviation: 'JK'},
    {name: 'Ladakh', abbreviation: 'LA'},
    {name: 'Lakshadweep', abbreviation: 'LD'},
    {name: 'Puducherry', abbreviation: 'PY'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
