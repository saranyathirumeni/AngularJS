(function(){
   "use strict";
    angular
        .module("employeeManagement")
        .controller("DataAnalyticsController",["$scope","employees",DataAnalyticsController]);

        function DataAnalyticsController($scope,employees)
        {

            $scope.title="Data Analytics";

            var chartData=[];

            for(var i=0;i<employees.length;i++)
            {
                chartData.push({
                    x:employees[i].ename,
                    y:[employees[i].basic]
                });
            }

            $scope.dataValues={
                series:["Basic","HRA","OA"],
                data:chartData
            };


            $scope.configValues={
                title:"Data Analytics Title",
                tooltips:true,
                labels:false,
                mouseover:function(){},
                mouseout:function(){},
                click:function(){},
                legend:{
                    display:true,
                    position:'right'
                }
            };


        }
}());

