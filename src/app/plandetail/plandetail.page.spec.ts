import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlandetailPage } from './plandetail.page';

describe('PlandetailPage', () => {
  let component: PlandetailPage;
  let fixture: ComponentFixture<PlandetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlandetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlandetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
