import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
    @Input() message: string;
    @Output() close =  new EventEmitter<boolean>();

    onClose(action: boolean) {
        this.close.emit(action);
    }
}