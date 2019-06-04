import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { FuseSharedModule } from '@fuse/shared.module';

import { FormsComponent } from 'app/main/ui/forms/forms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: FormsComponent
    }
];

@NgModule({
    declarations: [
        FormsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatButtonToggleModule,
        FuseSharedModule,
    ]
})
export class UIFormsModule
{
}
