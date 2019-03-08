import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryShowDetailsComponent } from './query-show-details.component';

describe('QueryShowDetailsComponent', () => {
  let component: QueryShowDetailsComponent;
  let fixture: ComponentFixture<QueryShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryShowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
