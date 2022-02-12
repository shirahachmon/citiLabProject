

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../shared/employee.model";

@Injectable()
export class EmployeeService{

    constructor(private http: HttpClient){}

    selectedEmployee: Employee;
    employees: Employee[]
    filteredEmployees: Employee[]
    private _searchTerm: string;
    readonly baseURL= 'http://127.0.0.1:8080/';

    get searchTerm(): string{
        return this._searchTerm;
    }

    set searchTerm(value: string){
        this._searchTerm=value;
        this.filteredEmployees= this.filtereEmployees(value);
    }

    filtereEmployees(searchString: string){
        return this.employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
    }


    postEmployee(emp: Employee){
        return this.http.post(this.baseURL, emp)
    }

    getEmployeeList(){
        return this.http.get(this.baseURL + 'users/all')
    }

    putEmployee(emp: Employee){
        return this.http.put(this.baseURL + `/${emp._id}`, emp)
    }

    deleteEmployee(_id: string){
        return this.http.delete(this.baseURL + `/${_id}`)
    }
}