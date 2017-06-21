
	var spc_href = location.href.substring (0, location.href.indexOf('MESM')) + "SPCMC/";

	var oMenuButton1 = new sap.ui.commons.MenuButton({text: "Settings", icon: "Common/img/map.png"}); 
	var oMenuButton2 = new sap.ui.commons.MenuButton({ text: "Dashboards", icon: "Common/img/cloud.png"}); 
	var oMenuButton3 = new sap.ui.commons.MenuButton({text: "Reports", icon: "Common/img/list.png"});

	// Create the button menus
	var oMenu1 = new sap.ui.commons.Menu("menu1", {ariaDescription: "Application Setup", enabled:true});
	var oMenu2 = new sap.ui.commons.Menu("menu2", {ariaDescription: "User Dashboards", enabled:true});
	var oMenu3 = new sap.ui.commons.Menu("menu3", {ariaDescription: "User Reports", enabled:true});

	// Create the items and add them to the menu 1------------------	Application Setup		-------------------------------------	

		var oMenuItem1 = new sap.ui.commons.MenuItem("item1-0-1",{text: "Enterprise Hierarchy", enabled: false});
		oMenu1.addItem(oMenuItem1);
		var oMenuItem2 = new sap.ui.commons.MenuItem("item1-0-2",{text: " ???", enabled: false});
		//oMenu1.addItem(oMenuItem2);
		var oMenuItem3 = new sap.ui.commons.MenuItem("item1-0-3",{text: "MES Memory Maps", enabled: false});
		oMenu1.addItem(oMenuItem3);
		var oMenuItem4 = new sap.ui.commons.MenuItem("item1-0-4",{text: "Plant Connectivity", enabled: false});
		oMenu1.addItem(oMenuItem4);
		var oMenuItem5 = new sap.ui.commons.MenuItem("item1-0-5",{text: "Master Data Setup", enabled: false});
		oMenu1.addItem(oMenuItem5);
		//----------------------SPC---------------------------------------

		

	//-------------------------------------------------------------------------

	// Create submenu 4 	----------------	Hierarchy Setup			------------------------------

		var oMenu4 = new sap.ui.commons.Menu("menu4", {ariaDescription: "Hierarchy Setup", enabled:true});
		oMenuItem1.setSubmenu(oMenu4);
		//Create the items and add them to the sub menu
		var oMenuItem41 = new sap.ui.commons.MenuItem("item1-4-1",{text: "Hierarchy Management", enabled: false});
		oMenu4.addItem(oMenuItem41);
		var oMenuItem42 = new sap.ui.commons.MenuItem("item1-4-2",{text: "Hierarchy Levels Setup", enabled: false});
		oMenu4.addItem(oMenuItem42);

	// Create  submenu  5  	--------------	Memory Maps Setup		--------------------------

		var oMenu5 = new sap.ui.commons.Menu("menu5", {ariaDescription: "Memory Maps Setup", enabled:true});
		oMenuItem3.setSubmenu(oMenu5);
		//Create the items and add them to the sub menu
		var oMenuItem51 = new sap.ui.commons.MenuItem("item1-5-1",{text: "Memory Map Tags", enabled: false});
		oMenu5.addItem(oMenuItem51);
		var oMenuItem52 = new sap.ui.commons.MenuItem("item1-5-2",{text: "Memory Map Transactions", enabled: false});
		oMenu5.addItem(oMenuItem52);
		var oMenuItem53 = new sap.ui.commons.MenuItem("item1-5-3",{text: "PLC Tag Groups", enabled: false});
		oMenu5.addItem(oMenuItem53);
		var oMenuItem54 = new sap.ui.commons.MenuItem("item1-5-4",{text: "PLC Tag Types", enabled: false});
		oMenu5.addItem(oMenuItem54);
		var oMenuItem55 = new sap.ui.commons.MenuItem("item1-5-5",{text: "PLC Tag Functions", enabled: false});
		oMenu5.addItem(oMenuItem55);

	// Create submenu  6  	--------------	Connectivity Setup	-------------------------

		var oMenu6 = new sap.ui.commons.Menu("menu6", {ariaDescription: "Connectivity Setup", enabled:true});
		oMenuItem4.setSubmenu(oMenu6);
		//Create the items and add them to the sub menu
		var oMenuItem61 = new sap.ui.commons.MenuItem("item1-6-1",{text: "Shop Floor Operators", enabled: false});
		oMenu6.addItem(oMenuItem61);
		var oMenuItem62 = new sap.ui.commons.MenuItem("item1-6-2",{text: "Shop Floor Computers", enabled: false});
		oMenu6.addItem(oMenuItem62);
		var oMenuItem63 = new sap.ui.commons.MenuItem("item1-6-3",{text: "Shop Floor Printers", enabled: false});
		oMenu6.addItem(oMenuItem63);
		var oMenuItem64 = new sap.ui.commons.MenuItem("item1-6-4",{text: "Plant Connectivity Servers", enabled: false});
		oMenu6.addItem(oMenuItem64);
		var oMenuItem65 = new sap.ui.commons.MenuItem("item1-6-5",{text: "Plant Connectivity Agents", enabled: false});
		oMenu6.addItem(oMenuItem65);
		var oMenuItem66 = new sap.ui.commons.MenuItem("item1-6-6",{text: "Line Side SQL Servers", enabled: false});
		oMenu6.addItem(oMenuItem66);
		var oMenuItem67 = new sap.ui.commons.MenuItem("item1-6-7",{text: "File Connectivity Servers", enabled: false});
		oMenu6.addItem(oMenuItem67);
		var oMenuItem68 = new sap.ui.commons.MenuItem("item1-6-8",{text: "File Connectivity Agents", enabled: false});
		oMenu6.addItem(oMenuItem68);

	// Create  submenu  7  	--------------	Master Data		------------------------

		var oMenu7 = new sap.ui.commons.Menu("menu7", {ariaDescription: "Master Data", enabled:true});
		oMenuItem5.setSubmenu(oMenu7);
		//Create the items and add them to the sub menu
		var oMenuItem71 = new sap.ui.commons.MenuItem("item1-7-1",{text: "Units Of Measure", enabled: false});
		oMenu7.addItem(oMenuItem71);
		var oMenuItem72 = new sap.ui.commons.MenuItem("item1-7-2",{text: "Products Management", enabled: false});
		oMenu7.addItem(oMenuItem72);
		var oMenuItem73 = new sap.ui.commons.MenuItem("item1-7-3",{text: "Bills of Materials", enabled: false});
		oMenu7.addItem(oMenuItem73);
		var oMenuItem74 = new sap.ui.commons.MenuItem("item1-7-4",{text: "Products Routing", enabled: false});
		oMenu7.addItem(oMenuItem74);

	// Create  submenu  8  (SPC)	--------------	Plant Data		------------------------

	
	// Create  submenu  9  (SPC)	--------------	Station Data		-----------------------

	
	// Create  submenu  10  (SPC)	--------------	Parts Data		-----------------------

		
	// Create  submenu  11  (SPC)	--------------	Charts		----------------------

		
	// Create  submenu  12  (SPC)	--------------	Operator Data		---------------------

		
	// Create  submenu  13  (SPC)	--------------	Subscriptions Data		--------------------

	

	//----------------------------------------------------------------------

	// Create the items and add them to the menu 2

		var oMenuItem21 = new sap.ui.commons.MenuItem("item2-0-1",{text: "Work Order Management", enabled:false});
		oMenu2.addItem(oMenuItem21);
		var oMenuItem22 = new sap.ui.commons.MenuItem("item2-0-2",{text: "Carrier Station Dashboard", enabled:false});
		oMenu2.addItem(oMenuItem22);
		var oMenuItem23 = new sap.ui.commons.MenuItem("item2-0-3",{text: "Assembly Station Dashboard", enabled:false});
		oMenu2.addItem(oMenuItem23);
		//----------------------- SPC--------------------------------------
		
	//----------------------------------------------------------------------

	// Create the items and add them to the menu 3

		var oMenuItem31 = new sap.ui.commons.MenuItem("item3-0-1",{text: "Production Status Report", enabled:false});
		oMenu3.addItem(oMenuItem31);
		var oMenuItem32 = new sap.ui.commons.MenuItem("item3-0-2",{text: "Item Traceability Report", enabled:false});
		oMenu3.addItem(oMenuItem32);
		var oMenuItem33 = new sap.ui.commons.MenuItem("item3-0-3",{text: "Connector Diagnostics", enabled:false});
		oMenu3.addItem(oMenuItem33);
		//----------------------- SPC--------------------------------------
	

	// ******************************************************************************************************************************************************************

	//Attach the Menu to the MenuButton
	oMenuButton1.setMenu(oMenu1);
	oMenuButton2.setMenu(oMenu2);
	oMenuButton3.setMenu(oMenu3);

	// ******************************************************************************************************************************************************************


