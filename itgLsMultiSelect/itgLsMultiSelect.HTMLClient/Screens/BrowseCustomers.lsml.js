/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/itgls.js" />

myapp.BrowseCustomers.Customers_ItemTap_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Customers");

	// Call our itemTap, enabling multi-select
	itgLs.list.itemTap(list);

};
myapp.BrowseCustomers.GetCustomers_execute = function (screen) {

	// Ok... again get our list
	var list = screen.findContentItem("Customers");

	// Call our helper function to get a count of selected items
	var count = itgLs.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = itgLs.list.selected(list);

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
myapp.BrowseCustomers.SelectAllCustomers_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Customers");

	// Select all items in the list
	itgLs.list.selectAll(list);

};
myapp.BrowseCustomers.UnselectAllCustomers_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Customers");

	// Unselect all items in the list
	itgLs.list.unselectAll(list);

};
myapp.BrowseCustomers.SetLimit_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Customers");

	// Unselect all previously selected items for selection integrity
	itgLs.list.unselectAll(list);

	// Set our property to limit number of selections allowed
	screen.findContentItem("Customers").totalSelectionsAllowed = 4;

};
myapp.BrowseCustomers.NoLimits_execute = function (screen) {

	// Remove cap on number of selections
	screen.findContentItem("Customers").totalSelectionsAllowed = null;

};