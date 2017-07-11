
(function(){
     "use strict";
    angular
        .module("employeeManagement") //using the getter method
        .controller("EmployeeListController",["employeeResource",EmployeeListController]); //passing reference of function instead of writing
     //makes function easier to read and more manageable, if defined as separate and passed as parameter in controller method
    //still it is users choice.
    function EmployeeListController(employeeResource){
        var vm=this;    //going to use "ControllerAs" syntax, vm is for view model

       /* vm.employees=[
            {
                "emplId":1,
                "ecode":"E-1001",
                "ename": "First Employee",
                "joiningDate": "January 29, 2014",
                "salary": 5000,
                "basic":3000,
                "houseAllowance":1000,
                "otherAllowance":1000,
                "imageUrl": "images/empl1.jpg"
            },
            {
                "emplId":2,
                "ecode":"E-1002",
                "ename": "Second Employee",
                "joiningDate": "February 05, 2012",
                "salary": 8000,
                "basic":6000,
                "houseAllowance":1000,
                "otherAllowance":1000,
                "imageUrl": "images/empl2.jpg"
            },
            {
                "emplId":3,
                "ecode":"E-1003",
                "ename": "Third Employee",
                "joiningDate": "March 01, 2015",
                "salary": 4000,
                "basic":2500,
                "houseAllowance":1000,
                "otherAllowance":500,
                "imageUrl": "images/empl3.jpg"
            }
        ]*/

        employeeResource.query(function(data){
           vm.employees = data;
        });
        vm.showImage=false;

        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }

        }

}());