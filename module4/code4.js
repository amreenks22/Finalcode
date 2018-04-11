function onSubmit() {
	//Type appropriate comment here, and begin script below
	if ((newValue == "New Account Request") || (newValue == "Update to an existing account")) {
		var Person = Backbone.Model.extend({
		
		    defaults: {  // Noncompliant; every instance of Person will share the same instance of favoriteColors
        favoriteColors: ["blue","purple","raspberry"]
    }
});
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
	
	var blr = g_form.getValue('api_change');
var dtc = g_form.getValue('api_change_rest_action_write'); 
var eag = g_form.getValue('api_change_type_normal');
var far = g_form.getValue('api_change_type_standard');
var hdc = g_form.getValue('api_change_type_emergency');



	
	if ((blr == 'true') && (dtc == 'true'))
		{
		
		if((eag == 'false') && (far == 'false') && (hdc == 'false'))  {
			
			alert("Please select at least one type of change check box before submitting!");
			return false;
		}
		
		}
		
	}
