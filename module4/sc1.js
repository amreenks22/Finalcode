function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	
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
		
	
		
		g_form.setVisible('api_module', true);
		
		g_form.setVisible('api_asset', true);
		g_form.setValue('api_asset',false);
		g_form.setValue('api_asset_rest_action_read',false);
		g_form.setValue('api_asset_rest_action_write',false);
		
		g_form.setVisible('api_change', true);
		g_form.setValue('api_change',false);
		g_form.setValue('api_change_rest_action_read',false);
		g_form.setValue('api_change_rest_action_write',false);
		
		g_form.setVisible('api_problem', true);
		g_form.setValue('api_problem',false);
		g_form.setValue('api_problem_rest_action_read',false);
		
		g_form.setVisible('api_config', true);
		g_form.setValue('api_config',false);
		g_form.setValue('api_config_rest_action_read',false);
		g_form.setValue('api_config_rest_action_write',false);
		
		g_form.setVisible('api_request', true);
		g_form.setValue('api_request',false);
		g_form.setValue('api_request_rest_action_read',false);
		g_form.setValue('api_request_rest_action_write',false);
		
		g_form.setVisible('api_core', true);
		g_form.setValue('api_core',false);
		g_form.setValue('api_core_rest_action_read',false);
		
		g_form.setVisible('api_incident', true);
		g_form.setValue('api_incident',false);
		g_form.setValue('api_inc_rest_action_read',false);
		g_form.setValue('api_inc_rest_action_write',false);
		
		// Rest Action variables:
		g_form.setValue('api_change_type_normal', false);
		g_form.setValue('api_change_type_standard', false);
		g_form.setValue('api_change_type_emergency', false);
		g_form.setValue('api_change_ticket_source', '');
		g_form.setValue('api_change_ticket_comp', '');
		g_form.setValue('api_change_frontend', '');
		g_form.setValue('api_config_req', '');
		g_form.setValue('api_config_ci', '');
		g_form.setValue('api_config_usecase', '');
		g_form.setValue('api_config_data', '');
		g_form.setValue('api_config_req_timeline', '');
		g_form.setValue('api_config_link', '');
		g_form.setValue('api_inc_action_create', false);
		g_form.setValue('api_inc_action_update', false);
		g_form.setValue('api_inc_action_read', false);
		g_form.setValue('api_inc_openedby', '');
		g_form.setValue('api_inc_ticket_source', '');
		g_form.setValue('api_inc_ticket_comp', '');
		g_form.setValue('api_inc_frontend', '');
		g_form.setValue('api_inc_monitoring', '');
		g_form.setValue('api_inc_frontend_yes', '');
		g_form.setValue('api_inc_monitoring_yes', '');
		g_form.setValue('api_request_items', '');
		g_form.setValue('api_request_ticket_source', '');
		g_form.setValue('api_request_ticket_comp', '');
		g_form.setValue('api_request_frontend', '');
		g_form.setValue('api_request_req', '');
		g_form.setValue('api_request_items_yes', '');
		g_form.setValue('api_asset_req', '');
		g_form.setValue('api_asset_action', '');
		g_form.setValue('api_asset_usecase', '');
		g_form.setValue('api_asset_data', '');
		g_form.setValue('api_asset_link', '');
		
	}else{
		g_form.setVisible('api_module', false);
		g_form.setVisible('api_asset', false);
		g_form.setVisible('api_change', false);
		g_form.setVisible('api_problem', false);
		g_form.setVisible('api_config', false);
		g_form.setVisible('api_request', false);
		g_form.setVisible('api_core', false);
		g_form.setVisible('api_incident', false);
	}
	
}

