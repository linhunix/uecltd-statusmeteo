import { TestBed, async } from '@angular/core/testing';
import { TabComponent } from './tab.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TabComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'statusmeteo'`, async(() => {
    const fixture = TestBed.createComponent(TabComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('statusmeteo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TabComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to statusmeteo!');
  }));
});
