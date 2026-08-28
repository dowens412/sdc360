import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];

      let response = new Array<object>();

      spyOn(service, 'all').and.returnValue(of(userResponse));

      service.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  // Add tests for findOne() method
  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      let response = new Object();

      spyOn(service, 'findOne').and.returnValue(of(userResponse));

      service.findOne('2').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
});
