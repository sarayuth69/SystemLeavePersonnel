import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeshowComponent } from './employeeshow/employeeshow.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { LeavetypeComponent } from './leavetype/leavetype.component';
import { LoginComponent } from './login/login.component';
import { PositionComponent } from './position/position.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckleaveComponent } from './checkleave/checkleave.component';
import { TestleaveComponent } from './testleave/testleave.component';
import { CheckdayworkComponent } from './checkdaywork/checkdaywork.component';
import { SectorComponent } from './sector/sector.component';
import { SumleaveComponent } from './sumleave/sumleave.component';
import { EditdayworkComponent } from './editdaywork/editdaywork.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sector', component: SectorComponent },
  { path: 'checkdaywork', component: CheckdayworkComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employeeshow', component: EmployeeshowComponent },
  { path: 'employeestatus', component: EmployeestatusComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'leavelist', component: LeavelistComponent },
  { path: 'leavetype', component: LeavetypeComponent },
  { path: 'position', component: PositionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkleave', component: CheckleaveComponent },
  { path: 'testleave', component: TestleaveComponent },
  { path: 'sumleave', component: SumleaveComponent },
  { path: 'editdaywork', component: EditdayworkComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/login', // เปลี่ยนเส้นทาง
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmployeeshowComponent,
    EmployeestatusComponent,
    HeaderComponent,
    HomeComponent,
    LeaveComponent,
    LeavelistComponent,
    LeavetypeComponent,
    LoginComponent,
    PositionComponent,
    RegisterComponent,
    CheckleaveComponent,
    TestleaveComponent,
    CheckdayworkComponent,
    SectorComponent,
    SumleaveComponent,
    EditdayworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
