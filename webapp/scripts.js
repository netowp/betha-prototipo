jQuery(function($){
   $("#cadastro-imob").mask("99.999.9999.999.99.999",{placeholder:"00.000.0000.000.00.000"});
   $("#phone").mask("(999) 999-9999");
   $("#tin").mask("99-9999999");
   $("#ssn").mask("999-99-9999");
});

$(document).ready(function(){	
   $("#cpf").mask("99.999.9999.999.99.999", {placeholder:"00.000.0000.000.00.000"});
});