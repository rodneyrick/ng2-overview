// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By }              from '@angular/platform-browser';
// import { DebugElement }    from '@angular/core';

// import { UserComponent } from './user.component';
// import { UserService } from './user.service';
// import { User } from './user.model';

// describe('UserComponent', () => {
//     it('true is true', () => expect(true).toBe(true));
// });

// describe('UserComponent (inline template)', () => {

//   let comp:    UserComponent;
//   let fixture: ComponentFixture<UserComponent>;
//   let de:      DebugElement;
//   let el:      HTMLElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserComponent ], // declare the test component
//     });

//     fixture = TestBed.createComponent(UserComponent);

//     comp = fixture.componentInstance; // UserComponent test instance

//     // query for the title <h1> by CSS element selector
//     de = fixture.debugElement.query(By.css('h1'));
//     el = de.nativeElement;
//   });

//   it('should display original title', () => {
//   fixture.detectChanges();
//     expect(el.textContent).toContain(comp.title);
//   });

//   it('should display a different test title', () => {
//     comp.title = 'Test Title';
//     fixture.detectChanges();
//     expect(el.textContent).toContain('Test Title');
//   });
// });