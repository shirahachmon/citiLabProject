
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { EmployeeService } from '../services/employee.service';
  import { Employee } from '../shared/employee.model';
  
  declare var M:any;

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css'],
  providers: [EmployeeService]

})
export class AllRecordsComponent implements OnInit {
    constructor(public employeeService: EmployeeService) { }
  
    ngOnInit(): void {
      this.resetForm();
      this.refreshEmployeeList();
    }
  
    resetForm(form?: NgForm){
      if(form)
        form.reset();
      this.employeeService.selectedEmployee= {
        _id: "",
        name: "",
        position: "",
        office: "",
        salary: null
      }
    }
  
    onSubmit(form: NgForm){
      if(form.value._id==""){
        this.employeeService.postEmployee(form.value).subscribe((res)=> {
          this.resetForm(form);
          this.refreshEmployeeList();
          M.toast({html: 'Saved successfullly', classes: 'rounded'})
        })
      }
      else{
        this.employeeService.putEmployee(form.value).subscribe((res)=> {
          this.resetForm(form);
          this.refreshEmployeeList();
          M.toast({html: 'Updated successfullly', classes: 'rounded'})
        })
      }
    }
  
    refreshEmployeeList(){
      this.employeeService.getEmployeeList().subscribe((res)=> {
        console.log(res);
        
        this.employeeService.employees= res as Employee[]
      })
    }
  }
  