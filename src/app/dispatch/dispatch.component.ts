import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateDispatchService } from '../service/create-dispatch.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss'],
})
export class DispatchComponent implements OnInit {
  public prettyForm: FormGroup;

  constructor(private createDispatchService: CreateDispatchService) {
    this.prettyForm = new FormGroup({
      'textInput': new FormControl(null, Validators.required),
      'productInput': new FormControl(null, Validators.required),
      'selectInput': new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.prettyForm = new FormGroup({
      'textInput': new FormControl(null, Validators.required),
      'productInput': new FormControl(null, Validators.required),
      'selectInput': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const payload = {
      document: this.prettyForm?.value.textInput,
      product: this.prettyForm?.value.productInput,
      type: this.prettyForm?.value.selectInput,
    }
    console.log(payload);
    this.createDispatchService.createDispatch(payload).pipe(take(1))
      .subscribe((data) => {
        console.log(data);
      });
    // Add your form submission logic here
  }
}
