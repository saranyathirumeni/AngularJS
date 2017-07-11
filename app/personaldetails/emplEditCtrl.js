(function(){
    "use strict";

    angular
        .module("employeeManagement")
        .controller("EmployeeEditController",["employee","$state",EmployeeEditController]);

    function EmployeeEditController(employee,$state){
        var vm=this;

        vm.employee=employee;

        if(vm.employee && vm.employee.emplId)
        {
            vm.title= "Edit:" + vm.employee.ename;

        }
        else
        {
            vm.title="New Employee";
        }

        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };

        vm.submit=function(){
            vm.employee.$save(function(date){
                toastr.success("Record Saved Successfully");
            });

        }

        vm.cancel=function(){
            $state.go('emplList');
        }


    }
}());

