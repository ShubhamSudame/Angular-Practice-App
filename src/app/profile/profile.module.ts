import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCollapseModule } from 'ngx-collapse';
import { CollapseComponent } from "./collapse/collapse.component";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddressModule } from "../shared/address/address.module";

@NgModule({
    declarations: [
        ProfileComponent,
        CollapseComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forChild([
            { path: '', component: ProfileComponent }
        ]),
        NgxCollapseModule,
        MatCheckboxModule,
        AddressModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {}