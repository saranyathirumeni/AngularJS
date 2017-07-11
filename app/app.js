(function() {
    "use strict";
    var app = angular.module("employeeManagement",
        ["common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap",
            "angularCharts",
         "employeeResourceMock"]);

    app.config(function ($provide) {
        $provide.decorator("$exceptionHandler",
            ["$delegate",
                function ($delegate) {
                    return function (exception, cause) {
                        exception.message = "User friendly message goes here!!! \n Message: " +
                        exception.message;
                        $delegate(exception, cause);
                        alert(exception.message);
                    };
                }]);
    });

    app.config(["$stateProvider",
                "$urlRouterProvider",
                    function($stateProvider,$urlRouterProvider){
                        console.log($urlRouterProvider);
                        $urlRouterProvider.otherwise("/");


                        $stateProvider

                            .state("home",{
                                url:"/",
                                templateUrl:"app/mainView.html"

                            })
                            .state("emplList",{
                                url:"/personaldetails",
                                templateUrl:"app/personaldetails/emplListView.html",
                                controller: "EmployeeListController as vm"
                            })
                            .state("emplEdit",{
                                abstract:true,
                                url:"/personaldetails/edit/:emplId",
                                templateUrl:"app/personaldetails/emplEditView.html",
                                controller: "EmployeeEditController as vm",
                                resolve:{
                                    employeeResource :"employeeResource", //defining dependency, key name can be any name
                                    employee: function(employeeResource,$stateParams) {

                                        var emplId = $stateParams.emplId;
                                        return employeeResource.get({emplId: emplId}).$promise;
                                    }
                                }

                            })
                            .state("emplEdit.personal",{
                                url:"/personal",
                                templateUrl:"app/personaldetails/emplEditPersonalView.html"

                            })
                            .state("emplEdit.salary",{
                                url:"/salary",
                                templateUrl:"app/personaldetails/emplEditSalaryView.html"

                            })

                            .state("emplDetail",{
                                url:"/personaldetails/:emplId",
                                templateUrl:"app/personaldetails/emplDetailsView.html",
                                controller: "EmployeeDetailController as vm", //Once resolve returned success, controller created
                                resolve:{
                                    employeeResource :"employeeResource", //defining dependency, key name can be any name
                                    employee: function(employeeResource,$stateParams) {

                                        var emplId = $stateParams.emplId;
                                        return employeeResource.get({emplId: emplId}).$promise;
                                    }
                                }
                            })

                            .state("dataAnalytics",{

                                url: "/dataAnalytics",
                                templateUrl:"app/salarydetails/dataAnalyticsView.html",
                                controller:"DataAnalyticsController",
                                resolve: {
                                    employeeResource : "employeeResource",
                                    employees: function(employeeResource){

                                        return employeeResource.query(function(response) {
                                                // no code needed for success
                                            },
                                            function(response) {
                                                if (response.status == 404) {
                                                    alert("Desired message for 404 error- " +
                                                    response.config.method + " " +response.config.url);
                                                } else {
                                                    alert(response.statusText);
                                                }
                                            }).$promise;
                                    }
                                }
                            })
                    }]

    );

}());
