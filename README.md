<h1 id="itgls-multi-select-tutorial">itgLs - Multi-Select Tutorial</h1>
<h3 id="enhancing-your-lightswitch-list-tiles-and-table-controls">Enhancing your LightSwitch List, Tiles and Table controls</h3>
<p>As of May 2014, Out of the Box LightSwitch list, tiles and table controls only allow for selection of a single item.</p>
<p><strong>Until now!</strong></p>
<p>Within the itgLs library we&#39;ve provided the functionality to enhance these controls</p>
<ul>
<li>Selection of multiple items</li>
<li>Limit the number of selections</li>
<li>Select all items</li>
<li>Unselect all items</li>
<li>Get the selected item count</li>
<li>Retrieve the data of the selected items</li>
<li>Multiple lists can be on the same screen</li>
<li>Same code base works across all 3 control types</li>
</ul>
<p>Sounds awesome eh?  So lets get started on how to implement this new functionality...</p>
<ol>
<li>Create a new LightSwitch 2013 HTML Application</li>
<li>Lets name it: itgLsMultiSelect</li>
<li>When at the Start with data screen, click on Attach to external...</li>
<li>Data Source Type: OData Service</li>
<li>OData service endpoint:<br><span style="margin-left: 30px;"><a href="http://services.odata.org/northwind/northwind.svc/">http://services.odata.org/northwind/northwind.svc/</a></li>
<li>Authentication type: None</li>
<li>Choose the following entities:<br><span style="margin-left: 30px;">Customer<br><span style="margin-left: 30px;">Employee<br><span style="margin-left: 30px;">Product</li>
<li>Name the data source: Northwind</li>
<li>Click the finish button</li>
<li>Close any open editor windows</li>
<li>Save your solution</li>
<li>Over in your your Solution Explorer pain</li>
<li>Add the following NuGet package to the HTML Client project<br><span style="margin-left: 30px;">lo-dash.js</li>
<li>From our <a href="https://github.com/dwm9100b/itgLs">GitHub repository</a><br><span style="margin-left: 30px;">Add itgLs.js to your Scripts folder<br><span style="margin-left: 30px;">Add itgLs.css to your Content folder</li>
<li>Now open up your default.htm file in the client project</li>
<li>Add lo-dash.js followed by itgLs.js to the scripts section</li>
<li>Add the itgLs.css as the last stylesheet</li>
<li>Right click on the Screens folder, select Add Screen...</li>
<li>Select Browse Data Screen</li>
<li>Screen Data: Northwind.Customers</li>
<li>Click ok</li>
<li>Save your solution, run the application</li>
<li>Go ahead and click on items, notice single selection</li>
<li>Stop your application</li>
<li>Click on the Tile List, Customers</li>
<li>Click on Item Tap in the properties window</li>
<li>Select Write my own method, default naming is fine</li>
<li>Click ok</li>
<li>Edit the execute code for your ItemTap</li>
<li>First, drag from solution explorer the file itgLs.js into the editor</li>
<li>This will give intellisense for our library</li>
<li>Now we only need two lines of code to enable multi-select<br><span style="margin-left: 30px;">Get the list contentItem<br><span style="margin-left: 30px;">Call our itemTap method<blockquote>
<pre><code>var list = screen.findContentItem(&quot;Customers&quot;);
itgLs.list.itemTap(list);</code></pre>
</blockquote>
</li>
<li>Save your solution, run your app</li>
<li>BOOM! Multi-Select enabled!</li>
<li>You can also unselect by clicking a selected item</li>
<li>Hmmmm... how do I get the data of the selected items?</li>
<li>Stop your application</li>
<li>Under the Customer List Tab, add a new Group</li>
<li>Move it right under the Command Bar</li>
<li>Change the type to be a Columns Layout</li>
<li>Add a new Button</li>
<li>Select Write my own method, name it: GetCustomers</li>
<li>Double click the button to edit the code</li>
<li>We&#39;re going to add a few lines<br><span style="margin-left: 30px;">Again, get the list contentItem<br><span style="margin-left: 30px;">Call our method to get the data, which returns an array of entities<br><span style="margin-left: 30px;">Then we&#39;ll display the data<blockquote>
<pre><code>var list = screen.findContentItem(&quot;Customers&quot;);
var count = itgLs.list.selectedCount(list);
var selected = itgLs.list.selected(list);
var text = &quot;Customers Selected\n\n&quot;;
_.forEach(selected, function(item) {
      text += item.CustomerID + &quot; - &quot; + item.CompanyName + &quot;\n&quot;;
});
text += &quot;\n\nCount = &quot; + count;
window.alert(text);</code></pre>
</blockquote>
</li>
<li>Save and run your application</li>
<li>Select a few items, click on Get Customers</li>
<li>Unselect a few, Get Customers, only selected get returned</li>
<li>Ok lets continue going thru adding functionality</li>
<li>Add a new button</li>
<li>Write my own method, name it: SelectAllCustomers</li>
<li>Edit the code and add the following<blockquote>
<pre><code>var list = screen.findContentItem(&quot;Customers&quot;);
itgLs.list.selectAll(list);</code></pre>
</blockquote>
</li>
<li>Starting to see the pattern?</li>
<li>Add another new button</li>
<li>Write my own method, name it: UnselectAllCustomers</li>
<li>Edit the code and add the following<blockquote>
<pre><code>var list = screen.findContentItem(&quot;Customers&quot;);
itgLs.list.unselectAll(List);</code></pre>
</blockquote>
</li>
<li>Save and run your application</li>
<li>Test your new buttons, Get Customers, etc.</li>
<li>Notice how responsive, even with a screen full of items</li>
<li>Next... lets add some buttons to set limits</li>
<li>Add a new button</li>
<li>Write my own method, name it: SetLimit</li>
<li>Edit the code and add the following<blockquote>
<pre><code>var list = screen.findContentItem(&quot;Customers&quot;);
list.totalSelectionsAllowed = 4;
itgLs.list.unselectAll(list);</code></pre>
</blockquote>
</li>
<li><em>We suggest you always unselectAll when setting a limit</em></li>
<li>Thats all for setting a limit on selections</li>
<li>But wait... there is more...</li>
<li>Add a new button</li>
<li>Write my own method, name it: NoLimits</li>
<li>Edit the code and add the following<blockquote>
<pre><code>screen.findContentItem(&quot;Customers&quot;).totalSelectionsAllowed = null;</code></pre>
</blockquote>
</li>
<li>Its that easy!</li>
<li>Save and run your application</li>
<li>Click on the Set Limit button</li>
<li>Select your 4 items, try and select a 5th</li>
<li>No can do!  Now unselect a selected and select another</li>
<li>Notice the Select All is no longer a valid option</li>
<li>Go click on no limits. </li>
<li>Test again, notice the limitations were removed</li>
<li>So what happens if this was a list vs a Tile List?</li>
<li>Stop your application</li>
<li>In the screen designer, change the control type to List</li>
<li>Run your app, test the functionality</li>
<li>As you see, same code, different control type, same results!</li>
<li>Now you ask... table too?</li>
<li>Yep!  Go ahead and change it to a table control</li>
<li>Run and test the app</li>
<li>Same code, works as expected on all 3 controls!</li>
</ol>
<p>So there you go... an easy, reproduceable method of enabling multi-select on your LightSwitch list controls.  You can even have multiple lists on the same screen, each will behave independently.  We&#39;ll leave that up to you to go play around and test.  Our sample project already has a multi-list screen if you want to go check it out.</p>
<p>Obviously if you are using an ItemTap to get to an edit/view screen, you would not implement this.  But for selection and batch processing, its key.</p>
<p>One final note regarding the Select All functionality.  We are selecting and working with rendered items.  So with virtual scrolling, not all items from a query have been returned and rendered.  Which means if you do a Select All, scroll and more data comes down, the new data is not selected.  Of course one could go and press the Select All button again, or you could do a dataBind and fire off another Select All.  But I don&#39;t see many instances of where that is appropriate.  But you could.</p>
<p>Enjoy!  More to come...</p>
