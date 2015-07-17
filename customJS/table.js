// data to be loaded in table

var devEntryDataSet = [
['1','Analysing a Work Item','Complete Knowledge Transfer/Job Shadowing',' AttendJava Bootcamp If Aplicable',],
['2','Delivering Work Items at A steady Rate','Deliver an appropriate number of work items per week -- check with your team lead for guidance','Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)'],
['3','Getting familiar with Scrum/AAO Methodology if applicable','Document atleast 2 complex problems on Wiki','Bluemix and the Internet of Things (ILX_O_URL-ILXA-9M5AS7_11)'],
['4','Unit & Regression Testing','Identify & Document at least 5 workstation problems with solutions','Java - Introduction to Hibernate (00738587)'],
['5','Documenting/Maintaining KT Docs','-','Complete 3 Analytics courses - http://w3.blueprint.sby.ibm.com/b_dir/blueprint.nsf/url/AB49344OpenDocument']
];

var devFoundationDataSet = [
['1','Apply the best design pattern to a solution after consulting senior members','Deliver work items with the best design solution. By now a developer should be fluent with 2-3 design patterns (example factory method, singleton pattern etc)','Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)','-'],
['2','Accurately estimate the size/complexity of work items and the time needed to solve a work item)','Take part in sizing meeting with scrum masters/Team Lead to break down big chunk of work( epics) into smaller achievable tasks. Estimate the time taken and complexity of problem as a team','Bluemix and the Internet of Things (ILX_O_URL-ILXA-9M5AS7_11)','-'],
['3','Interpret and Deliver requirement analysis/wireframes drawn by the Business Analyst.','Deliver work Leverage the knowledge of  business analyst to understand the business requirements, application and wireframes','Scrum practitioner certification if applicable to the project (I) SMU Session 2: Scrum Roles and Intro to Scrum Master Role  (ILX_O_URL-ILXA-9VMMLM_11)</p> <p>(ii) Using scrum methods with Rational Team Concert Version 4: Part 2. Plan and manage sprints - developerWorks  (ILX_O_URL-ILXA-9GQKYQ_11)</p>', '-'],
['4','Presenting and communicating solution to the team & product owners via sametime meeting room, ppt or on call.','Present the solution to team lead and product owners','Programming in C++: Structure and Data Types', '-'],
['5','Accurately estimate the size/complexity of work items and the time needed to solve a work item)','Complete the required training to understand the industry associated with project','-', '-'],
['6','Understanding the business knowledge of the industry associated with project (example RBC - Finance)','Job shadow on 1 other module of the project(Cross Team learning). Check with Project manager for the training required to understand the industry','-', '-']
];

var devExperiencedDataSet = [
['1',  'Optimize the performance of the application',  'Deliver work items related to the scalability and performance of the application', 'Training courses related to Architecture', 'Number of tasks completed against client benchmark (talk to manager or team lead)'],
['2', 'Work on making the application more scalable','Deliver complex components that need to be built from scratch','Technical leadership training courses','Number of tasks reopened'],
['3', 'Propose solutions to the client with best design', 'performance & scalable options', 'Management (risk assessment, minimizing cost on project) courses','Number of defects introduced'],
['4', '-','Deliver work items and write APIs for other teams on the project','Consulting (Requirement analysis courses (i) Business Analysis: Introduction to Requirements Analysis (00404887)','Number of projects/technologies worked other than the assigned project'],
['5', '-','Become a Subject Matter Expert on one functional area relkated to the project','-','Number of training modules completed (Think 40 hours)'],
['6','-','-','-','Number of certifications completed'],
['7','-','-','-','Number of documentation'],
['8','-','-','-','Number of modules mastered within the project'],
['9','-','-','-','Number of business processes/ticket efficiency improved within their project and their impact'],
['10','-','-','-','Number of project initiatives led'],
['11','-','-','-','Impact on performance and scalability of application']
];