//Attach an event to raise an alert when an item is selected (Button 1)

	oMenuButton1.attachItemSelected(function (oEvent){

		//	alert( oEvent.getParameter("itemId"));

		switch( oEvent.getParameter("itemId")) {
	
			// SubMenu Settings 4

			case "item1-4-1":
				setTimeout("location.href = '" + "MgtHierarchy.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-4-2":
				setTimeout("location.href = '" + "LvlHierarchy.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;

			// SubMenu Settings 5

			case "item1-5-1":
				setTimeout("location.href = '" + "MemMapTags.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-5-2":
				setTimeout("location.href = '" + "MemMapTrxs.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-5-3":
				setTimeout("location.href = '" + "TagCommGroups.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-5-4":
				setTimeout("location.href = '" + "TagTypes.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-5-5":
				setTimeout("location.href = '" + "TagFunctions.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;

			// SubMenu Settings 6

			case "item1-6-1":
				setTimeout("location.href = '" + "Operators.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-2":
				setTimeout("location.href = '" + "Stations.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-3":
				setTimeout("location.href = '" + "Printers.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-4":
				setTimeout("location.href = '" + "PCoServers.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-5":
				setTimeout("location.href = '" + "PCoAgents.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-6":
				setTimeout("location.href = '" + "SqlServers.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-6-7":
				setTimeout("location.href = '" + "PCoFileServers.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
			break;
				case "item1-6-8":
				setTimeout("location.href = '" + "PCoFileAgents.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
			break;

			// SubMenu Settings 7

			case "item1-7-1":
				setTimeout("location.href = '" + "UnitsOfMeasure.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-7-2":
				setTimeout("location.href = '" + "ProductsMgmt.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-7-3":
				setTimeout("location.href = '" + "BomMgmt.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item1-7-4":
				setTimeout("location.href = '" +  "RoutingMgmt.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;

			// SPC Home

		

			// SubMenu Settings 8

			
				// SubMenu Settings 9

			

		// SubMenu Settings 10

			
	
		// SubMenu Settings 11

			

		// SubMenu Settings 12

			
		// SubMenu Settings 13

			

			// Menu Default
			default:
				// alert("Items \"" + oEvent.getParameter("itemId") + "\" was selected.");
			break;
		}
	});

//Attach an event to raise an alert when an item is selected (Button 2)

	oMenuButton2.attachItemSelected(function (oEvent){
		switch( oEvent.getParameter("itemId")) {
			case "item2-0-1":
				setTimeout("location.href = '" + "WorkOrders.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item2-0-2":
				setTimeout("location.href = '" + "CarrierDashboard.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item2-0-3":
				setTimeout("location.href = '" + "AssemblyDashboard.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			default:
				// alert("Items \"" + oEvent.getParameter("itemId") + "\" was selected.");
				break;
		}
	});

//Attach an event to raise an alert when an item is selected. (Button 3)

	oMenuButton3.attachItemSelected(function (oEvent){
		switch( oEvent.getParameter("itemId")) {
			// Menu Reports
			case "item3-0-1":
				setTimeout("location.href = '" + "ProductionStatus.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item3-0-2":
				setTimeout("location.href = '" + "ItemTraceability.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			case "item3-0-3":
				setTimeout("location.href = '" + "MESM.irpt?ROLE=" + document.getElementById("user_role").value + "'",0);
				break;
			
			default:
				//alert("Items \"" + oEvent.getParameter("itemId") + "\" was selected.");
				break;
		}
	});

