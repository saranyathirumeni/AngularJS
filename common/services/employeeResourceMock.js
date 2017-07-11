
(function(){
    "use strict";
    var app = angular
                .module("employeeResourceMock",["ngMockE2E"]);

    app.run(function($httpBackend){
         var employees=[
         {
         "emplId":1,
         "ecode":"E-1001",
         "ename": "First Employee",
         "joiningDate": "January 29, 2015",
         "basic":3000,
         "houseAllowance":4,
         "otherAllowance":6,
         "imageUrl": "images/empl1.jpg"
         },
         {
         "emplId":2,
         "ecode":"E-1002",
         "ename": "Second Employee",
         "joiningDate": "February 05, 2012",
         "basic":6000,
         "houseAllowance":10,
         "otherAllowance":15,
         "imageUrl": "images/empl2.jpg"
         },
         {
         "emplId":3,
         "ecode":"E-1003",
         "ename": "Third Employee",
         "joiningDate": "March 01, 2015",
         "basic":4000,
         "houseAllowance":3,
         "otherAllowance":10,
         "imageUrl": "images/empl3.jpg"
         }
         ];

        var emplUrl = "/api/employees";
        $httpBackend.whenGET(emplUrl).respond(employees);

         var editingRegex = new RegExp(emplUrl+ "/[0-9][0-9]*",'');

         $httpBackend.whenGET(editingRegex).respond(function(method,url,data){


              var employee = {"emplId":0};
              var parameters=url.split('/');
              var length = parameters.length;
              var id = parameters[length - 1];


              if(id>0)
              {
                   for(var i=0;i< employees.length;i++) {
                        if(employees[i].emplId==id) {
                            employee = employees[i];
                             break;
                        }
                   };
              }
              return [200,employee,{}];

         });

         $httpBackend.whenPOST(emplUrl).respond(function(method,url,data){
            var employee = angular.fromJson(data);

              if (!employee.emplId) {
                   // new employee Id
                  employee.emplId = employees[employees.length - 1].emplId + 1;
                   employees.push(employee);
              }
              else {
                   // Updated employee
                   for (var i = 0; i < employees.length; i++) {
                        if (employees[i].emplId == employee.emplId) {
                             employees[i] = employee;
                             break;
                        }
                   };
              }
              return [200, employee, {}];

         });

         $httpBackend.whenGET(/app/).passThrough();
    });


}());