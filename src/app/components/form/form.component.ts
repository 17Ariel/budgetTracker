import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  

  

  itemHistory: any[] = [];
  balance =1000;
  budgetForm = new FormGroup({
    Title: new FormControl(''),
    Amount: new FormControl(''),
    Type: new FormControl('')
  });
  onSubmit() {

    if (this.budgetForm.get('Title').value === "" || this.budgetForm.get('Amount').value === "" ||this.budgetForm.get('Type').value === "") {
      alert("Please Complete!")
    }
    else {
      if (this.budgetForm.get('Type').value === "Income") {
        this.balance = this.balance + parseFloat(this.budgetForm.get('Amount').value);
        this.itemHistory.push(this.budgetForm.value);
      }
      else if (this.budgetForm.get('Type').value === "Expenses") {
        if (parseFloat(this.budgetForm.get('Amount').value) > this.balance) {
          alert('Cannot deduct')
        }
        else {
          this.balance = this.balance - parseFloat(this.budgetForm.get('Amount').value);
          this.itemHistory.push(this.budgetForm.value);
        }
        
      }
      this.budgetForm.reset();
    }
    
  }

  deleteItem(Title:any) {
    this.itemHistory.filter(items => (
      items.Title !== Title
    ))
  }

}
