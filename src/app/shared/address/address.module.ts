import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddressComponent } from "./address.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AddressComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        CommonModule
    ],
    exports: [
        AddressComponent
    ]
})
export class AddressModule {

}