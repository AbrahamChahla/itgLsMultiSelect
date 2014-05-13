/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/lodash.js" />
/// <reference path="../scripts/lswires.js" />


// ============================================================================================
// Our Employees list
// ============================================================================================
myapp.BrowseEmployeesAndProducts.Employees_postRender = function (element, contentItem) {

	// Enable multi-item selection on this list, persist selections
	lsWire.list.enableMultiSelect(contentItem, {
		persistSelections: true
	});

};
myapp.BrowseEmployeesAndProducts.GetEmployees_execute = function (screen) {

	// Ok... again get our list
	var list = screen.findContentItem("Employees");

	// Call our helper function to get a count of selected items
	var count = lsWire.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = lsWire.list.selected(list);

	// To show we did get multi-select with real data returned, lets just do a popup
	var text = "Employees Selected\n\n";
	_.forEach(selected, function (item) {
		text += item.EmployeeID + " - " + item.LastName + "\n";
	})

	// Now lets add a count to the bottom of our display
	text += "\n\nCount = " + count;

	// Now our popup
	window.alert(text);

};
myapp.BrowseEmployeesAndProducts.AllEmployees_render = function (element, contentItem) {

	// Render a checkbox to select/unselect all employees
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox value changes, select/unselect all items
	contentItem.dataBind("screen.AllEmployees", function (newValue) {
		if (newValue != undefined) {
			var list = contentItem.screen.findContentItem("Employees");
			lsWire.list.selectAll(list, newValue);
		}
	});

};
myapp.BrowseEmployeesAndProducts.LimitEmployees_render = function (element, contentItem) {

	// Render a checkbox to limit/remove the limit for employees
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox value changes, either set or remove the limit
	contentItem.dataBind("screen.LimitEmployees", function (newValue) {

		if (newValue !== undefined) {

			// Our dependent item
			var selectAll = contentItem.screen.findContentItem("AllEmployees");

			// Get our list
			var list = contentItem.screen.findContentItem("Employees");

			// Current count of selected items
			var count = lsWire.list.selectedCount(list);

			// If the checkbox is selected, limit to 4 items
			if (newValue != undefined && newValue === true) {

				// Set our limit, returns the limit count
				var ttl = lsWire.list.totalSelectionsAllowed(list, 4);

				// if select all was set, checked
				if (selectAll.value === true)

					// set the property to false, dataBinding will do the rest
					contentItem.screen.AllEmployees = false;

				// Else is the current count greater than our limit?
				else if (count > ttl) {

					// Count is greater, so unselect all items
					lsWire.list.selectAll(list, false);
				}

				// Since we are limiting, disable the select all checkbox
				selectAll.isEnabled = false;
			} else {

				// Limit was unselected, renable select all and remove limits
				selectAll.isEnabled = true;
				lsWire.list.totalSelectionsAllowed(list, null);
			}
		}
	});

};

myapp.BrowseEmployeesAndProducts.PersistEmployeeSelections_render = function (element, contentItem) {

	// Get a handle to our list
	var list = contentItem.screen.findContentItem("Employees");

	// Get our current persist setting
	var persist = lsWire.list.persistSelections(list);
	if (persist === undefined) persist = true;

	// Go render our checkbox with an initialized value
	lsWire.checkbox.render(element, contentItem, { initialValue: persist });

	// When user changes, set our global
	contentItem.dataBind("value", function (newPersist) {

		if (newPersist != undefined && list.lsWire.persistSelections !== undefined) {
			lsWire.list.persistSelections(list, newPersist);
		}
	});

};

myapp.BrowseEmployeesAndProducts.rows_postRender = function (element, contentItem) {

	// When the rows get rendered, check if they need to be reselected.
	// Only of value if persistSelections has been set
	lsWire.list.reselect(contentItem);

};



// ============================================================================================
// Our Products table
// ============================================================================================
myapp.BrowseEmployeesAndProducts.Products_postRender = function (element, contentItem) {

	// Enable multi-item selections for this table
	lsWire.list.enableMultiSelect(contentItem);

};

myapp.BrowseEmployeesAndProducts.GetProducts_execute = function (screen) {

	// Ok... again get our list
	var list = screen.findContentItem("Products");

	// Call our helper function to get a count of selected items
	var count = lsWire.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = lsWire.list.selected(list);

	// To show we did get multi-select with real data returned, lets just do a popup
	var text = "Products Selected\n\n";
	_.forEach(selected, function (item) {
		text += item.ProductID + " - " + item.ProductName + "\n";
	})

	// Now lets add a count to the bottom of our display
	text += "\n\nCount = " + count;

	// Now our popup
	window.alert(text);

};


myapp.BrowseEmployeesAndProducts.AllProducts_render = function (element, contentItem) {

	// Render a checkbox for selecting all products
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox changes, select/unselect all table items
	contentItem.dataBind("screen.AllProducts", function (newValue) {
		if (newValue != undefined) {
			var list = contentItem.screen.findContentItem("Products");
			lsWire.list.selectAll(list, newValue);
		}
	});
};

myapp.BrowseEmployeesAndProducts.LimitProducts_render = function (element, contentItem) {

	// Render a checkbox for limiting/remove limit
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox changes, either set or remove the limit
	contentItem.dataBind("screen.LimitProducts", function (newValue) {

		if (newValue !== undefined) {
			// Our dependent item
			var selectAll = contentItem.screen.findContentItem("AllProducts");

			// Get our list
			var list = contentItem.screen.findContentItem("Products");
			// Current count of selected items
			var count = lsWire.list.selectedCount(list);

			// If the checkbox is selected, limit to 4 items
			if (newValue != undefined && newValue === true) {

				// Set our limit, returns the limit count
				var ttl = lsWire.list.totalSelectionsAllowed(list, 4);

				// if select all was set, checked
				if (selectAll.value === true)

					// set the property to false, dataBinding will do the rest
					contentItem.screen.AllProducts = false;

					// Else is the current count greater than our limit?
				else if (count > ttl) {

					// Count is greater, so unselect all items
					lsWire.list.selectAll(list, false);
				}

				// Since we are limiting, disable the select all checkbox
				selectAll.isEnabled = false;
			} else {

				// Limit was unselected, renable select all and remove limits
				selectAll.isEnabled = true;
				lsWire.list.totalSelectionsAllowed(list, null);
			}
		}
	});

};

myapp.BrowseEmployeesAndProducts.PersistProductSelections_render = function (element, contentItem) {

	// Get a handle to our list
	var list = contentItem.screen.findContentItem("Products");

	// Get our current persist setting
	var persist = lsWire.list.persistSelections(list);
	if (persist === undefined) persist = false;

	// Go render our checkbox with an initialized value
	lsWire.checkbox.render(element, contentItem, { initialValue: persist });

	// When user changes, set our persistence setting
	contentItem.dataBind("value", function (newPersist) {

		if (newPersist != undefined && list.lsWire.persistSelections !== undefined) {
			lsWire.list.persistSelections(list, newPersist);
		}
	});


};

myapp.BrowseEmployeesAndProducts.ProductsTemplate_postRender = function (element, contentItem) {

	// When the rows get rendered, check if they need to be reselected.
	// Only of value if persistSelections has been set
	lsWire.list.reselect(contentItem);

};


