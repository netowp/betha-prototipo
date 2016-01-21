jQuery(function($){
   $("#cadastro-imob").mask("99.999.9999.999.99.999",{placeholder:"00.000.0000.000.00.000"});
   $("#cpf2").mask("999.999.999-99");
   $("#cnpj").mask("99-9999999");
});

$(document).ready(function(){	
   $("#cpf").mask("99.999.9999.999.99.999", {placeholder:"00.000.0000.000.00.000"});
});

var app = angular.module('betha', []);

app.controller('pagamentosControl', function($scope, $http) {
   $http.get("pagamentos.js")
      .then(function (response) {$scope.pagamentos = response.data.pagamentos;});
});

app.controller('financasControl', function($scope, $http) {
   $http.get("financas.js")
      .then(function (response) {$scope.financas = response.data;});
});