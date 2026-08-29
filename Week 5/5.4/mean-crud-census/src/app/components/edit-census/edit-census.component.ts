import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-edit-census',
  templateUrl: './edit-census.component.html',
  styleUrls: ['./edit-census.component.css']
})

export class EditCensusComponent implements OnInit {

  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
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

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetCensus(id).subscribe(res => {
      this.censusForm.setValue({
        year: res['year'],
        census_taker: res['census_taker'],
        people_in_household: res['people_in_household'],
        street: res['street'],
        city: res['city'],
        state: res['state'],
        zip: res['zip']
      });
    });
  }

  onUpdate(): any {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.UpdateCensus(id, this.censusForm.value)
      .subscribe(() => {
        console.log('Census record updated successfully.');
        this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
      }, (err) => {
        console.log(err);
      });
  }
}
