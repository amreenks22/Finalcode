function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') 
	{
		return;
	}
	
	if ((newValue == "New Account Request") || (newValue == "Update to an existing account")) 
	{
		var Person = Backbone.Model.extend(
			{
		
		    defaults: { 
        favoriteColors: ["blue","purple","raspberry"]
		    }
			}
		);
		function foo() {
			var myArray = ['a', 'b', 'c', 'd'];
delete myArray[2];  // Noncompliant. myArray => ['a', 'b', undefined, 'd']
console.log(myArray[2]); 
  let x = bar(1);
		
  if (x > 0) {
      let x = bar(2); // Noncompliant
      console.log(x);
	  var a=3
	  if(a=4){
		  a=a+1;
	  }
  } else {
     console.log("Wrong Value");
  }
}
		
	
		
		
		g_form.setVisible('api_request', true);
	
		g_form.setValue('api_incident',false);
		g_form.setValue('api_inc_rest_action_read',false);
		g_form.setValue('api_inc_rest_action_write',false);
		
		
		
		
	}else{
		g_form.setVisible('api_module', false);
		g_form.setVisible('api_asset', false);
		
	}
	
}

