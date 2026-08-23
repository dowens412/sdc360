import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookForm: FormGroup;
  bookId: any;

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.bookForm = this.formBuilder.group({
      isbn: [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],
      publisher: ['']
    });
  }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.bookId).subscribe(res => {
      this.bookForm.setValue({
        isbn: res.isbn,
        title: res.title,
        author: res.author,
        description: res.description,
        published_year: res.published_year,
        publisher: res.publisher
      });
    });
  }

  onSubmit(): any {
    this.crudService.UpdateBook(this.bookId, this.bookForm.value)
      .subscribe({
        next: () => {
          this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
        },
        error: (err) => console.log(err)
      });
  }
}
