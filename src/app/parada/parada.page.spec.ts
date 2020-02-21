import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParadaPage } from './parada.page';

describe('ParadaPage', () => {
  let component: ParadaPage;
  let fixture: ComponentFixture<ParadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParadaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
