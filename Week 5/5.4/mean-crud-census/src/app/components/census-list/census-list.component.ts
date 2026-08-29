import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})

export class CensusListComponent implements OnInit {

  Census: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCensusRecords().subscribe(res => {
      this.Census = res;
    });
  }

  delete(id: any, i: any) {
    if (window.confirm('Do you want to delete this Census record?')) {
      this.crudService.DeleteCensus(id).subscribe(() => {
        this.Census.splice(i, 1);
      });
    }
  }
}
