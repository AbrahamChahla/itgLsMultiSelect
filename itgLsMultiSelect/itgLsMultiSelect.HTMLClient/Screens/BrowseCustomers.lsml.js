/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/lodash.js" />
/// <reference path="../scripts/lswires.js" />

myapp.BrowseCustomers.Customers_postRender = function (element, contentItem) {

	// Enable multi-item selection on this tile control
	lsWire.list.enableMultiSelect(contentItem);

};
myapp.BrowseCustomers.GetCustomers_execute = function (screen) {

	// Ok... get our list
	var list = screen.findContentItem("Customers");

	// Call our helper function to get a count of selected items
	var count = lsWire.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = lsWire.list.selected(list);

	// To show we did get multi-select with real data returned, lets just do a popup
	var text = "Customers Selected\n\n";
	_.forEach(selected, function (item) {
		text += item.CustomerID + " - " + item.CompanyName + "\n";
	})

	// Now lets add a count to the bottom of our display
	text += "\n\nCount = " + count;

	// Now our popup
	window.alert(text);

};
myapp.BrowseCustomers.SelectAll_render = function (element, contentItem) {

	// Render a checkbox
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox changes state, either select all or not
	contentItem.dataBind("screen.SelectAll", function (newValue) {
		if (newValue != undefined) {
			var list = contentItem.screen.findContentItem("Customers");
			lsWire.list.selectAll(list, newValue);
		}
	});

};
myapp.BrowseCustomers.SetLimits_render = function (element, contentItem) {

	// Render our checkbox
	lsWire.checkbox.render(element, contentItem);

	// When the checkbox changes state, set or remove our limits
	contentItem.dataBind("screen.SetLimits", function (newValue) {
		
		if (newValue !== undefined) {

			// Our dependent item
			var selectAll = contentItem.screen.findContentItem("SelectAll");

			// Get our list
			var list = contentItem.screen.findContentItem("Customers");

			// Current count of selected items
			var count = lsWire.list.selectedCount(list);

			// If the checkbox is selected, limit to 4 items
			if (newValue != undefined && newValue === true) {

				// Set our limit, returns the limit count
				var ttl = lsWire.list.totalSelectionsAllowed(list, 4);

				// if select all was set, checked
				if (selectAll.value === true)

					// set the property to false, dataBinding will do the rest
					contentItem.screen.SelectAll = false;

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
