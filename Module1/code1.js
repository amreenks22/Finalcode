function onSubmit() {
	//Type appropriate comment here, and begin script below
	var bl = g_form.getValue('api_incident');
	var dt = g_form.getValue('api_inc_rest_action_write');
	var ea = g_form.getValue('api_inc_action_create');
	var fa = g_form.getValue('api_inc_action_read');
	var hd = g_form.getValue('api_inc_action_update');
	
	
	
	
	if ((bl == 'true') && (dt == 'true'))
		{
		
		if((ea == 'false') && (fa == 'false') && (hd == 'false'))  {
			
			alert("Please select at least one check box for actions on incidents before submitting!");
			return false;
		}
		
		
		
		
		
	}
}
