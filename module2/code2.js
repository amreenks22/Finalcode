function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	if ((newValue != "New Account Request") || (newValue != "Update to an existing account")) {
	g_form.setVisible('api_module', false);
	g_form.setVisible('api_asset', false);
	g_form.setVisible('api_change', false);
	g_form.setVisible('api_problem', false);
	g_form.setVisible('api_config', false);
	g_form.setVisible('api_request', false);
	g_form.setVisible('api_core', false);
	g_form.setVisible('api_incident', false);
	//Type appropriate comment here, and begin script below
	}
}
