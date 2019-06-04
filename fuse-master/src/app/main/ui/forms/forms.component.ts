import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { Subject } from 'rxjs';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/map'


export interface Food {
  value: string;
  viewValue: string;
}
export interface wood {
  value: string;
  viewValue: string;
}
@Component({
    selector   : 'forms',
    templateUrl: './forms.component.html',
    styleUrls  : ['./forms.component.scss']
})

export class FormsComponent implements OnInit, OnDestroy
{
    form: FormGroup;
  
  
  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;
  foods: Food[] = [
    { value: '0', viewValue: 'Freelance Marketer' },
    { value: '1', viewValue: 'In House Marketer' },
    { value: '2', viewValue: 'Business Owner/Company Executive' },
    { value: '3', viewValue: 'Marketing Agency' },
    { value: '4', viewValue: 'Other' }
  ];
  feeds: wood[] = [
    { value: 'v0', viewValue: 'Just Chatbot' },
    { value: 'v1', viewValue: 'Conversational Display Ads' },
    { value: 'v2', viewValue: 'Overall Conversational Marketing' }
    
  ];

  foodFlag: string = '';
  
  data : any = [];
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   */
  constructor(private _formBuilder: FormBuilder,private http: Http,private _fuseConfigService: FuseConfigService) {
    
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit(): void {
    this._fuseConfigService.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
              hidden: true
          },
          sidepanel: {
              hidden: true
          }
      }
  };
    // Reactive Form
    this.form = this._formBuilder.group({
      company: [
        {
          value: 'Google',
          disabled: true
        },
        Validators.required
      ],
      firstName:['',Validators.required],
      wood: ['',Validators.required],
      b1: ['',Validators.required],
      b2: ['',Validators.required],
      b3: ['',Validators.required],
      b4: ['',Validators.required],
      b5: ['',Validators.required],
      feature: ['',Validators.required],
    
    
     
    });

    
    // Vertical Stepper form stepper
    this.verticalStepperStep1 = this._formBuilder.group({
      firstName:['',Validators.required, ],
      b1: ['',Validators.required],
      b2: ['',Validators.required],
      b3: ['',Validators.required],
      b4: ['',Validators.required],
      b5: ['',Validators.required]
    });

    this.verticalStepperStep2 = this._formBuilder.group({
      feature: ['',Validators.required]
    });

    
  }

  setFoodFlag(val: string): void {
    this.foodFlag = val;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Finish the horizontal stepper
   */
 

  /**
   * Finish the vertical stepper
   */
  /*testRequest() {
    var myName = localStorage.getItem('name');
    console.log(myName);
    let obj = JSON.parse(myName);
    console.log('hlo');
    console.log(obj);
    //console.log(obj);
    //var body = myName;
    //var myJSON = JSON.stringify(body);
    //console.log(myJSON);
    //localStorage.setItem('name',obj);
    var tok = obj.data.token;
    console.log(tok);
  }*/
    
    testRequest(): void {
    alert('You have finished the vertical stepper!');

    let obj = localStorage.getItem('name');
    console.log(obj);
    //let obj1 = JSON.parse(obj);
    //let obj1 = JSON.stringify(obj);
    //console.log(obj1);
    console.log(this.verticalStepperStep1.value);
    console.log(this.verticalStepperStep2.value);
    //this.data = {'fname':  this.verticalStepperStep1.value, 'feature': this.verticalStepperStep2.value};
    //console.log(this.data);
    //var a1 = JSON.stringify(this.data);
    //console.log(a1);
    var firstName = this.verticalStepperStep1.value.firstName;
    var b1 = this.verticalStepperStep1.value.b1;
    var b2 = this.verticalStepperStep1.value.b2;
    var b3 = this.verticalStepperStep1.value.b3;
    var b4 = this.verticalStepperStep1.value.b4;
    var b5 = this.verticalStepperStep1.value.b5;
    var feature = this.verticalStepperStep2.value.feature;
    var data1 = { data: {firstName: firstName,b1 : b1,b2 : b2,b3 : b3, b4 : b4,b5: b5,feature: feature}};
    console.log('hi 1');
    console.log(data1);
    var data = JSON.stringify(data1);
    console.log(data);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("Accept", 'application/json');
    this.http
        .post('http://127.0.0.1:8081/api/intro/saveuser',data,{
          headers: headers
        })
          .subscribe(data => {
                alert('ok');
                window.open('/ui/page-layouts/blank',"_self")

          }, error => {
            console.log(JSON.stringify(error.json()));
          });
  }
  /*var requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: 'http://127.0.0.1:8081/api/intro/saveuser',
      headers: headers,
      body: a1
  })
  return this.http.request(new Request(requestoptions))
        .map((res: Response) => {
            if (res) {
                return { status: res.status, json: res.json() }
            }
        });
  
      */

  
}
