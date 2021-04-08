import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private router:Router) { }

  findForm = new FormGroup({
    sku : new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit() {
    
    let sku = this.findForm.value['sku'];
    this.router.navigate(['products/'+sku]);
    
  }

}
