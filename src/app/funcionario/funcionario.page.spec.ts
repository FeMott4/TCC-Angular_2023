import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioPage } from './funcionario.page';

describe('FuncionarioPage', () => {
  let component: FuncionarioPage;
  let fixture: ComponentFixture<FuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
