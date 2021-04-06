import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarageinnerPage } from './garageinner.page';

describe('GarageinnerPage', () => {
  let component: GarageinnerPage;
  let fixture: ComponentFixture<GarageinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarageinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
