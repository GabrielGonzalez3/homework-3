$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    //This is for the username part, it is inserted, but not static
    function header(){
        $("#username").text(username);
    }
    header(); 

    //Adds in the information that is provided, same concept as the header function, but for stats
    function stats(){
        $(".revenue-amt").text(revenueAmt);
        $("#customer-num").text(customerNum);
        $("#orders-amt").text(ordersAmt);
        $("#issues-amt").text(issuesAmt);
    }
    stats();

    // General run down is we include each object inside of the table rather that calling thorugh text alone
    function salestable(){
        const tabody = $("#salesTableBody");
        tabody.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        sales.forEach(function (varaible){
            const row = ` <tr>
                <td>${varaible.product}</td>
                <td>${varaible.quantity}</td>
                <td>${varaible.revenue}</td>
                </tr>`;
            tabody.append(row);
            //All this does add it to the table
        });
    }
    //Well thats my general understanding for it
    salestable();

    //Alright so this quite literally a copy and past of the salestable function
    function customerTable(){
        const tabody = $("#customerTableBody");
        tabody.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        customers.forEach(function (item){

            //This checks to see if the status is active or pending
            let statusClass = "";
            if(item.status === "Active"){
                statusClass = "status-active";
            }
            else{
                statusClass = "status-pending";
            }
            //Will be used to give a green hue if active or an orange one if pending

            const row = ` <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td><span class ="status ${statusClass}">${item.status}</span> </td>
                <td>${item.joined}</td>
                </tr>`;
            tabody.append(row);
            //All this does add it to the table
        });
    }
    customerTable();

    //Again same concept except it's a list and not a table
    function Activitylist(){
        const list = $("#activity-list");
        list.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        activities.forEach(function (varaible){
            const item = `<li>${varaible.message}</li>`;
            list.append(item);
            //All this does add it to the list
        });
    }
    Activitylist();

    // Essentailly like Activitylist
    function SystemStats(){
        const list = $("#system-status-list");
        list.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        messages.forEach(function (varaible){
            const item = `<li>${varaible.messsage}</li>`;
            list.append(item);
            //All this does add it to the list
        });
    }
    SystemStats();

    // Essentually like Activitylist just with an added step
    function Notifications(){
        //Just creates the number of notificaitons in the list
        $("#notification-num").text(notifications.length);
        
        const list = $("#notifications-list");
        list.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        notifications.forEach(function (varaible){
            const item = `<li>${varaible.messsage}</li>`;
            list.append(item);
            //All this does add it to the list
        });
    }
    Notifications();

    //Essentially like Activitylist except for taks
    function tasklist(){
        const list = $("#tasks-list");
        list.empty(); //Clears anything that might be left in there

        //Goes through each object in the array (Yes I consider that an array) 
        // and uses their value rather than just saying [object]
        tasks.forEach(function (varaible){
            const item = `<li>${varaible.messsage}</li>`;
            list.append(item);
            //All this does add it to the list
        });
    }
    tasklist();

    //JQuery UI Button stuff now
    $("#button").button();

    $("#dashboardTabs").tabs();

    $("#customerDialog").dialog({
        autoOpen: false, 
        modal: true, 
        width: 450, 
        buttons: { 
            "Create Customer": function () { 
                var name = $("#customerName").val(); 
                var email = $("#customerEmail").val(); 
                if (!name || !email) { 
                    alert( 
                        "Please enter a name and email." 
                    ); 
                    return; 
                } 
 
                alert("Customer created: " + name); 
                $(this).dialog("close"); 
            }, 
            "Cancel": function () { 
                $(this).dialog("close"); 
            } 
        }
    });

    $("#accordion").accordion({
        collapsible: true, 
        heightStyle: "content" 
    });

    $("#newCustomerButton").on("click", function() {
        $("#customerDialog").dialog("open");
    });

    $("#customerDate").datepicker();
    });