var devExpertDataSet = [
['1',  'Work with clients to build solutions and high level architecture', 'Break the solution into tasks that can be achieved by junior devs on the team','Interpreting functional requirement courses','Number of tasks completed against client benchmark (talk to manager or team lead)'],
['2', 'Estimate and optimize cost and risk mitigation strategies','Deliver work items and provide leadership insights on performance, security and scalability of the application', 'Advanced consulting courses','Number of tasks reopened'],
['3', 'Provide leadership to the team on technology/design related issues', 'Become Subject Matter Expert on one technology related to the project', '-','Number of defects introduced'],
['4', 'Identify new opportunities/ways to benefit the project and the client','-','-','Number of projects/technologies worked other than the assigned project'],
['5', '-','-','-','Number of training modules completed (Think 40 hours)'],
['6','-','-','-','Number of certifications completed'],
['7','-','-','-','Number of documentation'],
['8','-','-','-','Number of modules mastered within the project'],
['9','-','-','-','Number of business processes/ticket efficiency improved within their project and their impact'],
['10','-','-','-','Number of complex solutions delivered'],
['11','-','-','-','Number of defects work items by team'],
['12','-','-','-','Impact of solution proposed'],
['13','-','-','-','Number of new opportunities identified with client'],
['14','-','-','-','Impact on performance and scalability of application']
];

var devLeadDataSet = [
['1',  'Provide expertise on risk mitigation and optimizing cost on the project','Create wireframes','-','Number of tasks completed against client benchmark (talk to manager or team lead)'],
['2',   'Provide mentorship to the junior resources on the project related to technology and career path','Present prototypes to the clients','-','Number of tasks reopened'],
['3',   'Interpret functional requirements on the project','-','-', 'Number of defects introduced'],
['4',   'Responsible for the team to meet delivery targets','-','-','Number of projects/technologies worked other than the assigned project'],
['5',   'Create opportunity to benefit/optimize business process, project and client','-','-','Number of training modules completed (Think 40 hours)'],
['6', '-','-','-','Number of certifications completed'],
['7', '-','-','-','Number of documentation'],
['8', '-','-','-','Number of modules mastered within the project'],
['9', '-','-','-','Number of business processes/ticket efficiency improved within their project and their impact'],
['10',  '-','-','-','Number of complex solutions delivered'],
['11',  '-','-','-','Number of defects work items by team'],
['12',  '-','-','-','Impact of solutions proposed'],
['13',  '-','-','-','Number of new opportunities identified with client'],
['14',  '-','-','-','Impact on performance and scalability of application']
];

//QA data
var qaEntryDataSet= [
['1','Core: Understanding requirements - test case creation and verification','-','On-boarding tasks for CIC: QA Boot Camp','Core: Understanding Requirements - Quality and Accuracy of Test Cases Created'],
['2','Core: defect life cycle - identifying and validating log defects, retesting defects','-','ISTQB Certification: Foundation level','Core: Defect Life Cycle - Daily defects created rate, daily defects retest rate'],
['3','Core: manual testing - test case execution, review existing test cases','-','Combinatorial Test Design (CTD): Level 1','Core: Manual testing - Daily execution rates, test cases complexity execution rates'],
['4','Specialist: automation testing - executing automation scripts, maintaining existing scripts','-','IBM Rational Quality Manager (RQM)','Specialist: Automation testing - daily execution rates, maintaining the scripts in a "ready to execute state"'],
['5','-','-','Perfecto Mobile Automation Specialist','Specialist: Education - ISTQB Certification: Foundation level achieved, combinatorial test design (CTD): Level 1 achieved, Perfecto Mobile Automation Specialist'],
['6','-','-','Additional: Perfecto Mobile Cloud for HP UFT Specialist','-'],
['7','-','-','Additional: Selenium WebDriver Specialist','-']
];

