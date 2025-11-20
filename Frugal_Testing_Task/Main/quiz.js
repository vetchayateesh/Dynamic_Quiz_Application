// Quiz Questions Database
const quizDatabase = {
    science: {
        easy: [
            {
                id: 1,
                question: "What is the chemical symbol for water?",
                options: ["H2O", "O2", "CO2", "H2"],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "What is the smallest unit of life?",
                options: ["Atom", "Molecule", "Cell", "Organ"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2
            },
            {
                id: 4,
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "How many bones does an adult human have?",
                options: ["186", "206", "226", "246"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "What is the process by which plants make food?",
                options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "What metal is liquid at room temperature?",
                options: ["Iron", "Gold", "Mercury", "Aluminum"],
                correctAnswer: 2
            },
            {
                id: 9,
                question: "What is the SI unit of force?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What percentage of Earth's atmosphere is nitrogen?",
                options: ["21%", "78%", "1%", "0.04%"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                id: 1,
                question: "What is the process of DNA replication called?",
                options: ["Transcription", "Translation", "Mitosis", "Semiconservative replication"],
                correctAnswer: 3
            },
            {
                id: 2,
                question: "What is the pH value of a neutral solution?",
                options: ["0", "7", "14", "3.5"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "What is the name of the protein that carries oxygen in blood?",
                options: ["Myoglobin", "Hemoglobin", "Cytochrome", "Collagen"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is the Greenhouse Gas with the highest concentration?",
                options: ["Methane", "Carbon Dioxide", "Water Vapor", "Nitrous Oxide"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "What is the name of the membrane that surrounds the cell nucleus?",
                options: ["Cell Membrane", "Nuclear Envelope", "Cytoplasm", "Ribosome"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "What is the process by which water changes to vapor?",
                options: ["Condensation", "Evaporation", "Sublimation", "Freezing"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "What is the name of the bone in the upper arm?",
                options: ["Humerus", "Radius", "Ulna", "Femur"],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "What is the SI unit of energy?",
                options: ["Calorie", "Joule", "Erg", "Watt-hour"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What is the period of time for the Earth to orbit the Sun?",
                options: ["364 days", "365.25 days", "366 days", "365 days"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                id: 1,
                question: "What is the term for the conversion of light energy into chemical energy?",
                options: ["Chemosynthesis", "Photosynthesis", "Phosphorylation", "Glycolysis"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What is the name of the enzyme that unwinds the DNA double helix?",
                options: ["Ligase", "Polymerase", "Helicase", "Topoisomerase"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What is the Krebs Cycle also known as?",
                options: ["Glycolysis", "Citric Acid Cycle", "Beta Oxidation", "Pentose Phosphate Pathway"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is the maximum temperature a black hole can have according to Hawking radiation?",
                options: ["1000 K", "10^-27 K", "Absolute zero", "It cannot have a maximum temperature"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What is the name of the organelle responsible for synthesizing ATP?",
                options: ["Lysosome", "Golgi Apparatus", "Mitochondria", "Endoplasmic Reticulum"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "What is the process called when an organism changes its traits through generations?",
                options: ["Mutation", "Natural Selection", "Evolution", "Adaptation"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What is the formula for calculating potential energy?",
                options: ["E=mc²", "PE=mgh", "F=ma", "P=IV"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "What is the name of the process by which cells divide to create gametes?",
                options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What is the term for the tendency of a substance to resist changes in motion?",
                options: ["Force", "Momentum", "Inertia", "Torque"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What is the name of the layer of Earth that is primarily composed of iron and nickel?",
                options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
                correctAnswer: 3
            }
        ]
    },
    history: {
        easy: [
            {
                id: 1,
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "In which country did the Ancient Egyptian civilization develop?",
                options: ["Mesopotamia", "Egypt", "Greece", "Rome"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "Who invented the printing press?",
                options: ["Galileo Galilei", "Johannes Gutenberg", "Isaac Newton", "Leonardo da Vinci"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "In which year did the American Civil War end?",
                options: ["1862", "1863", "1864", "1865"],
                correctAnswer: 3
            },
            {
                id: 7,
                question: "What was the first capital of the United States?",
                options: ["Washington D.C.", "Philadelphia", "New York", "Boston"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "Who was the first King of England?",
                options: ["William the Conqueror", "Henry VIII", "Edward I", "Richard the Lionheart"],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "In what year did the Great Wall of China begin to be built?",
                options: ["1000 BCE", "500 BCE", "7th century BCE", "3rd century BCE"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What empire built Machu Picchu?",
                options: ["Aztec", "Inca", "Maya", "Olmec"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                id: 1,
                question: "What was the main cause of World War I?",
                options: ["Nazi expansion", "Economic depression", "Assassination of Archduke Franz Ferdinand", "Colonial disputes"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "Who was the first Roman Emperor?",
                options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "In which century did the Renaissance begin?",
                options: ["12th century", "13th century", "14th century", "15th century"],
                correctAnswer: 2
            },
            {
                id: 4,
                question: "What was the primary purpose of the Great Wall of China?",
                options: ["Defense against invasions", "Trade route", "Religious monument", "Irrigation system"],
                correctAnswer: 0
            },
            {
                id: 5,
                question: "Who was Napoleon Bonaparte's wife?",
                options: ["Marie Antoinette", "Josephine", "Catherine the Great", "Eleanor of Aquitaine"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What was the main purpose of the Silk Road?",
                options: ["Religious pilgrimage", "Military conquest", "Trade and cultural exchange", "Exploration"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "Who signed the Magna Carta?",
                options: ["King John", "King Richard", "King Henry", "King Edward"],
                correctAnswer: 0
            },
            {
                id: 9,
                question: "In what year did the Russian Revolution occur?",
                options: ["1915", "1916", "1917", "1918"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What was the primary religion of the Byzantine Empire?",
                options: ["Islam", "Judaism", "Eastern Orthodox Christianity", "Roman Catholicism"],
                correctAnswer: 2
            }
        ],
        hard: [
            {
                id: 1,
                question: "What was the Treaty of Westphalia primarily known for?",
                options: ["Ending the Hundred Years War", "Ending the Thirty Years War", "Establishing the United Nations", "Creating the EU"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "Who was the primary author of the Declaration of Independence?",
                options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "James Madison"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What was the main ideological conflict during the Cold War?",
                options: ["Capitalism vs. Socialism", "Democracy vs. Fascism", "Christianity vs. Islam", "Nationalism vs. Imperialism"],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "In which year did the Hundred Years War begin?",
                options: ["1236", "1337", "1437", "1537"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "Who was the leader of the Bolshevik Revolution?",
                options: ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Nikolai Bukharin"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "What was the primary purpose of the Congress of Vienna?",
                options: ["Establish the United Nations", "Restore balance of power in Europe", "End the Napoleonic Wars", "Create a European Union"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "Who was the first Prime Minister of India?",
                options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "In which year did the Spanish Inquisition begin?",
                options: ["1436", "1478", "1526", "1587"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What was the primary cause of the Fall of the Roman Empire?",
                options: ["Barbarian invasions", "Economic problems", "Political instability", "All of the above"],
                correctAnswer: 3
            },
            {
                id: 10,
                question: "Who was the leader of the Protestant Reformation?",
                options: ["John Calvin", "Martin Luther", "Jan Hus", "Girolamo Savonarola"],
                correctAnswer: 1
            }
        ]
    },
    geography: {
        easy: [
            {
                id: 1,
                question: "What is the capital of France?",
                options: ["Lyon", "Paris", "Marseille", "Nice"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "Which is the largest continent?",
                options: ["Africa", "Europe", "Asia", "South America"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correctAnswer: 2
            },
            {
                id: 4,
                question: "Which ocean is the largest?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3
            },
            {
                id: 5,
                question: "What is the highest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "Which country is known as the Land of a Thousand Lakes?",
                options: ["Sweden", "Norway", "Canada", "Finland"],
                correctAnswer: 3
            },
            {
                id: 7,
                question: "What is the longest river in Africa?",
                options: ["Congo River", "Nile River", "Zambezi River", "Orange River"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "Which desert is the largest in the world?",
                options: ["Sahara Desert", "Arabian Desert", "Antarctic Desert", "Kalahari Desert"],
                correctAnswer: 2
            },
            {
                id: 9,
                question: "What is the capital of Japan?",
                options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "Which country has the most islands?",
                options: ["Indonesia", "Philippines", "Sweden", "Finland"],
                correctAnswer: 0
            }
        ],
        medium: [
            {
                id: 1,
                question: "What is the capital of New Zealand?",
                options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "Which mountain range is the longest?",
                options: ["Alps", "Himalayas", "Rocky Mountains", "Mid-Ocean Ridge"],
                correctAnswer: 3
            },
            {
                id: 4,
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "Salvador", "Brasília", "São Paulo"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "Which country is the most populous in the world?",
                options: ["India", "USA", "Indonesia", "Pakistan"],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "What is the smallest independent country in the world?",
                options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "Which continent has no deserts?",
                options: ["Europe", "South America", "Africa", "Australia"],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "What is the capital of Egypt?",
                options: ["Alexandria", "Cairo", "Giza", "Aswan"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "Which is the second-longest river in Africa?",
                options: ["Congo River", "Niger River", "Zambezi River", "Okavango River"],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "What is the deepest point in the ocean?",
                options: ["Java Trench", "Mariana Trench", "Tonga Trench", "Kuril-Kamchatka Trench"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                id: 1,
                question: "What is the capital of Mongolia?",
                options: ["Ulaanbaatar", "Darkhan", "Erdenet", "Choibalsan"],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "Which country has the most time zones?",
                options: ["Russia", "France", "USA", "Australia"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "What is the lowest point on land on Earth?",
                options: ["Dead Sea", "Turpan Depression", "Death Valley", "Jericho"],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "Which is the oldest capital city in the world still inhabited?",
                options: ["Jerusalem", "Damascus", "Athens", "Rome"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What is the capital of Kazakhstan?",
                options: ["Almaty", "Nur-Sultan", "Akmola", "Karaganda"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "Which country is completely surrounded by another country?",
                options: ["Vatican City", "San Marino", "Lesotho", "Both A and C"],
                correctAnswer: 3
            },
            {
                id: 7,
                question: "What is the largest coral reef system in the world?",
                options: ["Red Sea Coral Reef", "Great Barrier Reef", "Belize Barrier Reef", "Florida Keys"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "Which country has the most mountains?",
                options: ["Nepal", "China", "Indonesia", "Mexico"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What is the capital of Tajikistan?",
                options: ["Khujand", "Dushanbe", "Bokhtar", "Khorog"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "Which is the coldest inhabited capital city?",
                options: ["Reykjavik", "Ulaanbaatar", "Yakutsk", "Yellowknife"],
                correctAnswer: 1
            }
        ]
    },
    technology: {
        easy: [
            {
                id: 1,
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Central Program Unit", "Central Processor Utility", "Core Processing Unit"],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "What is the most common programming language for web development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correctAnswer: 0
            },
            {
                id: 4,
                question: "What is the name of the Linux kernel creator?",
                options: ["Bill Gates", "Steve Jobs", "Linus Torvalds", "Tim Berners-Lee"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "What does RAM stand for?",
                options: ["Random Access Memory", "Read-Only Memory", "Rapidly Accessing Memory", "Redundant Array Memory"],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "What is the most popular version control system?",
                options: ["SVN", "Mercurial", "Git", "Perforce"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What does API stand for?",
                options: ["Application Programming Interface", "Application Protocol Integration", "Advanced Programming Interface", "Application Process Interchange"],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "What is the primary function of a firewall?",
                options: ["Encrypt data", "Filter network traffic", "Speed up internet", "Store files"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What does JSON stand for?",
                options: ["JavaScript Object Notation", "Java Source Object Network", "JavaScript Object Network", "Java Serialized Object Notation"],
                correctAnswer: 0
            },
            {
                id: 10,
                question: "What is the default port for HTTP?",
                options: ["21", "25", "80", "443"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                id: 1,
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "What does ACID stand for in database transactions?",
                options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Complexity, Identity, Data", "Access, Control, Integration, Design", "Accumulation, Coherence, Integrity, Distribution"],
                correctAnswer: 0
            },
            {
                id: 3,
                question: "What is the main advantage of using NoSQL databases?",
                options: ["Better ACID compliance", "Scalability and flexibility", "Easier SQL queries", "Better security"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is Docker primarily used for?",
                options: ["Creating databases", "Containerization", "Writing code", "Version control"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What does REST stand for?",
                options: ["Representational State Transfer", "Request Execution State Transfer", "Response Execution State Transmission", "Remote Execution State Transfer"],
                correctAnswer: 0
            },
            {
                id: 6,
                question: "What is the primary purpose of machine learning?",
                options: ["Create databases", "Enable computers to learn from data", "Encrypt messages", "Build websites"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "What does SSL stand for?",
                options: ["Secure Socket Layer", "Secure Software Link", "System Security Layer", "Secure Session Link"],
                correctAnswer: 0
            },
            {
                id: 8,
                question: "What is the time complexity of quicksort in the average case?",
                options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What is the primary benefit of using microservices architecture?",
                options: ["Better performance", "Easier to understand", "Scalability and flexibility", "Lower cost"],
                correctAnswer: 2
            },
            {
                id: 10,
                question: "What does CI/CD stand for?",
                options: ["Continuous Integration/Continuous Deployment", "Code Inspection/Code Design", "Continuous Integration/Continuous Design", "Code Inspection/Continuous Deployment"],
                correctAnswer: 0
            }
        ],
        hard: [
            {
                id: 1,
                question: "What is the time complexity of the A* search algorithm?",
                options: ["O(b^d)", "O(log n)", "O(n log n)", "O(n²)"],
                correctAnswer: 0
            },
            {
                id: 2,
                question: "What is the Turing completeness concept related to?",
                options: ["Computer graphics", "Computational universality", "Data compression", "Network protocols"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "What is the primary principle behind the CAP theorem?",
                options: ["Cache, Availability, Performance", "Consistency, Availability, Partition tolerance", "Caching, Allocation, Persistence", "Compression, Acceleration, Protocol"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is the time complexity of dynamic programming solutions?",
                options: ["Cannot be determined", "Varies based on subproblems", "Always O(1)", "Always O(n²)"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "What is the primary disadvantage of the linked list data structure?",
                options: ["Constant space", "No random access", "Fast insertion", "Simple implementation"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "What does the Big O notation describe?",
                options: ["Memory usage", "Code quality", "Algorithm efficiency in worst case", "Execution order"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "What is the difference between shallow copy and deep copy?",
                options: ["No difference", "Shallow copies references, deep copies values", "Shallow is faster", "Deep copy uses more memory"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "What is the main advantage of using hash tables?",
                options: ["Sorted data", "Average O(1) lookup time", "No collisions", "No memory overhead"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "What is the purpose of a bloom filter?",
                options: ["Store strings", "Detect set membership", "Sort arrays", "Compress data"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What is the time complexity of the Floyd-Warshall algorithm?",
                options: ["O(n log n)", "O(n²)", "O(n³)", "O(2^n)"],
                correctAnswer: 2
            }
        ]
    },
    sports: {
        easy: [
            {
                id: 1,
                question: "How many players are on a soccer field per team?",
                options: ["10", "11", "12", "9"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What is the diameter of a basketball hoop?",
                options: ["16 inches", "18 inches", "20 inches", "22 inches"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "How many sets are typically played in tennis?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What sport uses a puck?",
                options: ["Baseball", "Football", "Ice Hockey", "Tennis"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "How many innings does a baseball game have?",
                options: ["7", "8", "9", "10"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "What is the height of a tennis net at the center?",
                options: ["2 feet", "2.5 feet", "3 feet", "3.5 feet"],
                correctAnswer: 1
            },
            {
                id: 7,
                question: "How many points does a touchdown give in American football?",
                options: ["3", "6", "7", "8"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "What is the standard size of a golf course?",
                options: ["9 holes", "18 holes", "36 holes", "27 holes"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "How many players are on a volleyball team on the court?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What is the circumference of a regulation basketball?",
                options: ["28 inches", "29 inches", "29.5 inches", "30 inches"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                id: 1,
                question: "How many times has Lionel Messi won the FIFA World Cup?",
                options: ["0", "1", "2", "3"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "What is the maximum speed allowed in Formula 1 pit stops?",
                options: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "How many gold medals did Michael Phelps win at the 2008 Olympics?",
                options: ["6", "8", "10", "12"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is the length of a marathon?",
                options: ["40 km", "42.195 km", "45 km", "50 km"],
                correctAnswer: 1
            },
            {
                id: 5,
                question: "How many rounds are in an amateur boxing match?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 1
            },
            {
                id: 6,
                question: "What is the maximum weight of a professional boxing ring?",
                options: ["6x6m", "7x7m", "8x8m", "9x9m"],
                correctAnswer: 2
            },
            {
                id: 7,
                question: "How many hours does the Tour de France typically take?",
                options: ["50-80", "80-100", "100-150", "150-200"],
                correctAnswer: 2
            },
            {
                id: 8,
                question: "What is the standard distance for an Olympic swimming pool?",
                options: ["25m", "50m", "75m", "100m"],
                correctAnswer: 1
            },
            {
                id: 9,
                question: "How many players does a cricket team have on the field?",
                options: ["10", "11", "12", "13"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What is the maximum age for under-20 youth sports?",
                options: ["18", "19", "20", "21"],
                correctAnswer: 2
            }
        ],
        hard: [
            {
                id: 1,
                question: "How many Grand Slam tournaments does Serena Williams have?",
                options: ["20", "22", "23", "24"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "What is the standard length of a badminton court?",
                options: ["15m", "17m", "19m", "21m"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "How many times has Roger Federer won Wimbledon?",
                options: ["7", "8", "9", "10"],
                correctAnswer: 1
            },
            {
                id: 4,
                question: "What is the maximum break in snooker?",
                options: ["100", "120", "147", "180"],
                correctAnswer: 2
            },
            {
                id: 5,
                question: "How many rings are in the Olympic symbol?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2
            },
            {
                id: 6,
                question: "What is the standard length of a curling sheet?",
                options: ["30m", "40m", "50m", "45m"],
                correctAnswer: 0
            },
            {
                id: 7,
                question: "How many minutes does an ice hockey period last?",
                options: ["15", "20", "25", "30"],
                correctAnswer: 1
            },
            {
                id: 8,
                question: "What is the maximum score in a single throw in darts?",
                options: ["60", "80", "100", "120"],
                correctAnswer: 2
            },
            {
                id: 9,
                question: "How many pins are in ten-pin bowling?",
                options: ["9", "10", "11", "12"],
                correctAnswer: 1
            },
            {
                id: 10,
                question: "What is the standard weight of a shot put for men?",
                options: ["5kg", "6kg", "7.26kg", "8kg"],
                correctAnswer: 2
            }
        ]
    }
};

// Global variables
let currentQuestionIndex = 0;
let selectedAnswers = [];
let userAnswerTimes = [];
let timerInterval = null;
let quizStartTime = null;
let questionStartTime = null;
const QUESTION_TIME_LIMIT = 30; // 30 seconds per question

// Initialize Quiz Page
function initializeQuiz() {
    const category = sessionStorage.getItem('selectedCategory');
    const difficulty = sessionStorage.getItem('selectedDifficulty');

    if (!category || !difficulty) {
        window.location.href = 'index.html';
        return;
    }

    // Display category and difficulty
    document.getElementById('quizCategory').textContent = category.toUpperCase();
    document.getElementById('quizDifficulty').textContent = `Difficulty: ${difficulty.toUpperCase()}`;

    // Load questions
    currentQuestions = quizDatabase[category][difficulty];
    selectedAnswers = new Array(currentQuestions.length).fill(null);
    userAnswerTimes = new Array(currentQuestions.length).fill(0);

    quizStartTime = Date.now();
    questionStartTime = Date.now();

    // Create question navigation
    createQuestionNavigation();

    // Display first question
    displayQuestion(0);

    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);

    // Start timer
    startTimer();
}

let currentQuestions = [];

function displayQuestion(index) {
    const question = currentQuestions[index];

    // Update question counter
    document.getElementById('questionCounter').textContent = `Question ${index + 1} of ${currentQuestions.length}`;

    // Update progress bar
    const progress = ((index + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';

        const label = document.createElement('label');
        label.className = 'option-label';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = optionIndex;
        radio.id = `option${optionIndex}`;

        // Check if this answer was previously selected
        if (selectedAnswers[index] === optionIndex) {
            radio.checked = true;
        }

        radio.addEventListener('change', function() {
            selectedAnswers[index] = parseInt(this.value);
            updateQuestionNavigation();
        });

        const span = document.createElement('span');
        span.textContent = option;

        label.appendChild(radio);
        label.appendChild(span);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    });

    // Update button visibility
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === currentQuestions.length - 1 ? 'none' : 'block';
    submitBtn.style.display = index === currentQuestions.length - 1 ? 'block' : 'none';

    // Update question nav highlight
    updateQuestionNavigationHighlight(index);

    // Reset timer for new question
    questionStartTime = Date.now();
}

function createQuestionNavigation() {
    const navList = document.getElementById('questionNavList');
    navList.innerHTML = '';

    for (let i = 0; i < currentQuestions.length; i++) {
        const navItem = document.createElement('button');
        navItem.className = 'nav-item';
        navItem.id = `nav-${i}`;
        navItem.textContent = i + 1;
        navItem.addEventListener('click', function() {
            currentQuestionIndex = i;
            displayQuestion(i);
        });
        navList.appendChild(navItem);
    }
}

function updateQuestionNavigation() {
    for (let i = 0; i < currentQuestions.length; i++) {
        const navItem = document.getElementById(`nav-${i}`);
        if (selectedAnswers[i] !== null) {
            navItem.classList.add('answered');
        } else {
            navItem.classList.remove('answered');
        }
    }
}

function updateQuestionNavigationHighlight(index) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('current'));
    document.getElementById(`nav-${index}`).classList.add('current');
}

function nextQuestion() {
    // Record time spent on current question
    userAnswerTimes[currentQuestionIndex] = Math.round((Date.now() - questionStartTime) / 1000);

    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    // Record time spent on current question
    userAnswerTimes[currentQuestionIndex] = Math.round((Date.now() - questionStartTime) / 1000);

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function startTimer() {
    timerInterval = setInterval(function() {
        const timeElapsed = Math.round((Date.now() - questionStartTime) / 1000);
        const timeRemaining = QUESTION_TIME_LIMIT - timeElapsed;

        const timerElement = document.getElementById('timerValue');
        timerElement.textContent = Math.max(0, timeRemaining);

        if (timeRemaining <= 10) {
            timerElement.style.color = '#e74c3c';
        } else {
            timerElement.style.color = '#3498db';
        }

        if (timeRemaining <= 0) {
            // Auto-submit if at last question
            if (currentQuestionIndex === currentQuestions.length - 1) {
                submitQuiz();
            } else {
                // Auto move to next question
                userAnswerTimes[currentQuestionIndex] = QUESTION_TIME_LIMIT;
                nextQuestion();
            }
        }
    }, 1000);
}

function submitQuiz() {
    // Record time spent on last question
    userAnswerTimes[currentQuestionIndex] = Math.round((Date.now() - questionStartTime) / 1000);

    // Calculate score
    let correctCount = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        if (selectedAnswers[i] === currentQuestions[i].correctAnswer) {
            correctCount++;
        }
    }

    const score = Math.round((correctCount / currentQuestions.length) * 100);
    const totalTime = Math.round((Date.now() - quizStartTime) / 1000);

    // Store results in sessionStorage
    sessionStorage.setItem('quizScore', score);
    sessionStorage.setItem('correctAnswers', correctCount);
    sessionStorage.setItem('totalQuestions', currentQuestions.length);
    sessionStorage.setItem('totalTime', totalTime);
    sessionStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    sessionStorage.setItem('userAnswerTimes', JSON.stringify(userAnswerTimes));
    sessionStorage.setItem('currentQuestions', JSON.stringify(currentQuestions));

    clearInterval(timerInterval);

    // Redirect to results page
    window.location.href = 'results.html';
}

// Initialize Results Page
function initializeResults() {
    const score = parseInt(sessionStorage.getItem('quizScore'));
    const correctAnswers = parseInt(sessionStorage.getItem('correctAnswers'));
    const totalQuestions = parseInt(sessionStorage.getItem('totalQuestions'));
    const totalTime = parseInt(sessionStorage.getItem('totalTime'));
    const selectedAnswers = JSON.parse(sessionStorage.getItem('selectedAnswers'));
    const userAnswerTimes = JSON.parse(sessionStorage.getItem('userAnswerTimes'));
    const currentQuestions = JSON.parse(sessionStorage.getItem('currentQuestions'));

    if (!currentQuestions) {
        window.location.href = 'index.html';
        return;
    }

    // Trigger confetti animation for high scores
    if (score >= 70) {
        createConfetti();
    }

    // Update summary cards
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = totalQuestions - correctAnswers;
    document.getElementById('totalTime').textContent = formatTime(totalTime);

    // Create answer distribution chart
    const answerCtx = document.getElementById('answerChart').getContext('2d');
    new Chart(answerCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correctAnswers, totalQuestions - correctAnswers],
                backgroundColor: ['#27ae60', '#e74c3c'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Create time spent chart
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: currentQuestions.map((q, i) => `Q${i + 1}`),
            datasets: [{
                label: 'Time (seconds)',
                data: userAnswerTimes,
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Create detailed results table
    const tableBody = document.getElementById('detailedResultsBody');
    tableBody.innerHTML = '';

    currentQuestions.forEach((question, index) => {
        const row = document.createElement('tr');
        const isCorrect = selectedAnswers[index] === question.correctAnswer;

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${question.question}</td>
            <td>${selectedAnswers[index] !== null ? question.options[selectedAnswers[index]] : 'Not answered'}</td>
            <td>${question.options[question.correctAnswer]}</td>
            <td>${userAnswerTimes[index]}s</td>
            <td class="${isCorrect ? 'status-correct' : 'status-incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</td>
        `;

        tableBody.appendChild(row);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
}

// Create confetti effect for high scores
function createConfetti() {
    const confettiCount = 50;
    const colors = ['#667eea', '#764ba2', '#27ae60', '#f39c12', '#e74c3c'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random position across screen width
        const xPos = Math.random() * window.innerWidth;
        confetti.style.left = xPos + 'px';
        confetti.style.top = '-10px';
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random delay for cascade effect
        const delay = Math.random() * 0.5;
        confetti.style.animationDelay = delay + 's';
        
        document.body.appendChild(confetti);
        confetti.classList.add('falling');
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 3000 + delay * 1000);
    }
}


// Check if on quiz page
if (document.getElementById('quizPage')) {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
}
