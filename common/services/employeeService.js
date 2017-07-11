(function(){
    "use strict";
    //registering with common.services
    angular
        .module("common.services")
        .factory("employeeService",employeeService);

    function employeeService(){

        function calculateHRA(basic,houseAllowance)
        {

            var hra =  (basic * houseAllowance)/100;
            hra = Math.round(hra);

            return hra;
        }
        function calculateOtherAllowances(basic,otherAllowances){
            var othAll = (basic * otherAllowances)/100;
            othAll = Math.round(othAll);
            return othAll;
        }
        //can have multiple functions in single service.
        return {
            calculateHRA: calculateHRA,
            calculateOtherAllowances:calculateOtherAllowances

        };
    }
}());