var qaFoundationDataSet= [
['1','Requirements Analysis - Test scenario creation and verification, requirements and design document review, gap/coverage analysis','-','ISTQB Agile Certification','Requirements Analysis - Defect discovery rate in documentation, requirements traceability, quality of requirements being created'],
['2','Test environment -  Environment sanity testing, running batch processes for sanity and smoke testing','-','Perfecto Mobile Automation Master','Test Environment - accuracy of sanity testing'],
['3','Test data creation and maintenance -  assisting with test data maintenance, data integrity testing, confirm validity of data','-','Document Analytics (DA)','Database Testing - ability to use accurate test data, ability to manipulate test data appropriately'],
['4','Tool experience -  configuration or library management tools, test/defect management tools','-','Code Analysis & Reporting (CAR)','Tool Experience - Utilize all relevant features and procedures with required tools'],
['5','Specialist: Automation testing - creation of automation scripts, creation and understanding of reports','-','Additional: Perfecto Mobile Cloud for HP UFT Master','Specialist: Automation Testing - daily script creation rate, automation report analysis'],
['6','-','-','Additional: Selenium Webdriver Master',''],
['7','-','-','Additional: Application Testing Automation (ATA)','-'],
['8','-','-','Additional: Mobile Quality Assurance (MQA)','-']
];


var qaExperiencedDataSet = [
['1','Test data creation','-','Test Estimation Techniques (look for specific)','Test Data - effectively utilizing best solution for test data creation'],
['2','Root cause analysis for defects','-','Test Planning & Optimization Workbench (TPOW)','Analysis - Report analysis for defect creation, efficient communication'],
['3','Planning - Assist in test plan creation, assist in test estimations','-','Defect Reduction Methodology (DRM)','PLanning - active participation in test plan creation and test estimates'],
['4','Specialist: Automation testing - assist in automation framework creation','-','Collaborative Defect Management (CDM)','Specialist: Automation testing - appropriate knowledge in scripting and automation workflow'],
['5','Specialist: Test environment - Assisting in environment design and creation, environment maintenance','-','Defect Analysis Starter (DAS)','Specialist: Test environment - process improvement solutions, monitor test environment stability'],
['6','-','-','Additional: ISTQB Advanced Level: Test Analyst','-'],
['7','-','-','Additional: RFT, UFT','-']
];

var qaExpertDataSet= [
['1','Planning - deployment plan, risk management plan, test plan, test data plan','-','Certified Associate in Project Management (CAPM)','Planning - eddicient planning capabilities, understand different testing templates in alignment with the organization structure'],
['2','Effort estimations','-','Master Test Plan','Accuracy of test estimations'],
['3','Tool management - configuration or library management tools, test/defect management tools','-','Test Estimation Planning','Tool Management - efficient use of management tools, ability to create and retrieve management reports'],
['4','Team management - Provide mentoring to the junior team members, assist in building skill sets','-','Work Breakdown Structure (WBS)','Team Management - skills, knowledge and expertise shared with junior team members to assist in their career growth, assisting in generating process documentation, effective communication with team members and test managers'],
['5','Specialist: Automation testing - full automation solution planning, preparing proof of concepts','-','Additional: ISTQB Technical Test Analyst','Specialist: Automation testing - abiulity to determine and demonstrate appropriate automation solution for client\'s needs'],
['6','-','-','Additional: Developing Proof of Concept','-']
];

var qaLeadDataSet= [
['1','Solutioning - tool selection and recommentation, technique selection, solution design proposals, test strategy developmnt, master test plan creation','-','Course for Interview the IBM Way','Solutioning - understand tooks, techniques and strategy selection, demonstrate to client how the solution adds value, expertise in test strategy and master test plan creation'],
['2','Estimations - project plan, resource allocation','-','Additional: ISTQB Advanced Level: Test Manager/PMP (if qualified)','Estimation - efficient in creating project plan, effective utilization of resources'],
['3','Team management - provide career progression guidance for team members, coordinate team members\' work activities, peer review team members\' work items, development management skills, team performance evaluation','-','-','Team management - mentoring others for technical and analytical skills, engaging team members with new initiatives, effectively evaluating team performance measuring criteria'],
['4','Testing management - monitor the progress of the team\'s activities, perform test case review and sign off, defect triage, management of test case suites, project health assessments','-','-','Testing management - developing defect analysis reports, developing project status reports for project health assessment, effective daily test executions reports, effective test executaion summary reports, effective effort and time management, effective resource utilization'],
['5','Documentation - documentation for the client, project lesson learned','-','-','Documentation - develop effective test closure documentation for client, capture all lessons learned for future use']
];

