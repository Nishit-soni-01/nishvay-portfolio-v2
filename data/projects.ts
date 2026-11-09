export type ApiEndpoint = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
};

export type Project = {
  slug?: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlight?: string;
  image?: string;
  gallery?: string[];
  overview?: string;
  features?: string[];
  challenges?: string[];
  githubUrl?: string;
  liveUrl?: string;
  apiEndpoints?: ApiEndpoint[];
  metrics?: {
    label: string;
    value: string;
  }[];
};

export type ProjectCategory = {
  id: string;
  title: string;
  description: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "web-development",
    title: "Web Development & Software Engineering",
    description:
      "Full-stack applications, backend systems and interactive web experiences.",
    projects: [
      {
        number: "01",
        slug: "authify",
        title: "Authify",
        subtitle: "Authentication Lifecycle Management",
        description:
          "A full-stack authentication application designed to provide secure user registration, login, email verification and password recovery.",
        technologies: [
          "Next.js",
          "React",
          "MongoDB",
          "Node.js",
          "Nodemailer",
          "Mailtrap",
          "Tailwind CSS",
          "JavaScript",
        ],
        image: "/projects/authify/login.png",
        gallery: [
          "/projects/authify/login.png",
          "/projects/authify/signup.png",
        ],
        overview:
          "Authify is a full-stack authentication application that manages the complete user authentication lifecycle. It allows users to create accounts, securely log in, verify their email addresses and recover forgotten passwords.",
        features: [
          "User registration and account creation",
          "Secure login and authentication",
          "Email verification using Nodemailer and Mailtrap",
          "Password reset through email-based verification",
          "MongoDB-based user data management",
          "Responsive authentication interface",
        ],
        challenges: [
          "Implementing the complete authentication lifecycle",
          "Integrating email delivery for verification and password recovery",
          "Handling authentication states and user feedback",
        ],
        githubUrl: "https://github.com/Nishit-soni-01/authify-nextjs",
        liveUrl: "https://authify-nextjs-gamma.vercel.app/login",
      },
      {
        number: "02",
        title: "Riverflow Q&A",
        subtitle: "Developer Question & Answer Platform",
        description:
          "A developer community platform featuring OAuth authentication, question voting, reputation scoring and content search.",
        technologies: ["Next.js 16", "Appwrite", "TypeScript", "Tailwind CSS"],
        image: "/projects/riverflow/dashboard.png",
        gallery: [
          "/projects/riverflow/dashboard.png",
          "/projects/riverflow/login.png",
          "/projects/riverflow/signup.png",
        ],
        slug: "riverflow",
        features: [
          "Google and GitHub OAuth authentication",
          "Email and password authentication",
          "Create, publish, and browse questions",
          "Post answers and participate in discussions",
          "Upvote and downvote questions and answers",
          "User reputation system",
          "Markdown-based question editor",
          "Search questions",
          "Appwrite TablesDB integration",
        ],
        githubUrl: "https://github.com/Nishit-soni-01/riverflow-qna-platform",
        liveUrl: "https://riverflow-qna-platform.vercel.app",
      },
      {
        number: "03",
        slug: "videotube-api",
        title: "VideTube API",
        subtitle: "Video Streaming Backend",
        description:
          "A feature-rich backend API for a video-sharing platform, supporting authentication, media uploads, subscriptions, likes, comments, and video management.",
        technologies: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Cloudinary",
          "JWT",
        ],
        image: "/projects/videotube/publish-video.png",
        gallery: [
          "/projects/videotube/register.png",
          "/projects/videotube/login.png",
          "/projects/videotube/refresh-token.png",
          "/projects/videotube/publish-video.png",
          "/projects/videotube/get-video.png",
          "/projects/videotube/add-comment.png",
          "/projects/videotube/toggle-like.png",
        ],
        overview:
          "VideTube API is a backend application designed to power a video-sharing platform. It provides RESTful APIs for user authentication, video management, media uploads, subscriptions, likes, and comments. MongoDB and Mongoose handle data persistence, while Cloudinary manages media storage.",
        features: [
          "User registration and login",
          "JWT-based access and refresh token authentication",
          "Secure cookie-based session management",
          "Video upload and management",
          "Media storage using Cloudinary",
          "Channel subscription functionality",
          "Like and dislike functionality",
          "Comment management",
          "MongoDB-based data management",
          "RESTful API architecture",
        ],
        challenges: [
          "Implementing access and refresh token authentication",
          "Managing secure authentication and session handling",
          "Handling video and image uploads through Cloudinary",
          "Designing MongoDB schemas and relationships",
          "Managing subscriptions and user interactions",
          "Structuring reusable controllers, routes, and middleware",
        ],
        apiEndpoints: [
          {
            method: "POST",
            path: "/api/v1/users/register",
            description: "Register a new user with profile and cover images.",
          },
          {
            method: "POST",
            path: "/api/v1/users/login",
            description: "Authenticate a user using email and password.",
          },
          {
            method: "POST",
            path: "/api/v1/users/refresh-token",
            description: "Generate a refreshed authentication token.",
          },
          {
            method: "POST",
            path: "/api/v1/videos",
            description: "Publish a video with its title, description, video file, and thumbnail.",
          },
          {
            method: "GET",
            path: "/api/v1/videos/:videoId",
            description: "Retrieve a video using its ID.",
          },
          {
            method: "POST",
            path: "/api/v1/comments/:videoId",
            description: "Add a comment to a video.",
          },
          {
            method: "POST",
            path: "/api/v1/likes/toggle/v/:videoId",
            description: "Toggle the like status of a video.",
          },
        ],
      },
      {
        number: "04",
        slug: "todo-manager",
        title: "Todo Manager",
        subtitle: "Task Management Application",
        description:
          "A responsive task management application with CRUD operations, priority sorting, task filtering and persistent local storage.",
        technologies: [
          "React",
          "Context API",
          "Tailwind CSS",
          "LocalStorage",
        ],
        image: "/projects/todo-manager/overview.png",
        gallery: [
          "/projects/todo-manager/overview.png",
          "/projects/todo-manager/completed-tasks.png",
          "/projects/todo-manager/completed-filter.png",
          "/projects/todo-manager/active-filter.png",
        ],
        overview:
          "Todo Manager is a responsive task management application that helps users organize daily activities. It supports task creation, editing, deletion, completion tracking and priority management. Context API manages application state, while LocalStorage preserves tasks across browser sessions.",
        features: [
          "Create and manage tasks",
          "Edit existing tasks",
          "Delete individual tasks",
          "Mark tasks as completed",
          "Filter tasks by All, Active and Completed",
          "Clear all completed tasks",
          "Assign task priorities",
          "Display remaining active tasks",
          "Persist tasks using LocalStorage",
          "Responsive user interface",
        ],
        challenges: [
          "Managing shared application state using Context API",
          "Implementing task filtering and completion logic",
          "Maintaining task data across browser sessions",
          "Handling task updates and deletion consistently",
          "Designing a clean and responsive interface",
        ],
      },
      {
  number: "05",
  slug: "currency-converter",
  title: "Currency Converter",
  subtitle: "Real-Time Currency Conversion",
  description:
    "A responsive currency conversion utility featuring exchange-rate API integration, custom React hooks and bi-directional currency swapping.",
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
  ],
  image: "/projects/currency-converter/overview.png",
  gallery: [
    "/projects/currency-converter/overview.png",
    "/projects/currency-converter/usd-to-inr.png",
    "/projects/currency-converter/inr-to-usd.png",
  ],
  githubUrl:
    "https://github.com/Nishit-soni-01/Currency-Converter",
  overview:
    "Currency Converter is a React-based application that allows users to convert amounts between different currencies. It integrates exchange-rate data through an external API and provides a simple interface for selecting currencies, entering amounts and viewing converted values.",
  features: [
    "Currency conversion using exchange-rate API data",
    "Support for multiple currencies",
    "Dynamic amount input",
    "Bi-directional currency swapping",
    "Automatic conversion result updates",
    "Exchange-rate display",
    "Reusable currency input components",
    "Custom React hook for fetching currency information",
    "Responsive user interface",
  ],
  challenges: [
    "Integrating external exchange-rate API data",
    "Managing asynchronous API requests",
    "Handling currency selection and conversion state",
    "Implementing bi-directional currency swapping",
    "Creating reusable components and custom hooks",
    "Keeping conversion results synchronized with user input",
  ],
},
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Predictive models, intelligent applications, NLP and deep learning systems.",
    projects: [
      
{
  number: "01",
  slug: "ai-oracle",
  title: "AI Oracle",
  subtitle: "Gaussian Naive Bayes Predictive Dice Application",
  description:
    "An interactive predictive dice application combining Gaussian Naive Bayes with probability-based gaming. Users configure a target dice sum and luck coefficient to explore predicted winning probabilities before rolling.",

  technologies: [
    "Python",
    "Scikit-learn",
    "Streamlit",
    "NumPy",
    "Pandas",
  ],

  image: "/projects/ai-oracle/overview.png",

  gallery: [
    "/projects/ai-oracle/overview.png",
    "/projects/ai-oracle/prediction-result.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/AI-Dice-Oracle-Predictive-Risk-Modeling",

  liveUrl:
    "https://ai-dice-oracle-predictive-risk-modeling-boas8cw6iztrpjrjej8jpe.streamlit.app/",

  overview:
    "AI Oracle is an interactive machine learning application that connects probabilistic prediction with a dice-based gaming environment. Built using Gaussian Naive Bayes and Streamlit, it estimates the probability of achieving a selected dice sum based on configurable input parameters. Users can adjust the target sum and luck coefficient, view the predicted winning probability, and execute a dice roll to compare the outcome with the model's prediction.",

  features: [
    "Predictive modeling using Gaussian Naive Bayes",
    "Interactive dice-based gaming environment",
    "Configurable target sum between 2 and 12",
    "Adjustable luck coefficient",
    "Dynamic winning probability calculation",
    "Interactive dice roll simulation",
    "Comparison of predicted and actual outcomes",
    "Roll history tracking",
    "Model diagnostics interface",
    "Interactive dashboard built with Streamlit",
  ],

  challenges: [
    "Applying Gaussian Naive Bayes to a probability-based prediction problem",
    "Connecting model predictions with an interactive gaming environment",
    "Handling configurable input parameters such as target sum and luck coefficient",
    "Presenting predicted probabilities in an understandable format",
    "Connecting predicted outcomes with actual dice roll results",
    "Building an interactive interface for real-time user interaction",
  ],
},

      
{
  number: "02",
  slug: "imdb-sentiment-analysis",
  title: "IMDB Sentiment Analysis",
  subtitle: "Movie Review Sentiment Classification",
  description:
    "An NLP application powered by a SimpleRNN model that analyzes movie reviews and classifies their sentiment as positive or negative.",

  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "NLTK",
    "Streamlit",
  ],

  image: "/projects/imdb-sentiment-analysis/overview.png",

  gallery: [
    "/projects/imdb-sentiment-analysis/overview.png",
    "/projects/imdb-sentiment-analysis/positive-result.png",
    "/projects/imdb-sentiment-analysis/negative-result.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/-IMDB-Review-Classifier-using-RNN",

  liveUrl:
    "https://xgnnehng4p34ndpvcepzn9.streamlit.app/",

  overview:
    "IMDB Sentiment Analysis is a natural language processing application that uses a Simple Recurrent Neural Network (SimpleRNN) to classify movie reviews into positive and negative sentiments. Users can enter a review through the Streamlit interface and receive a predicted sentiment along with its confidence score.",

  features: [
    "Movie review sentiment classification",
    "SimpleRNN-based deep learning model",
    "Positive and negative sentiment prediction",
    "Text input for custom movie reviews",
    "Confidence score for predictions",
    "Natural language text processing",
    "Interactive Streamlit interface",
    "Real-time review classification",
  ],

  challenges: [
    "Preparing and preprocessing textual review data",
    "Converting natural language text into numerical representations",
    "Training a recurrent neural network for sentiment classification",
    "Managing variable-length movie reviews",
    "Interpreting model predictions and confidence scores",
    "Integrating the trained model into a Streamlit application",
  ],
},

      
{
  number: "03",
  slug: "creditshield-ai",
  title: "CreditShield AI",
  subtitle: "Credit Scoring & Loan Risk Prediction",
  description:
    "An interactive machine learning application that evaluates loan applicants and predicts credit risk using a Decision Tree classification model.",

  technologies: [
    "Python",
    "Scikit-learn",
    "Streamlit",
    "Plotly",
    "Pandas",
    "NumPy",
  ],

  highlight: "~92% Accuracy",

  image: "/projects/creditshield-ai/overview.png",

  gallery: [
    "/projects/creditshield-ai/overview.png",
    "/projects/creditshield-ai/low-risk-result.png",
    "/projects/creditshield-ai/confidence-score.png",
    "/projects/creditshield-ai/high-risk-result.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/Credit-Risk-Predictor",

  liveUrl:
    "https://credit-risk-predictor-klhq3fgkwxnmuumpj5xvu2.streamlit.app/",

  overview:
    "CreditShield AI is a machine learning-based credit risk assessment application designed to evaluate loan applicants. It uses a Decision Tree classification model to analyze financial and personal applicant information and predict whether an applicant falls into a low-risk or high-risk category. The Streamlit dashboard presents the prediction through risk verdicts and interactive confidence-score visualizations.",

  features: [
    "Credit risk prediction using Decision Tree",
    "Interactive applicant information form",
    "Age and annual income assessment",
    "Home ownership and work experience analysis",
    "Loan purpose and credit grade evaluation",
    "Loan amount and interest rate assessment",
    "Prior default history consideration",
    "Low-risk and high-risk classification",
    "Loan approval and rejection verdicts",
    "Interactive confidence-score gauge using Plotly",
    "Feature importance analysis",
    "Streamlit-based interactive dashboard",
  ],

  challenges: [
    "Preparing financial data for machine learning",
    "Selecting relevant applicant features for credit risk assessment",
    "Training and evaluating the Decision Tree classifier",
    "Handling different numerical and categorical applicant attributes",
    "Converting model predictions into understandable risk verdicts",
    "Visualizing prediction confidence through interactive gauges",
    "Integrating the trained model with the Streamlit interface",
  ],

  metrics: [
    { label: "Model Accuracy", value: "92%" },
    { label: "Model Engine", value: "Decision Tree" },
    { label: "Risk Categories", value: "2" },
    { label: "Prediction Output", value: "Risk Verdict" },
  ],
},

      
{
  number: "04",
  slug: "predictive-maintenance-system",
  title: "Predictive Maintenance System",
  subtitle: "AI-Powered Industrial Equipment Failure Prediction",
  description:
    "A machine learning-based predictive maintenance platform that analyzes electrical sensor telemetry to identify abnormal operating conditions and predict potential equipment failures.",

  technologies: [
    "Python",
    "Scikit-learn",
    "Random Forest",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Plotly",
  ],

  highlight: "97% Model Accuracy",

  image: "/projects/predictive-maintenance/overview.png",

  gallery: [
    "/projects/predictive-maintenance/overview.png",
    "/projects/predictive-maintenance/sensor-data.png",
    "/projects/predictive-maintenance/diagnostics.png",
    "/projects/predictive-maintenance/failure-analysis.png",
    "/projects/predictive-maintenance/system-status.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/AI-Powered-Predictive-Maintenance-for-Electrical-Systems",

  overview:
    "The Predictive Maintenance System is an AI-powered application designed to monitor electrical equipment and identify potential operational failures using machine learning. It analyzes sensor parameters such as voltage, current, temperature, and vibration. The system supports individual sensor monitoring and batch analysis through CSV uploads. A Random Forest classifier processes engineered sensor features and provides diagnostic insights through an interactive Streamlit dashboard.",

  features: [
    "Electrical sensor monitoring for voltage, current, temperature, and vibration",
    "Interactive sensor input controls",
    "Real-time nominal status monitoring",
    "CSV-based batch sensor data upload",
    "Automated sensor data diagnostics",
    "Feature engineering using rolling means",
    "Rolling standard deviation and lag features",
    "Random Forest-based failure prediction",
    "Sensor anomaly visualization",
    "Success versus failure analytics",
    "Failure prediction timeline",
    "Record-level pass/fail analysis",
    "Interactive diagnostic dashboard using Plotly",
  ],

  challenges: [
    "Processing industrial sensor telemetry from multiple sources",
    "Handling time-series sensor readings",
    "Engineering rolling statistical and lag-based features",
    "Identifying abnormal operating conditions across different sensors",
    "Training and evaluating a Random Forest classifier",
    "Building a batch-processing workflow for CSV sensor logs",
    "Visualizing sensor anomalies and diagnostic results",
    "Presenting machine learning predictions through an interactive dashboard",
  ],

  metrics: [
    { label: "Model Accuracy", value: "97%" },
    { label: "Sensor Parameters", value: "4" },
    { label: "Early Alert Target", value: "24h" },
    { label: "Downtime Reduction", value: "30%" },
    { label: "Records Analyzed", value: "2,000" },
    { label: "Model", value: "Random Forest" },
  ],
},

      
{
  number: "05",
  slug: "sms-spam-detection",
  title: "SMS Spam Detection",
  subtitle: "NLP-Based Message Classification",
  description:
    "A machine learning-based NLP pipeline that classifies SMS messages as spam or legitimate by comparing Bag of Words, TF-IDF, and Word2Vec feature extraction techniques.",

  technologies: [
    "Python",
    "Scikit-learn",
    "NLTK",
    "Gensim",
    "Pandas",
    "NumPy",
  ],

  highlight: "98.57% Accuracy",

  image: "/projects/sms-spam-detection/accuracy-comparison.png",

  gallery: [
    "/projects/sms-spam-detection/accuracy-comparison.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/SMS-Spam-Detection-NLP-Feature-Engineering",

  overview:
    "SMS Spam Detection is a natural language processing and machine learning project designed to distinguish spam messages from legitimate SMS messages. The project explores different text representation techniques, including Bag of Words, TF-IDF, and Word2Vec, and compares their classification performance to identify the most effective feature extraction approach.",

  features: [
    "SMS spam and legitimate message classification",
    "Text preprocessing using NLP techniques",
    "Bag of Words feature extraction",
    "TF-IDF text representation",
    "Word2Vec-based word embeddings",
    "Comparison of multiple feature extraction techniques",
    "Machine learning model evaluation",
    "Test accuracy comparison visualization",
  ],

  challenges: [
    "Cleaning and preprocessing raw SMS text data",
    "Converting text messages into numerical feature representations",
    "Implementing multiple feature extraction techniques",
    "Working with sparse text representations",
    "Applying Word2Vec embeddings to message classification",
    "Comparing model performance across different NLP approaches",
    "Selecting an effective representation for spam detection",
  ],

  metrics: [
    { label: "Bag of Words Accuracy", value: "98.57%" },
    { label: "TF-IDF Accuracy", value: "98.12%" },
    { label: "Word2Vec Accuracy", value: "96.50%" },
    { label: "Best Technique", value: "Bag of Words" },
  ],
},

      
{
  number: "06",
  slug: "moviematch",
  title: "MovieMatch",
  subtitle: "KNN-Based Movie Recommendation Engine",
  description:
    "A content recommendation application that discovers similar movies using K-Nearest Neighbors, cosine similarity, and sparse matrix processing.",

  technologies: [
    "Python",
    "Scikit-learn",
    "SciPy",
    "Streamlit",
    "Pandas",
    "NumPy",
  ],

  image: "/projects/moviematch/overview.png",

  gallery: [
    "/projects/moviematch/overview.png",
    "/projects/moviematch/movie-selection.png",
    "/projects/moviematch/recommendations.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/Cinematic-Similarity-Finder-using-K-Nearest-Neighbors",

  overview:
    "MovieMatch is a movie recommendation system that suggests films based on similarity in user rating patterns. It uses a K-Nearest Neighbors algorithm and cosine similarity to identify movies with similar rating profiles. Users can select a movie through an interactive Streamlit interface and receive a collection of recommended movies with their posters and titles.",

  features: [
    "Movie search and selection",
    "Movie recommendations using K-Nearest Neighbors",
    "Cosine similarity-based recommendation",
    "Sparse matrix processing",
    "Similarity-based movie discovery",
    "Multiple movie recommendations per selection",
    "Movie posters and titles in recommendation results",
    "Interactive Streamlit interface",
  ],

  challenges: [
    "Preparing movie rating data for recommendation",
    "Representing movie-user rating relationships",
    "Handling sparse rating matrices efficiently",
    "Calculating cosine similarity between movie profiles",
    "Implementing K-Nearest Neighbors for movie discovery",
    "Generating relevant recommendations for selected movies",
    "Displaying recommendation results in an interactive interface",
  ],
},

      
{
  number: "07",
  slug: "vitalguard-ai",
  title: "VitalGuard AI",
  subtitle: "Explainable Patient Triage System",
  description:
    "An interactive clinical decision-support prototype that uses a Decision Tree model to assess patient risk based on clinical parameters and provide explainable triage insights.",

  technologies: [
    "Python",
    "Scikit-learn",
    "Streamlit",
    "Plotly",
    "Pandas",
    "NumPy",
  ],

  image: "/projects/vitalguard-ai/stable-result.png",

  gallery: [
    "/projects/vitalguard-ai/stable-result.png",
    "/projects/vitalguard-ai/monitor-result.png",
    "/projects/vitalguard-ai/critical-result.png",
  ],

  githubUrl:
    "https://github.com/Nishit-soni-01/Smart-Health-Triage-System",

  liveUrl:
    "https://smart-health-triage-system-dbsx3prbdrlodekif8b4vn.streamlit.app/",

  overview:
    "VitalGuard AI is an interactive clinical decision-support prototype designed to demonstrate patient risk assessment using machine learning. It uses a Decision Tree classifier to evaluate clinical parameters, including blood glucose, BMI, blood pressure, and age. The application presents a risk probability, assigns a triage status, and provides model insights explaining the prediction path.",

  features: [
    "Patient clinical parameter input",
    "Blood glucose assessment",
    "BMI evaluation",
    "Blood pressure monitoring",
    "Age-based risk assessment",
    "Decision Tree-based risk classification",
    "Stable, Monitor, and Critical triage categories",
    "Risk probability visualization",
    "Clinical comparison with healthy population averages",
    "Explainable AI model insights",
    "Interactive Plotly visualizations",
    "Data privacy status indicator",
    "Streamlit-based dashboard",
  ],

  challenges: [
    "Preparing clinical parameters for machine learning",
    "Selecting relevant features for patient risk assessment",
    "Training and applying an interpretable Decision Tree classifier",
    "Converting model predictions into understandable triage categories",
    "Calculating and displaying risk probability",
    "Comparing patient parameters with population reference values",
    "Explaining model decisions through prediction-path insights",
    "Building an interactive clinical assessment dashboard",
  ],
},

      {
        number: "08",
        slug: "sentinel-ai",
        title: "Sentinel-AI",
        subtitle: "Real-Time Fraud Mitigation Engine",
        description:
          "A cost-sensitive machine learning fraud detection system designed to identify fraudulent financial transactions in highly imbalanced datasets.",
        technologies: [
          "Python",
          "Scikit-learn",
          "Pandas",
          "NumPy",
          "AWS EC2",
          "Docker",
        ],
        highlight: "65% Fraud Recall",
        image: "/projects/sentinel-ai/dashboard.png",
        gallery: [
          "/projects/sentinel-ai/dashboard.png",
        ],
        overview:
          "Sentinel-AI is a machine learning-based fraud detection system built to identify fraudulent transactions in highly imbalanced financial data. It uses cost-sensitive Logistic Regression and threshold optimization to improve fraud detection performance while addressing the challenges of class imbalance.",
        features: [
          "Fraud detection using Logistic Regression",
          "Cost-sensitive model training",
          "Handling highly imbalanced 98:2 transaction data",
          "Custom classification threshold optimization",
          "Fraud detection recall evaluation",
          "Model deployment using Docker",
          "Cloud deployment on AWS EC2",
        ],
        challenges: [
          "Handling severe class imbalance in financial transaction data",
          "Reducing false negatives during fraud detection",
          "Optimizing the classification threshold for better fraud recall",
          "Deploying the trained machine learning model using Docker and AWS EC2",
        ],
        metrics: [
          { label: "Accuracy", value: "92%" },
          { label: "ROC-AUC", value: "0.81" },
          { label: "Fraud Precision", value: "11%" },
          { label: "Fraud Recall", value: "65%" },
          { label: "Fraud F1-Score", value: "19%" },
          { label: "Test Transactions", value: "10,000" },
        ],
      },
      {
        number: "09",
        slug: "algerian-forest-fire-predictor",
        title: "Algerian Forest Fire Predictor",
        subtitle: "Fire Weather Index Prediction",
        description:
          "A machine learning web application that predicts the Fire Weather Index (FWI) using meteorological data and Ridge Regression.",
        technologies: [
          "Python",
          "Scikit-learn",
          "Pandas",
          "NumPy",
          "Flask",
          "Bootstrap",
          "AWS Elastic Beanstalk",
        ],
        image: "/projects/forest-fire/prediction.jpeg",
        gallery: [
          "/projects/forest-fire/prediction.jpeg",
          "/projects/forest-fire/landing-page.jpeg",
          "/projects/forest-fire/aws-deployment.jpeg",
          "/projects/forest-fire/model-analysis.jpeg",
        ],
        overview:
          "Algerian Forest Fire Predictor is a machine learning application designed to estimate the Fire Weather Index using meteorological and environmental measurements. It uses a Ridge Regression model and a Flask-based web interface to provide predictions.",
        features: [
          "Fire Weather Index prediction using Ridge Regression",
          "Meteorological data input",
          "Machine learning-based prediction",
          "Flask web application",
          "Responsive interface using Bootstrap",
          "Cloud deployment using AWS Elastic Beanstalk",
        ],
        challenges: [
          "Preparing meteorological data for machine learning",
          "Training and integrating the Ridge Regression model",
          "Connecting the trained model with the Flask application",
          "Deploying the application to AWS Elastic Beanstalk",
        ],
        metrics: [
          { label: "R² Score", value: "0.984" },
          { label: "Mean Absolute Error", value: "0.564" },
          { label: "Model", value: "Ridge Regression" },
        ],
      },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description:
      "Interactive dashboards, business reporting and data-driven decision-making.",
    projects: [
      {
        number: "01",
        slug: "excel-production-analysis",
        title: "Excel Production Analysis",
        subtitle: "Manufacturing Operations Dashboard",
        description:
          "An interactive Excel dashboard designed to monitor manufacturing performance, analyze production output, track component defects, and evaluate shift productivity and machinery health.",
        technologies: [
          "Microsoft Excel",
          "PivotTables",
          "PivotCharts",
          "Slicers",
          "Data Cleaning",
          "Data Analysis",
        ],
        image: "/projects/excel-production/dashboard.png",
        gallery: [
          "/projects/excel-production/dashboard.png",
          "/projects/excel-production/production-cost.png",
          "/projects/excel-production/manager-tasks.png",
          "/projects/excel-production/monthly-production.png",
          "/projects/excel-production/average-cost.png",
        ],
        overview:
          "Excel Production Analysis is a manufacturing analytics project that transforms production data into an interactive dashboard. It helps monitor factory output, identify component defects, compare shift productivity, and track machinery health using Excel's data analysis and visualization capabilities.",
        features: [
          "Factory production output monitoring",
          "Component defect analysis",
          "Shift-wise productivity analysis",
          "Machinery health monitoring",
          "Interactive dashboard using Excel Slicers",
          "Data summarization using PivotTables",
          "Visual reporting using PivotCharts",
        ],
        challenges: [
          "Organizing manufacturing production data",
          "Analyzing component defects and production output",
          "Comparing productivity across different shifts",
          "Creating meaningful KPIs for manufacturing operations",
          "Building an interactive dashboard using PivotTables and Slicers",
        ],
      },
      {
        number: "02",
        slug: "banking-data-analysis",
        title: "Banking Data Analysis Dashboard",
        subtitle: "Banking Business Intelligence",
        description:
          "A SQL Server and Power BI analytics solution designed to explore customer balances, account churn, and customer demographics through interactive business intelligence dashboards.",
        technologies: [
          "SQL Server",
          "T-SQL",
          "Power BI",
          "DAX",
          "Data Modeling",
          "Data Visualization",
        ],
        image: "/projects/banking-analysis/banking-dashboard-1.png",
        gallery: [
          "/projects/banking-analysis/banking-dashboard-1.png",
          "/projects/banking-analysis/banking-dashboard-2.png",
          "/projects/banking-analysis/database-schema.png",
          "/projects/banking-analysis/sql-data-preparation.png",
          "/projects/banking-analysis/dax-measures.png",
        ],
        liveUrl:
          "https://app.powerbi.com/links/SPIT86XoI9?ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&pbi_source=linkShare",
        overview:
          "Banking Data Analysis is a business intelligence project that combines SQL Server and Power BI to analyze banking customer data. It focuses on customer balances, account churn, and demographic patterns to support data-driven insights.",
        features: [
          "Customer balance analysis",
          "Account churn analysis",
          "Customer demographic analysis",
          "Data querying using T-SQL",
          "Data modeling in Power BI",
          "Interactive dashboard visualizations",
          "Business insights using DAX measures",
        ],
        challenges: [
          "Querying and preparing banking data using SQL Server",
          "Analyzing customer balances and account information",
          "Identifying patterns in customer churn",
          "Exploring customer demographics",
          "Building data models and DAX measures",
          "Presenting banking insights through Power BI dashboards",
        ],
      },
      {
        number: "03",
        slug: "t-shirt-sales-analysis",
        title: "T-shirt Sales Analysis Dashboard",
        subtitle: "Retail Sales & Revenue Analytics",
        description:
          "An interactive Power BI dashboard analyzing T-shirt sales performance, product costs, discount patterns, and revenue distribution to uncover retail business insights.",
        technologies: [
          "Power BI",
          "Power Query",
          "DAX",
          "Data Modeling",
          "Data Visualization",
        ],
        image: "/projects/tshirt-sales/sales-dashboard.png",
        gallery: [
          "/projects/tshirt-sales/sales-dashboard.png",
          "/projects/tshirt-sales/landing-page.png",
          "/projects/tshirt-sales/dax-calculated-columns.png",
          "/projects/tshirt-sales/dax-measures.png",
        ],
        liveUrl:
          "https://app.powerbi.com/links/kGmgxDngF_?ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&pbi_source=linkShare&bookmarkGuid=9d0dd223-e12f-42e1-8b05-78f1fa5861d7",
        overview:
          "T-shirt Sales Analysis is a retail analytics project built using Power BI. It focuses on examining sales performance, product costs, discount patterns, and revenue distribution through interactive visualizations and business intelligence techniques.",
        features: [
          "Retail sales performance analysis",
          "Product cost analysis",
          "Discount distribution analysis",
          "Revenue analysis",
          "Data transformation using Power Query",
          "DAX measures for business calculations",
          "Interactive Power BI visualizations",
        ],
        challenges: [
          "Preparing and transforming retail sales data using Power Query",
          "Analyzing product costs and discount patterns",
          "Building appropriate data models",
          "Creating DAX measures for sales analysis",
          "Designing interactive dashboards for business insights",
        ],
      },
      {
        number: "04",
        slug: "loan-default-analysis",
        title: "Loan Default Analysis",
        subtitle: "Financial Risk Analytics",
        description:
          "An interactive financial analytics dashboard analyzing 80,000 loan records to uncover default patterns, borrower demographics and credit risk trends.",
        technologies: ["Power BI", "Power Query", "DAX"],
        highlight: "80K Loan Records",
        image: "/projects/loan-default/overview.png",
        gallery: [
          "/projects/loan-default/overview.png",
          "/projects/loan-default/demographics.png",
          "/projects/loan-default/risk-matrices.png",
          "/projects/loan-default/dax-measures.png",
          "/projects/loan-default/dax-measures-advanced.png",
          "/projects/loan-default/time-intelligence.png",
          "/projects/loan-default/insights.png",
        ],
        liveUrl:
          "https://app.powerbi.com/links/_lCFa3oBfH?ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&pbi_source=linkShare",
        overview:
          "Loan Default Analysis is a Power BI project focused on understanding loan portfolio performance and identifying patterns associated with loan defaults. SQL and DAX calculations support data preparation, financial KPIs, demographic analysis and time-based risk evaluation.",
        features: [
          "Analysis of 80,000 loan records",
          "Loan default rate and portfolio health analysis",
          "Borrower segmentation by age, gender and employment type",
          "Credit score category analysis",
          "Loan purpose and amount analysis",
          "Year-over-year default and loan amount comparisons",
          "YTD and monthly financial analysis",
          "Interactive Power BI visualizations",
        ],
        challenges: [
          "Cleaning and standardizing dates across multiple SQL tables",
          "Combining customer, account and transaction datasets",
          "Creating advanced DAX measures for financial KPIs",
          "Implementing time-intelligence calculations",
          "Analyzing default patterns across demographic segments",
          "Designing interactive dashboards for financial risk analysis",
        ],
        metrics: [
          { label: "Total Loans", value: "80,000" },
          { label: "Defaulted Loans", value: "18,000" },
          { label: "Default Rate", value: "21.93%" },
          { label: "Average Loan Amount", value: "$18.3K" },
        ],
      },
      {
        number: "05",
        slug: "upi-transaction-analysis-tableau",
        title: "UPI Transaction Analysis",
        subtitle: "Tableau FinTech Analytics Dashboard",
        description:
          "A four-page Tableau Story exploring UPI transaction patterns, customer demographics, city-wise payment activity, and merchant performance.",
        technologies: [
          "Tableau",
          "Calculated Fields",
          "Tableau Public",
          "Data Visualization",
          "Business Intelligence",
        ],
        image: "/projects/upi-tableau/overview.png",
        gallery: [
          "/projects/upi-tableau/overview.png",
          "/projects/upi-tableau/city-analysis.png",
          "/projects/upi-tableau/age-analysis.png",
          "/projects/upi-tableau/payment-methods.png",
        ],
        liveUrl:
          "https://public.tableau.com/views/dashboard-2_17566265495720/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        overview:
          "This Tableau project analyzes UPI transactions through interactive visualizations. It explores transaction distribution across age groups, city-wise transaction activity, payment methods, and merchant performance. Interactive filters allow users to examine different banks, currencies, devices, and transaction purposes.",
        features: [
          "UPI transaction analysis across age groups",
          "Geographical transaction analysis by city",
          "Payment method comparison: Phone Number, QR Code, and UPI ID",
          "Merchant-wise transaction comparison",
          "Interactive filters for bank and currency",
          "Device type and payment purpose filtering",
          "Four-page Tableau Story",
        ],
        challenges: [
          "Preparing transaction data for Tableau visualization",
          "Creating calculated fields for transaction analysis",
          "Building geographical visualizations",
          "Comparing transaction patterns across merchants and payment methods",
          "Designing interactive filters and dashboard layouts",
        ],
      },
      {
        number: "06",
        slug: "superstore-sales-analysis",
        title: "Superstore Sales Analysis",
        subtitle: "Enterprise Tableau Dashboard",
        description:
          "A multi-page Tableau analytics project exploring $2.3M in sales across 5,000+ orders, with insights into profitability, regional performance, product categories, and returns.",
        technologies: [
          "Tableau",
          "Relational Joins",
          "Calculated Fields",
          "Data Visualization",
          "Business Intelligence",
        ],
        highlight: "$2.3M Sales | 5,000+ Orders",
        overview:
          "Superstore Sales Analysis is a business intelligence project built using Tableau to evaluate retail sales performance, profitability, regional distribution, and product returns. It uses interactive dashboards and calculated fields to help explore business performance and identify sales trends.",
        image: "/projects/superstore/dashboard-overview.png",
        gallery: [
          "/projects/superstore/dashboard-overview.png",
          "/projects/superstore/regional-profit.png",
          "/projects/superstore/regional-sales.png",
          "/projects/superstore/monthly-orders.png",
          "/projects/superstore/profit-vs-sales.png",
        ],
        liveUrl:
          "https://public.tableau.com/views/Superstore-Sales-Analysis-Tableau-Dashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        features: [
          "Analysis of $2.3M in sales",
          "Analysis of 5,000+ orders",
          "Sales and profitability analysis",
          "Regional sales performance comparison",
          "Product category and sub-category analysis",
          "Product return analysis",
          "Relational data joins",
          "Calculated fields and interactive visualizations",
        ],
        challenges: [
          "Combining related datasets using relational joins",
          "Creating calculated fields for business analysis",
          "Analyzing sales and profitability across regions",
          "Identifying product categories affecting business performance",
          "Analyzing product return patterns",
          "Designing multi-page interactive Tableau dashboards",
        ],
        metrics: [
          { label: "Total Sales", value: "$2.3M" },
          { label: "Total Orders", value: "5,000+" },
        ],
      },
      {
        number: "07",
        slug: "upi-transaction-analysis-powerbi",
        title: "UPI Transaction Analysis",
        subtitle: "Power BI FinTech Dashboard",
        description:
          "An interactive Power BI dashboard analyzing 2.1K UPI transactions worth ₹1.2 Cr, providing insights into transaction trends, payment behavior, and financial performance.",
        technologies: ["Power BI", "Power Query", "DAX"],
        image: "/projects/upi-powerbi/dashboard.png",
        gallery: [
          "/projects/upi-powerbi/dashboard.png",
          "/projects/upi-powerbi/transaction-details.png",
        ],
        highlight: "2.1K Transactions | ₹1.2 Cr",
        liveUrl:
          "https://app.powerbi.com/links/0sksSM3dpM?ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&pbi_source=linkShare",
        overview:
          "UPI Transaction Analysis is a business intelligence project built using Power BI to explore digital payment transaction data. The dashboard transforms transaction records into interactive visual reports, helping users understand payment patterns, transaction trends, and financial activity.",
        features: [
          "Analysis of 2.1K UPI transactions",
          "Exploration of transaction value and payment trends",
          "Interactive dashboard visualizations",
          "Data transformation using Power Query",
          "Calculated measures and KPIs using DAX",
          "Visual analysis of transaction patterns",
        ],
        challenges: [
          "Cleaning and preparing transaction data using Power Query",
          "Creating meaningful DAX measures for analysis",
          "Designing clear and interactive dashboard visualizations",
          "Extracting useful insights from transaction records",
        ],
      },
      {
        number: "08",
        slug: "insurance-charges-analysis",
        title: "Insurance Charges Analysis",
        subtitle: "Healthcare Cost Analytics",
        description:
          "A Power BI analytics dashboard exploring $8.8M in insurance premiums and examining how factors such as age, BMI and smoking status influence healthcare costs.",
        technologies: ["Power BI", "Power Query", "DAX"],
        highlight: "5.98M Premium Amount",
        image: "/projects/insurance-analysis/dashboard.png",
        gallery: [
          "/projects/insurance-analysis/dashboard.png",
          "/projects/insurance-analysis/data-preview.png",
          "/projects/insurance-analysis/wordcloud.png",
        ],
        liveUrl:
          "https://app.powerbi.com/Redirect?action=OpenApp&appId=d68a8827-ec1d-466b-a1f3-11f678bbc31a&ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&experience=power-bi",
        overview:
          "Insurance Charges Analysis is a business intelligence project focused on understanding medical insurance costs and identifying the factors associated with variations in insurance premiums. The dashboard uses interactive Power BI visualizations to explore healthcare cost patterns.",
        features: [
          "Analysis of total insurance charges and premiums",
          "Age-based insurance cost analysis",
          "BMI-based cost segmentation",
          "Comparison of smokers and non-smokers",
          "Interactive Power BI visualizations",
          "Data transformation using Power Query",
          "DAX-based calculations and measures",
        ],
        challenges: [
          "Preparing and transforming insurance data using Power Query",
          "Identifying relationships between demographic factors and insurance charges",
          "Creating meaningful DAX measures",
          "Designing clear visualizations for healthcare cost analysis",
        ],
        metrics: [
          { label: "Premium Amount", value: "5.98M" },
          { label: "Coverage Amount", value: "600.55M" },
          { label: "Claim Amount", value: "16.91M" },
          { label: "Active Policies", value: "5.82K" },
          { label: "Inactive Policies", value: "4.19K" },
        ],
      },
      {
        number: "09",
        slug: "ecommerce-sales-analysis",
        title: "E-commerce Sales Analysis",
        subtitle: "Enterprise Sales Intelligence",
        description:
          "An enterprise-level Power BI solution analyzing $122M in e-commerce sales through interactive dashboards, dynamic date comparisons and advanced DAX calculations.",
        technologies: ["Power BI", "DAX", "Power Query"],
        highlight: "$122M Sales Analyzed",
        image: "/projects/ecommerce/sales-overview.png",
        gallery: [
          "/projects/ecommerce/sales-overview.png",
          "/projects/ecommerce/sales-data.png",
          "/projects/ecommerce/product-performance.png",
          "/projects/ecommerce/date-comparison.png",
          "/projects/ecommerce/sales-comparison.png",
          "/projects/ecommerce/filtered-sales.png",
        ],
        liveUrl:
          "https://app.powerbi.com/Redirect?action=OpenReport&appId=e81aecda-c46c-48d4-927e-a09b3bdfc65b&reportObjectId=c7e3d424-f22e-4a7c-9c4c-fa9555fe1ef4&ctid=3ad87f0e-1f93-41bd-94f4-82c37d971c88&reportPage=79fa2a2a2000ddbc59eb&pbi_source=appShareLink",
        overview:
          "E-commerce Sales Analysis is a Power BI business intelligence project designed to explore sales performance, profitability, product trends, and geographical distribution. It uses advanced DAX measures and interactive date filters to compare business performance across different periods.",
        features: [
          "Sales and profit KPI tracking",
          "Geographical sales analysis by city",
          "Top-performing and lowest-performing product analysis",
          "Promotion category and discount analysis",
          "Profit versus net sales comparison",
          "Time-series analysis of sales performance",
          "Dynamic date-range comparison",
          "Interactive Power BI filters and slicers",
        ],
        challenges: [
          "Building dynamic date comparison measures using DAX",
          "Creating interactive date-range filters",
          "Analyzing product performance across sales and quantity",
          "Designing clear visualizations for geographical sales distribution",
          "Combining multiple business KPIs into an interactive dashboard",
        ],
        metrics: [
          { label: "Total Sales", value: "$122M" },
          { label: "Total Profit", value: "$12.2M" },
          { label: "Total Orders", value: "3,510" },
          { label: "Quantity Sold", value: "7.1K" },
        ],
      },
    ],
  },
  {
    id: "database",
    title: "Database Engineering & SQL",
    description:
      "Relational data modeling, SQL queries and analytical data pipelines.",
    projects: [
      {
        number: "01",
        slug: "instagram-sql-clone",
        title: "Instagram SQL Clone",
        subtitle: "Relational Database & Analytics",
        description:
          "A relational database project inspired by Instagram, featuring normalized database design, interconnected entities, and analytical SQL queries.",
        technologies: [
          "MySQL",
          "PostgreSQL",
          "SQL",
        ],
        image: "/projects/instagram-sql/Database schema.png",
        gallery: [
          "/projects/instagram-sql/Database schema.png",
          "/projects/instagram-sql/ER diagram.png",
          "/projects/instagram-sql/SQL_query_results_1.png",
          "/projects/instagram-sql/SQL_query_results_2.png",
          "/projects/instagram-sql/SQL_query_results_3.png",
          "/projects/instagram-sql/SQL_query_results_4.png",
          "/projects/instagram-sql/SQL_query_results_5.png",
          "/projects/instagram-sql/SQL_query_results_6.png",
          "/projects/instagram-sql/SQL_query_results_7.png",
        ],
        overview:
          "Instagram SQL Clone is a database engineering project that models the core functionality of a social media platform. It uses a relational database structure to manage users, posts, comments, likes, follows, and tags while supporting analytical queries to extract meaningful insights.",
        features: [
          "Relational database schema design",
          "Normalized database structure",
          "User and profile management",
          "Photo and post management",
          "Comments and likes functionality",
          "Follow and follower relationships",
          "Tag management",
          "Analytical SQL queries",
          "Data retrieval using joins and aggregations",
        ],
        challenges: [
          "Designing a normalized relational database schema",
          "Establishing relationships between multiple entities",
          "Maintaining referential integrity using foreign keys",
          "Writing complex SQL queries across related tables",
          "Extracting meaningful insights using SQL aggregations",
        ],
        metrics: [
          { label: "Database Tables", value: "7" },
          { label: "Users", value: "100" },
          { label: "Photos", value: "257" },
          { label: "Likes", value: "8,782" },
          { label: "Comments", value: "7,401" },
          { label: "Follows", value: "7,623" },
        ],
      },
      {
        number: "02",
        slug: "sql-powered-sales-analysis",
        title: "SQL-Powered Sales Analysis",
        subtitle: "Retail Data Pipeline & Business Insights",
        description:
          "A Python-powered retail data pipeline that generates transaction records, stores them in SQLite, and performs analytical SQL queries to uncover sales insights.",
        technologies: [
          "Python",
          "SQLite",
          "Pandas",
          "SQL",
          "Matplotlib",
          "Seaborn",
        ],
        image: "/projects/sql-sales/product-performance.png",
        gallery: [
          "/projects/sql-sales/product-performance.png",
          "/projects/sql-sales/dataset-preview.png",
          "/projects/sql-sales/database-ingestion.png",
          "/projects/sql-sales/monthly-sales-trend.png",
          "/projects/sql-sales/regional-analysis.png",
        ],
        overview:
          "SQL-Powered Sales Analysis is a data analytics project focused on processing and analyzing retail transaction data. Python is used to generate and process records, SQLite handles structured data storage, and SQL queries extract meaningful business insights.",
        features: [
          "Retail transaction data generation",
          "Data processing using Pandas",
          "SQLite database creation and management",
          "Analytical SQL queries",
          "Sales trend analysis",
          "Data aggregation and grouping",
          "Visual representation of analytical findings",
        ],
        challenges: [
          "Generating structured retail transaction data",
          "Designing and managing the SQLite database",
          "Loading and processing transaction records",
          "Writing SQL queries for business analysis",
          "Extracting meaningful insights from sales data",
          "Visualizing analytical results",
        ],
      },
    ],
  },
];