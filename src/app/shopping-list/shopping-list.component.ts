import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  checkoutMode = false;
  //modalRef?: BsModalRef;
  constructor() { } //private modalService: BsModalService

  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
      
  }

  onCheckout() { //template: TemplateRef<any>
    this.checkoutMode = true;
    //this.modalRef = this.modalService.show(template);
  }
  onClose() {
    this.checkoutMode = false;
  }
}