//PM Data

var pmEntryDataSet = [
['1',  'Manage minimum of two projects (large, complex undertakings)', 'Achieving set operational objectives by contributing information and recommendations to strategic plans and reviews; preparing and completing action plans; implementing production, productivity, quality and maintaining client relationships',  'Planning Agile Project Releases and Iterations (PM109G)',  'Proven customer leadership through client feedback'],
['2', 'Implement cost efficient/effective tools to address finer points of budget to gain a greater gross profit margin. Use tools like Microsoft Project to build schedules and manage the plan',  'Financial Management : achieving financial objectives by forecasting requirements and preparing project specific budgets. In the event of any financial variance, initiating corrective action', 'IBM Program Work Center (IPWC)', 'Proven experience managing complex projects through feedback from functional managers'],
['3', 'Participate in at least three phases of the project life cycle', 'Getting leadership and mentorship experience', 'PMO, PMF, WWPMM, Contracting/Finance OR Complete PMSA + WWPMM + courses for identified deficiencies',  'Demonstrated ability to ensure project deliverables are on time, within budget and at the required level of quality.'],
['4', 'Get PMP certification done', '-',  'Project Management Orientation (PM54G) - required for PMs OR Principles of Project Management - Required for non-PMs', 'Effective communication skills with internal stakeholders, clients and vendors'],
['5', 'Start work on Career Framework', '-',  'Introduction to Managing Agile Projects at IBM (PM100G)',  'At least two giveback instances'],
['6', '-',  '-',  '-',  'Continue to work as an advisory or associate project manager'],
['7', '-',  '-',  '-',  'Provide evidence as required by the career framework']
];

var pmFoundationDataSet = [
['1',  'Participate in at least 2 projects - as project manager or team leader (3 FTWEs for 6 consecutive months)','Apply issue/risk management action: plan to identify, analyze and control potential risks to prevent failure and negative impact','PM Fundamentals (PM10G)','2 year PM experience with minimum experience on the following: project and work plan  definition, change management, financial management, tracking and control, communications management, risk and issue management'],
['2',   'Apply knowledge learned in Year 1, in planning, executing and closing projects','Conduct communication planning, project planning and application of business processes','Understanding WWPMM (PM36G)','Number of projects worked on/document the project objective, how many people worked on it, project outcome/learning outcome'],
['3',   'Build and develop relationships with internal stakeholders, clients and vendors','Document lessons learned as a result of project management activities','Basic project management education', 'Completed required trainings: PM Fundamentals, Understanding WWPMM, Basic project management education'],
['4',   'Understand the key escalation points and key contacts','Participate in Project Talk and free learning options by Project Management Centre of Excellence','Agile Project Management Leadership Behavious (PM107G)','Feedback from both Functional Managers and Client (Cos-Cards)/Summarize the evidence of the tools and methodology used on projects'],
['5',   'Manage scope, time and cost from the triangle perspective to gain a larger gross profit margin','-','-','Provide evidence as required by the career framework'],
['6', 'Participate in at least two phases of the project management life cycle','-','-','-']
];

var pmExperiencedDataSet = [
['1','Manage minimum of two projects (large, complex undertakings)','Achieving set operational objectives by contributing information and recommendations to strategic plans and reviews','Proven customer leadership through client feedback','Planning Agile Project Releases and Iterations (PM109G)'],
['2','Implement cost efficient/effective tools to address finer points of budget to gain a greater gross profit margin. Use tools like Microsoft project to build schedules and manage the plan','Financial Management','IBM Program Work Center (IPWC)','Proven experience managing complex projects through feedback from functional managers'],
['3','Involved in at least three phases of the project life cycle','Gaining leadership and mentorship experience','Rational Team Concert (RTC)','Demonstrated ability to ensure project deliverables are on time, within budget and at the required level of quality'],
['4','Get PMP certification done','-','PMO, PMF, WWPMM, Contracting/Finance OR Complete PMSA + WWPMM + courses for identified deficiencies','Effective communication skills with internal stakeholders, clients and vendors'],
['5','Start work on Carreer Framework Level Validation Package','-','-','At least two giveback instances'],
['6','-','-', '-', 'Continue to work as an advisory or associate project manager'],
['7','-','-', '-', 'Provide evidence as required by the career framework']
];

