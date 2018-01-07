import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarBeerComponent } from './similar-beer.component';

describe('SimilarBeerComponent', () => {
  let component: SimilarBeerComponent;
  let fixture: ComponentFixture<SimilarBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
