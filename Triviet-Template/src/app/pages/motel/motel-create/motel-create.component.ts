import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Local_VN, Districts, Wards, Streets } from '../../../ngrx-store/models/db-address.model';

@Component({
  selector: 'ngx-motel-create',
  templateUrl: './motel-create.component.html',
  styleUrls: ['./motel-create.component.scss']
})
export class MotelCreateComponent implements OnInit {
  motelForm: FormGroup

  _jsonURL = '../assets/data/local.json'
  _local: Local_VN;
  _districts: Array<Districts>;
  _vSelectCity: Local_VN;
  _vSelectDis: Districts;
  _vSelectWards : Wards;
  _vSelectStreets: Streets;


  _isSelectDistricts = false;
  _isSelectWards = false;
  _isSelectStreets = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { 
    this.getJsonLocal().subscribe(data => {
      this._local = data
    })
  }

  ngOnInit(): void {
    this.motelForm = this.fb.group({
      motel_name: ['', Validators.required],
      motel_amount: ['', Validators.required],
      motel_Address: ['', Validators.required],
      value_city: [''],
      value_dis: [''],
      value_wards: [''],
      value_streets: [''],
    });
  }
  getJsonLocal(): Observable<any>{
    return this.http.get(this._jsonURL)
  }

  onSelect_City() {
    if (this._vSelectCity) {
      this._vSelectDis = null;
      this._isSelectDistricts = true;
    }
  }

  onSelect_Dis() {
    if (this._vSelectDis) {
      this._vSelectWards = null;
      this._isSelectWards = true;
    }
  }

  onSelect_Wards() {
    if (this._vSelectDis) {
      this._vSelectStreets = null;
      this._isSelectStreets = true;
    }
  }

  onSubmit(){

  }
}
