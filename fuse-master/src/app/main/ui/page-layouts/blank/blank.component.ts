import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { finalize } from 'rxjs/operators';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'blank',
    templateUrl: './blank.component.html',
    styleUrls  : ['./blank.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class BlankComponent
{

    form: FormGroup;
data1:any;
demo:any [];
demo1:any [];
demo2: any[];
cat_list:[];
demos:any [];

lastdata: any[]=[];

    data: any = [];
    constructor(private formBuilder: FormBuilder,private _fuseConfigService: FuseConfigService)
    {
      {
        // Configure the layout
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
    }
    var myName = localStorage.getItem('name');
    var obj1 = JSON.parse( myName);
    this.data1 = obj1;
    
   
     
     this.demo =obj1.data.accounts.data;
     console.log(this.demo);
     this.form = this.formBuilder.group({
        demonames: new FormArray([])
      });
  
    
        this.demo =obj1.data.accounts.data;
        this.demo2 =obj1.data.accounts.data[0].name;
     
            
      console.log(this.data);
      console.log(this.demo);
    }

    
    ngOnInit() {}
    next() {
        var myName = localStorage.getItem('name');
        let obj = JSON.parse(myName);
        console.log(obj);
        var body = myName;  
        
        window.open('/ui/forms',"_self")
      }
    select(val){
        if(this.data){
            let ls = [];
            let f = true;
            this.data.forEach(d => {
                if(d.name != val.name){
                    ls.push(d);
                } else {
                    f = false;
                }
            });
            if(f){
                ls.push(val);
            }
            this.data = ls;
        } else {
            this.data.push(val);
        }
    }
}
