import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forChild([
            { path: '', component: ProfileComponent }
        ])
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {}