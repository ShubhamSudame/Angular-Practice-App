import { Component } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html'
})
export class CollapseComponent {
    newComponent: boolean = false;
    
    onChecked(data: MatCheckboxChange) {
        this.newComponent = data.checked;
    }
}