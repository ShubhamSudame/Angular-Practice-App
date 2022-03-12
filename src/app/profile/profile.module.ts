import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCollapseModule } from 'ngx-collapse';
import { CollapseComponent } from "./collapse/collapse.component";

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
        NgxCollapseModule
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileModule {}