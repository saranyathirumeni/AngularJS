(function(){
   "use strict";

    angular
        .module("employeeManagement")
        .controller("EmployeeDetailController",["employee","employeeService",EmployeeDetailController]);
    function EmployeeDetailController(employee,employeeService){

        var vm=this;
        vm.employee =  employee;
        vm.title="Employee Details" + vm.employee.ename;
        vm.hraAmount = employeeService.calculateHRA(vm.employee.basic,vm.employee.houseAllowance);
        vm.othAllAmount = employeeService.calculateHRA(vm.employee.basic,vm.employee.otherAllowance);
        vm.salary = vm.employee.basic + vm.hraAmount + vm.othAllAmount;

    }
}());
