import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  @Output() exit = new EventEmitter<void>();
  newComponent: boolean = false;

  constructor(private ngWizardService: NgWizardService) { }
  
  ngOnInit(): void {
  }
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        //{ text: 'Finish', class: 'btn btn-info', event: () => { this.exit.emit() } }
      ],
    }
  };
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
  isValidTypeBoolean: boolean = true;
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
  onClose() {
    this.exit.emit();
  }

  onChecked(data: MatCheckboxChange) {
      this.newComponent = data.checked;
  }
}
