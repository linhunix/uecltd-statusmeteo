import { TestBed, async } from '@angular/core/testing';
import { HeadComponent } from './head.component';
describe('HeadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeadComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HeadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'statusmeteo'`, async(() => {
    const fixture = TestBed.createComponent(HeadComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('statusmeteo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HeadComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to statusmeteo!');
  }));
});
