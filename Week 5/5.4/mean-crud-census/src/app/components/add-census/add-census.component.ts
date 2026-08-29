import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css']
})

export class AddCensusComponent implements OnInit {

  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.censusForm = this.formBuilder.group({
      year: [''],
      census_taker: [''],
      people_in_household: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddCensus(this.censusForm.value)
      .subscribe(() => {
        console.log('Census record added successfully.');
        this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
      }, (err) => {
        console.log(err);
      });
  }
}
