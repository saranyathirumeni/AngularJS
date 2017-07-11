(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("employeeResource",["$resource",employeeResource]);

    function employeeResource($resource){

        return $resource ("/api/employees/:emplId");
    }

}());