var pmExpertDataSet = [
['1','Manage minimum of three projects (two with five & one with ten FTEs for 6 months). At least one projects as IBMer and within the last four years','Develop and maintain programs, tools and methods','PgMP, PMI-ACP, PMI-RMP','Evaluating based on size of the project, revenue implications, risk, customer significance, time urgency and market necessity'],
['2','Manage delivery experience leading multiple medium to large projects over the course of the year','Develop and maintain policies that support systemic use of project management disciplines','-','Monitoring project performance and measuring progress in terms of technical, financial and schedule performance'],
['3','Involved and engaged in all phases of project management life cycle and must have participated in concept/proposal phase.','Deploy and integrate project management discipline by project teams','Complete Basic OR Equivalent project manager curriculum (20 hours should be in the last three years)','PMP certification and continuing project management education'],
['4','Expert in financial analysis and management','Ensure projects are consistently funded, staffed and managed properly','-','At least 2 giveback instances'],
['5','-','Ensure that timely, accurate, quantitative methods are available for monitoring progress, predicting results and evaluating risk; systems are in place to support those techniques; and results are continually improved','-','Provide evidence as required by the Career Framework']
];

var pmLeadDataSet = [
['1','Manage minimum of 4 projects (two with five & one with twenty FTEs for 6 months). Atleast 1 project as IBMer in the last four years','Participate in outside professional activities to maintain knowledge on developments in the field','Complete all training for being a project manager at Expert level. The requirements are regularly updated on Career Framework and project Management Center of Excellence','Attained 8 of 10 complexity factors spanning career and at least 1 complex project and program management experience'],
['2','Involved and engaged in all project phases and must have led a concept/proposal or solution design phase','Lead the design, testing, planning and implementation of complex projects for systems that typically affect many users','Complete Basic OR Equivalent project management curriculum (20 hours should be in the last 3 years) + 16 hours program management education','Completed and maintained PMP certification'],
['3','Lead the development and implementation of a broad, coordinated set of plans and programs to meet the goals and priorities of the project management community','Provide mentoring, coaching and direction setting to team members and project managers','-','Outcome of executing multi-year multi-phased projects'],
['4','Continuously improve project management toolkits and methodologies used','Regularly make decisions and take independent action on matters directly affecting strategic goals. guide staff and project managers in learning and applying useful decision making approaches','-','Projects see improved delivery times, reduced cost. Improved collection of project intellectual materials and historical data for subsequent reuse, and improved estimates'],
['5','Provide expertise and consulting to project managers in the process of project management and in skills of team dynamics, team building and group motivation','Demonstrate superior inter-personal skills, conflict resolution and negotiating skills and also handles broad-based, often complex communication for internal and/or external audiences','-','Feedback from upper level of management on overall project management community\'s contribution towards centre\'s and strategic goals'],
['6','Responsible for significant projects, typically with large budgets and sizeable staff, focused on meeting project commitments, including communications with all stakeholders','-','-','At least 2 giveback instances'],
['7','-','-','-','Continue working as an associate or senior project manager for 3-5 years'],
['8','-','-','-','Provide evidence as required by the career framework']
];

var sapEntryDataSet = [
['1','Apply the best design pattern to a solution after consulting senior members','Deliver work items with the best design solution. By now a developer should be fluent with 2-3 design patterns (example factory method, singleton pattern etc)','Bluemix Getting started for Architects & Developers (ILX_O_URL-ILXA-9HMRJY_11)','-']
];

var sapFoundationDataSet =[
['1','sapFoundationResp','sapFoundationRel','sapFoundationTrain' ]
];

var sapExpertDataSet =[ 
['1','sapExpertResp','sapExpertRel','sapExpertTrain' ]
];

var sapExperiencedDataSet =[ 
['1','sapExpResp','sapExpRel','sapExpTrain' ]
];

