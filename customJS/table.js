var entryDataSet = [
['1','Analysing a Work Item','Complete Knowledge Transfer/Job Shadowing','Attend Java Bootcamp If Aplicable'],
['2','Delivering Work Items at A steady Rate','Deliver an appropriate number of work items per week -- check with your team lead for guidance','Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)'],
['3','Getting familiar with Scrum/AAO Methodology if applicable','Document atleast 2 complex problems on Wiki','Bluemix and the Internet of Things (ILX_O_URL-ILXA-9M5AS7_11)'],
['4','Unit & Regression Testing','Identify & Document at least 5 workstation problems with solutions','Java - Introduction to Hibernate (00738587)'],
['5','Documenting/Maintaining KT Docs','-','Complete 3 Analytics courses - http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB49344OpenDocument']
];

var foundationDataSet = [
['1','Apply the best design pattern to a solution after consulting senior members','Deliver work items with the best design solution. By now a developer should be fluent with 2-3 design patterns (example factory method, singleton pattern etc)','Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)','Hello Hello Hello Hello Hello Hello'],
['2','Accurately estimate the size/complexity of work items and the time needed to solve a work item)','Take part in sizing meeting with scrum masters/Team Lead to break down big chunk of work( epics) into smaller achievable tasks. Estimate the time taken and complexity of problem as a team','Bluemix and the Internet of Things (ILX_O_URL-ILXA-9M5AS7_11)','Hello Hello Hello Hello Hello Hello'],
['3','Interpret and Deliver requirement analysis/wireframes drawn by the Business Analyst.','Deliver work Leverage the knowledge of  business analyst to understand the business requirements, application and wireframes','Scrum practitioner certification if applicable to the project -<p> (I) SMU Session 2: Scrum Roles and Intro to Scrum Master Role  (ILX_O_URL-ILXA-9VMMLM_11)</p> <p>(ii) Using scrum methods with Rational Team Concert Version 4: Part 2. Plan and manage sprints - developerWorks  (ILX_O_URL-ILXA-9GQKYQ_11)</p>', 'Hello Hello Hello Hello Hello Hello'],
['4','Presenting and communicating solution to the team & product owners via sametime meeting room, ppt or on call.','Present the solution to team lead and product owners','Programming in C++: Structure and Data Types', 'Hello Hello Hello Hello Hello Hello'],
['5','Accurately estimate the size/complexity of work items and the time needed to solve a work item)','Complete the required training to understand the industry associated with project','ajajajajjajajajajajjajajajaj', 'Hello Hello Hello Hello Hello Hello'],
['6','Understanding the business knowledge of the industry associated with project (example RBC - Finance)','Job shadow on 1 other module of the project(Cross Team learning)</td><td>Check with Project manager for the training required to understand the industry','ajajajajjajajajajajjajajajaj', 'Hello Hello Hello Hello Hello Hello']
];

$( "#round-button-circle-Entry" ).click(function() {
  $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="entryTable"></table>' );
  $('#entryTable').dataTable( {
        
        "data": entryDataSet,
        "columns": [
            { "title": "#" },
            { "title": "Responsibilities" },
            { "title": "Related Tasks" },
            { "title": "Training", "class": "center" },

        ],
        "scrollY": 200,
        "scrollX": true
    } );   

  /*
  $('.table tbody').remove();
  $('.table').append('<tbody><tr><td>1</td><td>Analysing a Work Item</td><td>Complete Knowledge Transfer/Job Shadowing </td><td>Attend Java Bootcamp If Aplicable</td></tr>');
  $('.table').append('<tr><td>2</td><td>Delivering Work Items at A steady Rate</td><td>Deliver an appropriate number of work items per week -- check with your team lead for guidance</td><td>Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)</td>');
  $('.table').append('<tr><td>3</td><td>Getting familiar with Scrum/AAO Methodology if applicable</td><td>Document atleast 2 complex problems on Wiki</td><td>Bluemix and the Internet of Things (ILX_O_URL-ILXA-9M5AS7_11) </td></tr>');
  $('.table').append('<tr><td>4</td><td>Unit & Regression Testing</td><td>Identify & Document at least 5 workstation problems with solutions</td><td>Java - Introduction to Hibernate (00738587)</td></tr>');
  $('.table').append('<tr><td>5</td><td>Documenting/Maintaining KT Docs</td><td>-</td><td>Complete 3 Analytics courses - http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB49344OpenDocument</td></tr></tbody');
  $('#entryTable').DataTable({
        "scrollY": 200,
        "scrollX": true
    });*/
});


$( "#round-button-circle-Foundation" ).click(function() {

  /*$('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);*/
  $('#entryTable').remove();
  /*
  $('.table').append('<tr><td>1</td><td>Apply the best design pattern to a solution after consulting senior members</td><td>Deliver work items with the best design solution. By now a developer should be fluent with 2-3 design patterns (example factory method, singleton pattern etc)</td><td><p>Learning JavaScript Design Patterns - Addy Osmani (ILX_O_URL-ILXA-9XYS6G_11)</td></tr>');
  $('.table').append('<tr><td>2</td><td>Accurately estimate the size/complexity of work items and the time needed to solve a work item)</td><td>Take part in sizing meeting with scrum masters/Team Lead to break down big chunk of work( epics) into smaller achievable tasks. Estimate the time taken and complexity of problem as a team</td><td>Scrum practitioner certification if applicable to the project -<p> (I) SMU Session 2: Scrum Roles and Intro to Scrum Master Role  (ILX_O_URL-ILXA-9VMMLM_11)</p> <p>(ii) Using scrum methods with Rational Team Concert Version 4: Part 2. Plan and manage sprints - developerWorks  (ILX_O_URL-ILXA-9GQKYQ_11)</p></td></tr>');
  $('.table').append('<tr><td>3</td><td>Interpret and Deliver requirement analysis/wireframes drawn by the Business Analyst.</td><td>Deliver work Leverage the knowledge of  business analyst to understand the business requirements, application and wireframes/td><td>Training in Bluemix & 1 Technology outside the project</td></tr>');
  $('.table').append('<tr><td>4</td><td>Presenting and communicating solution to the team & product owners via sametime meeting room, ppt or on call.</td><td>Present the solution to team lead and product owners</td><td>Programming in C++: Structure and Data Types (SSSA9Q20430150113)</td></tr>');
  $('.table').append('<tr><td>5</td><td>Accurately estimate the size/complexity of work items and the time needed to solve a work item)</td><td>Complete the required training to understand the industry associated with project</td><td>Training courses for Web Services/ Soap/ Restful API</td></tr>');
  $('.table').append('<tr><td>6</td><td>Understanding the business knowledge of the industry associated with project (example RBC - Finance)</td><td>Job shadow on 1 other module of the project(Cross Team learning)</td><td>Check with Project manager for the training required to understand the industry</td></tr>'); */
  $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="foundationTable"></table>' );
  $('#foundationTable').dataTable( {
        "data": foundationDataSet,
        "columns": [
            { "title": "#" },
            { "title": "Responsibilities" },
            { "title": "Related Tasks" },
            { "title": "Training", "class": "center" },
            { "title": "Measuring Success", "class": "center" },
        ],
        "scrollY": 300,
        "scrollX": true
    } );  

    /*$('.table').DataTable({
        "scrollY": 200,
        "scrollX": true
    });*/
});

/*$( "#round-button-circle-Expert" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});

$( "#round-button-circle-Lead" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});*/




