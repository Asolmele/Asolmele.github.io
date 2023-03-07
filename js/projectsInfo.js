let projects = {
    1   : {
        "id": 1,
        "title": "Flouflix",
        "images": {
            "directory": "./images/Flouflix/",
            "main_image": "flouflix1.png",
            "project_images": ["flouflix1.png", "flouflix2.png", "flouflix3.png", "flouflix4.png"]
        },
        "overview": "Creation of a website allowing users to check and search for series, and perform other actions such as connect, put reviews, follow series, etc.",
        "informations": {
            "goals": "Create, in a small team of 5, a functionning webapp, which would allow users to see informations about various series. Users would also be able to create account, connect, follow series, and leave reviews about them.",
            "learned" : "How datas are treated from an object perspective (with the doctrine ORM), the use of symfony and its components. Also, a better understanding of management topics, using the scrum method.",
            "link" : "",
        },
        "text": "",
        "tags": ["PHP", "Web", "Symfony", "Database"]
    },

    2  : {
        "id": 2,
        "title": "Bloom filter",
        "images": {
            "directory": "./images/Bloom_filter/",
            "main_image": "bloom_filter1.png",
            "project_images": ["bloom_filter1.png"]
        },
        "overview": "Implementation and benchmarking of the bloom filter.",
        "informations": {
            "goals": "A bloom filter implemented with different data structures (namely linked list, array list, and array), which were benchmarked. The benchmarking considered the rate of false positive, and the time taken by the algorithm.",
            "learned" : "How the Bloom Filter and hash functions work; and how implementation makes a great difference in efficiency by comparing the time and space taken.",
            "link" : "",
        },
        "text": "",
        "tags": ["Java", "Python"]
    },


    3  : {
        "id": 3,
        "title": "Mini RSA",
        "images": {
            "directory": "./images/Mini_RSA/",
            "main_image": "no-image.png",
            "project_images": ["no-image.png"]
        },
        "overview": "Implementation of the RSA encryption algorithm ",
        "informations": {
            "goals": "Write a short version of the RSA algorithm to understand how it works and be able to encrypt and decrypt a simple message.",
            "learned" : "What is RSA. Different hash methods and how they affect the algorithm.",
            "link" : "",
        },
        "text": "",
        "tags": ["Python"]
    },


    4  : {
        "id": 4,
        "title": "Mini shell",
        "images": {
            "directory": "./images/Mini_shell/",
            "main_image": "no-image.png",
            "project_images": ["no-image.png"]
        },
        "overview": "Creation of a mini-Shell that allowed to run command coded internally.",
        "informations": {
            "goals": "A mini shell which would have a few requirements. Some tasks would be done in the shell, and commands should be able to run as background tasks.",
            "learned" : "Basics of the C language, and also some principle of system, such as threads and processes, and how they are handled via signals.",
            "link" : "",
        },
        "text": "",
        "tags": ["System", "C"]
    },

    5   : {
        "id": 5,
        "title": "Café Pierre's geographic app",
        "images": {
            "directory": "./images/cafe_pierre/",
            "main_image": "cafe_pierre1.png",
            "project_images": ["cafe_pierre1.png", "cafe_pierre2.png"]
        },
        "overview": "Applications allowing to show different datas on a map, such as water rise, temperature difference over time, etc. ",
        "informations": {
            "goals": "Create an application, in a team of 5, allowing the user to see datas in a graphic form.",
            "learned" : "How to take datas from a formalised dataset, and use them to create graphics depending on different parameters of the datas.",
            "link" : "",
        },
        "text": "",
        "tags": ["Python", "Database"]
    },

    6   : {
        "id": 6,
        "title": "Graph computation",
        "images": {
            "directory": "./images/Graph_computation/",
            "main_image": "graph2.png",
            "project_images": ["graph2.png","graph1.png"]
        },
        "overview": "App allowing to place node and check for path following the implementations of different path algorithm such as Astar",
        "informations": {
            "goals": "Create algorithms able to go through graphs in certain ways, and to search for a quick path with the dijkstra algorithm. The graph would have a beginning, an end, and 'forbidden' nodes.'",
            "learned" : "The implementation of different search algorithms such as BFS, DFS, and Dijkstra, in a graph.",
            "link" : "",
        },
        "text": "",
        "tags": ["Python"]
    },
    

    7 : {
        "id" : 7,
        "title": "Flee From Here",
        "images": {
            "directory": "./images/FFH/",
            "main_image": "FFH.png",
            "project_images": ["FFH.png", "FFH2.png"]
        },
        "overview": "Platform game done in Unity, mainly to test out the engine.",
        "informations": {
                "goals": "Creation of a simple platform game with a few levels (4) and different mechanics (dash, glide, gravity reverse)",
                "learned" : "The basics of unity, such as physics or animations. Being my first projects, also basics concepts of programming (data types,  visibility, etc.).",
                "link" : "",
            },
        "text": "",
        "tags": ["C#", "Unity"]
    },

    8   : {
        "id": 8,
        "title": "Virtual Machine Setup",
        "images": {
            "directory": "./images/Virtual_machine_setup/",
            "main_image": "SAE_S1_Sys.png",
            "project_images": ["SAE_S1_Sys.png"]
        },
        "overview": "Creation of a VM with the objective for it to be used for a Rust project.",
        "informations": {
            "goals": "Setup a VM from an existing debian image, so that it could be used in a rust project with vscode and git.",
            "learned" : "Basics of unix systems (package manager) and how vms work. ",
            "link" : "",
        },
        "text": "",
        "tags": ["System"]
    },
    
    9   : {
        "id": 9,
        "title": "Lowatem",
        "images": {
            "directory": "./images/Lowatem/",
            "main_image": "no-image.png",
            "project_images": ["no-image.png"]
        },
        "overview": "The completion of a game (the Lowatem) following 'levels' given, and the creation of a basic AI for that game.",
        "informations": {
            "goals": "A project done in two parts. The first one was the coding of a game called Lowatem. The second part was the creation of an ai using an algorithm (in this cas, minmax).",
            "learned" : "Refactor, modify, and complete existing code to correspond to new demands.",
            "link" : "",
        },
        "text": "",
        "tags": ["Java"]
    },
    

    10   : {
        "id": 10,
        "title": "Pong",
        "images": {
            "directory": "./images/Pong/",
            "main_image": "SAE_S1_Pong.png",
            "project_images": ["SAE_S1_Pong.png"]
        },
        "overview": "A pong game done in Processing.",
        "informations": {
            "goals": "Create a Pong game on processing with different tweaks: walls, teleporters, etc.",
            "learned" : "Basics of java programming, data types, etc.",
            "link" : "",
        },
        "text": "",
        "tags": ["Java"]
    },

    11   : {
        "id": 11,
        "title": "Wine database",
        "images": {
            "directory": "./images/Wine_database/",
            "main_image": "SAE_S1_BD.png",
            "project_images": ["SAE_S1_BD.png"]
        },
        "overview": "Conception of a database and prototyping of an app using this database for an imaginary Wine company.",
        "informations": {
            "goals": "Design a database used for a wine company, and create a prototype of this app in the form of a serie of screens showing the layout of the app",
            "learned" : "How databases work in general, use a script to fill them out.",
            "link" : "",
        },
        "text": "",
        "tags": ["Database", "SQL"]
    },






};

let colorTags = {
    "C++" : "LightGreen ",
    "C" : "LightSteelBlue",
    "C#" : "lavender",
    "PHP" : "Plum",
    "Symfony" : "PaleVioletRed",
    "Javascript" : "LightYellow",
    "React" : "SkyBlue",
    "Web" : "Wheat",
    "SQL" : "MediumOrchid",
    "Database" : "Azure",
    "Python" : "LightSkyBlue",
    "Java" : "Salmon",
    "Unity" : "Silver",
    "System" : "DarkKhaki"

};