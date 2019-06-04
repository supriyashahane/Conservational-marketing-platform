import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
export interface Food {
  value: string;
  viewValue: string;
}
export interface wood {
  value: string;
  viewValue: string;
}
@Component({
    selector     : 'analytics-dashboard',
    templateUrl  : './analytics.component.html',
    styleUrls    : ['./analytics.component.scss'],
   
})
export class AnalyticsDashboardComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    // Horizontal Stepper
    horizontalStepperStep1: FormGroup;
    horizontalStepperStep2: FormGroup;
    horizontalStepperStep3: FormGroup;
  
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
  
    // Private
    private _unsubscribeAll: Subject<any>;
  
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(private _formBuilder: FormBuilder) {
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
      // Reactive Form
      this.form = this._formBuilder.group({
        company: [
          {
            value: 'Google',
            disabled: true
          },
          Validators.required
        ],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        address2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.maxLength(5)]],
        country: ['', Validators.required]
      });
  
      // Horizontal Stepper form steps
      this.horizontalStepperStep1 = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      });
  
      this.horizontalStepperStep2 = this._formBuilder.group({
        address: ['', Validators.required]
      });
  
      this.horizontalStepperStep3 = this._formBuilder.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.maxLength(5)]]
      });
  
      // Vertical Stepper form stepper
      this.verticalStepperStep1 = this._formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      });
  
      this.verticalStepperStep2 = this._formBuilder.group({
        address: ['', Validators.required]
      });
  
      this.verticalStepperStep3 = this._formBuilder.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.maxLength(5)]]
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
    finishHorizontalStepper(): void {
      alert('You have finished the horizontal stepper!');
    }
  
    /**
     * Finish the vertical stepper
     */
    finishVerticalStepper(): void {
      alert('You have finished the vertical stepper!');
    }
  }