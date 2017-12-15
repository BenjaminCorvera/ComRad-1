function displayTasks() {

    $.ajax({
        url: 'includes/allTasks.php',
        data: "",
        dataType: "json",

    }).done(function (json) {

        $("#displayAllTasks").empty();


        jsonlength = json.length;

        //this should do the title
        var row1= document.createElement("tr");
        var th_pname=document.createElement('th');
        var th_date= document.createElement('th');
        var th_task= document.createElement('th');

        th_pname.innerHTML="Project Name";
        th_date.innerHTML="Due Date";
        th_task.innerHTML="Task";
        
        row1.appendChild(th_date);
        row1.appendChild(th_pname);
        row1.appendChild(th_task);
        $("#displayAllTasks").append(row1);

        for (var i = 0; i < jsonlength; i++) {
            console.log(json[i].project_name);

            var pname=  json[i].project_name;
            var date= json[i].due_date;
            var task= json[i].task_description; 

            var row= document.createElement("tr");
            var td_pname=document.createElement('td');
            var td_date= document.createElement('td');
            var td_task= document.createElement('td');

            td_pname.innerHTML=json[i].project_name;
            td_date.innerHTML=json[i].due_date;
            td_task.innerHTML=json[i].task_description;
            
            row.appendChild(td_date);
            row.appendChild(td_pname);
            row.appendChild(td_task);

            $("#displayAllTasks").append(row);
            // change to display task information
            // tasks = "Project: " + json[i].project_name+ " Due Date: " +json[i].due_date +"Task Description: "+json[i].task_description;
            // var btn = document.createElement("BUTTON"); // Create a <button> element
            // var t = document.createTextNode(tasks); // Create a text node
            // // tasks are task buttons
            // btn.setAttribute("class", "taskButton")
            // btn.appendChild(t); // Append the text to <button>

            // // home needs to have a task display
            // $("#displayAllTasks").append(btn);

        }


    });

};

displayTasks();
