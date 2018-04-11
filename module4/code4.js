function onSubmit() {
	//Type appropriate comment here, and begin script below
	
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