var sapLeadDataSet =[ 
['1','sapLeadResp','sapLeadRel','sapLeadTrain' ]
];

//If Dev option is chosen from dropdown

$("#dev").click(function(){
    $( "#round-button-circle-Entry" ).click(function() {
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="devEntryTable"></table>' );
        $('#devEntryTable').dataTable( {
            "data": devEntryDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },

                ],
            "scrollY": 200,
            "scrollX": true
            });  
    });
    $( "#round-button-circle-Foundation" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="devfoundationTable"></table>' );
        $('#devfoundationTable').dataTable( {
            "data": devFoundationDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

       $( "#round-button-circle-Experienced" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="devExperiencedTable"></table>' );
        $('#devExperiencedTable').dataTable( {
            "data": devExperiencedDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Expert" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="devExpertTable"></table>' );
        $('#devExpertTable').dataTable( {
            "data": devExpertDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Lead" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="devLeadTable"></table>' );
        $('#devLeadTable').dataTable( {
            "data": devLeadDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

    });

//PM

$("#pm").click(function(){
    $( "#round-button-circle-Entry" ).click(function() {
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="pmentryTable"></table>' );
        $('#pmentryTable').dataTable( {
            "data": pmEntryDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },

                ],
            "scrollY": 200,
            "scrollX": true
            });  
    });
    $( "#round-button-circle-Foundation" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="pmfoundationTable"></table>' );
        $('#pmfoundationTable').dataTable( {
            "data": pmFoundationDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

       $( "#round-button-circle-Experienced" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="pmExperiencedTable"></table>' );
        $('#pmExperiencedTable').dataTable( {
            "data": pmExperiencedDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Expert" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="pmExpertTable"></table>' );
        $('#pmExpertTable').dataTable( {
            "data": pmExpertDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Lead" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="pmLeadTable"></table>' );
        $('#pmLeadTable').dataTable( {
            "data": pmLeadDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

    });

$("#tester").click(function(){
    $( "#round-button-circle-Entry" ).click(function() {
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="testerEntryTable"></table>' );
        $('#testerEntryTable').dataTable( {
            "data": qaEntryDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },

                ],
            "scrollY": 200,
            "scrollX": true
            });  
    });
    $( "#round-button-circle-Foundation" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="testerFoundationTable"></table>' );
        $('#testerFoundationTable').dataTable( {
            "data": qaFoundationDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

       $( "#round-button-circle-Experienced" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="testerExperiencedTable"></table>' );
        $('#testerExperiencedTable').dataTable( {
            "data": qaExperiencedDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Expert" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="testerExpertTable"></table>' );
        $('#testerExpertTable').dataTable( {
            "data": qaExpertDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

        $( "#round-button-circle-Lead" ).click(function() {
        $('#entryTable').remove();
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="testerLeadTable"></table>' );
        $('#testerLeadTable').dataTable( {
            "data": qaLeadDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },
                { "title": "Measuring Success", "class": "center" },
            ],
            "scrollY": 300,
            "scrollX": true
        });  
    });

    });

$("#sap").click(function(){
    $( "#round-button-circle-Entry" ).click(function() {
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="entryTable"></table>' );
        $('#entryTable').dataTable( {
            "data": sapEntryDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },

                ],
            "scrollY": 200,
            "scrollX": true
            });  
    
        });

        $( "#round-button-circle-Foundation" ).click(function() {
        $('#table').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="entryTable"></table>' );
        $('#entryTable').dataTable( {
            "data": sapFoundationDataSet,
            "columns": [
                { "title": "#" },
                { "title": "Responsibilities" },
                { "title": "Related Tasks" },
                { "title": "Training", "class": "center" },

                ],
            "scrollY": 200,
            "scrollX": true
            });  
    
        });
  });




/*$( "#round-button-circle-Expert" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});

$( "#round-button-circle-Lead" ).click(function() {
  $('.table tr:last').after('<tr> <td> 2 </td> <td> ha </td> <td> ha </td> <td> ha </td> <td> ha </td> </tr>');
  $(this).data('clicked', true);
});*/




