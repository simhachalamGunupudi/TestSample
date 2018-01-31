import {async, TestBed, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  HttpModule,
  RequestMethod,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { UsersService } from './users.service';
import * as _ from 'underscore';


const TEST_TIMEOUT = 50000;

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));


  it('getUserDetails', async(inject([UsersService], (userService: UsersService) => {
      userService
      .getUserDetails()
      .toPromise()
      .then((user) => {
        expect(user).toBeDefined();
        expect(user).toBeTruthy();
        expect(user).toContain(jasmine.objectContaining({
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
        }));

        user.forEach(function(prop){
          const expected = [
            'id',
            'name',
            'username',
            'email',
            'address',
            'phone',
            'website',
            'company'
          ];
          const actual = Object.keys(prop);
          console.log(actual);
          expect(actual).toEqual(expected);
        });


      })
      .catch((res) => fail(res.status));
  })), TEST_TIMEOUT);





});
