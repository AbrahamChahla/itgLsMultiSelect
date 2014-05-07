/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/itgls.js" />
/// <reference path="../scripts/lodash.js" />

myapp.BrowseEmployeesAndProducts.Employees_ItemTap_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Employees");

	// Call our itemTap, enabling multi-select
	itgLs.list.itemTap(list);

};
myapp.BrowseEmployeesAndProducts.GetEmployees_execute = function (screen) {

	// Ok... again get our list
	var list = screen.findContentItem("Employees");

	// Call our helper function to get a count of selected items
	var count = itgLs.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = itgLs.list.selected(list);

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
myapp.BrowseEmployeesAndProducts.SelectAllEmployees_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Employees");

	// Select all items in the list
	itgLs.list.selectAll(list);

};
myapp.BrowseEmployeesAndProducts.UnselectAllEmployees_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Employees");

	// Unselect all items in the list
	itgLs.list.unselectAll(list);

};
myapp.BrowseEmployeesAndProducts.SetEmployeeLimits_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Employees");

	// Unselect all previously selected items for selection integrity
	itgLs.list.unselectAll(list);

	// Set our property to limit number of selections allowed
	screen.findContentItem("Employees").totalSelectionsAllowed = 4;

};
myapp.BrowseEmployeesAndProducts.NoEmployeeLimits_execute = function (screen) {

	// Remove cap on number of selections
	screen.findContentItem("Employees").totalSelectionsAllowed = null;

};
myapp.BrowseEmployeesAndProducts.Products_ItemTap_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Products");

	// Call our itemTap, enabling multi-select
	itgLs.list.itemTap(list);

};
myapp.BrowseEmployeesAndProducts.GetSelectedProducts_execute = function (screen) {

	// Ok... again get our list
	var list = screen.findContentItem("Products");

	// Call our helper function to get a count of selected items
	var count = itgLs.list.selectedCount(list);

	// Call our helper function to get an array of selected items
	var selected = itgLs.list.selected(list);

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
myapp.BrowseEmployeesAndProducts.SelectAllProducts_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Products");

	// Select all items in the list
	itgLs.list.selectAll(list);

};
myapp.BrowseEmployeesAndProducts.UnselectAllProducts_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Products");

	// Unselect all items in the list
	itgLs.list.unselectAll(list);

};
myapp.BrowseEmployeesAndProducts.SetProductLimits_execute = function (screen) {

	// Get our list
	var list = screen.findContentItem("Products");

	// Unselect all previously selected items for selection integrity
	itgLs.list.unselectAll(list);

	// Set our property to limit number of selections allowed
	screen.findContentItem("Products").totalSelectionsAllowed = 4;

};
myapp.BrowseEmployeesAndProducts.NoProductLimits_execute = function (screen) {

	// Remove cap on number of selections
	screen.findContentItem("Products").totalSelectionsAllowed = null;

};
