/* ===== FICHIER À MODIFIER : liens, email, CV, photo, compétences, intérêts =====
   Mettez vos valeurs entre guillemets, enregistrez, puis rafraîchissez la page. */
const CONFIG={
 email:"idris.gafi@aims-cameroon.org",            // e.g. "name@example.com"
 github:"https://github.com/Dimitrigafi2", linkedin:"https://www.linkedin.com/in/idris-gafi", researchgate:"https://www.researchgate.net/profile/Idris-Dimitri-Gafi-Youngwe", scholar:"", orcid:"",
 docs1:"",            // documentation link for the UAV project
 cvUrl:"cv/CV_Idris_Dimitri_GAFI_YOUNGWE.pdf",            // e.g. "cv/Idris_Youngwe_CV.pdf" (put the file next to this page)
 photoUrl:"images/Best1.jpeg",         // chemin de la photo
 photoZoom:1.8, photoX:43, photoY:4,    // cadrage : zoom (1 à 3) et position (0 à 100 %)
 photoShape:"circle",                   // "circle", "rounded", "square" ou "portrait"
 photoSize:240,                         // taille en pixels
 // Astuce : ouvrez index.html?adjust pour régler la photo avec des curseurs, puis copiez les valeurs ici.
 formEndpoint:""      // reserved for a form service (Formspree, Netlify Forms, etc.)
};
const SKILLS={
 "Artificial Intelligence & Machine Learning":["Supervised Machine Learning","Unsupervised Machine Learning","Deep Learning","Computer Vision","Natural Language Processing","Large Language Model Integration","Retrieval-Augmented Generation"],
 "Data Science & Scientific Computing":["Data Analysis","Statistical Methods","Mathematical Modelling","Numerical Methods","Optimization","Python","R","NumPy","Pandas"],
 "Software Development & AI Infrastructure":["Python","FastAPI","REST API Development","Git and GitHub","Docker","Ollama","LangChain","LangGraph","Qdrant"],
 "Robotics & Autonomous Systems":["ROS 2","Gazebo","ArduPilot SITL","MAVLink","Visual SLAM","Autonomous Navigation Concepts"],
 "Physics & Engineering":["Physics","Electronics","Electrical Engineering","Automation","Control Systems","Signal Processing","Linear Algebra","Probability"]};
const RESEARCH=[["AI for Science","Applying AI to scientific discovery workflows."],["Machine Learning for Scientific Applications","Data-driven methods for scientific problems."],["Computer Vision","Visual perception for intelligent systems."],["Robotics & Autonomous Systems","Navigation and coordination of autonomous vehicles."],["Visual SLAM & Autonomous Navigation","Camera-based localization and mapping."],["Intelligent Systems","Integrating AI into reliable engineered systems."],["Scientific Computing","Numerical and computational methods."],["Physics-Informed & Data-Driven Modelling","Combining physical knowledge with learning."],["AI-Enabled Engineering","AI applied to electrical and automation engineering."]];
