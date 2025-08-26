export const projects = [
    {
      id: 'project-1',
      title: 'Personal Portfolio',
      description: 
        'This is the site you are viewing right now. I built this web application using React, Vite, Tailwind CSS and some \
        components from the DaisyUI. The purpose of this project was not only to put my web design and React skills to practice, but also to showcase who I am and what I have worked on.',
      stack: ['React', 'Vite', 'Tailwind', 'daisyUI'],
      images: 
      [
        {src: '/Projects/PortfolioHome.png', caption: 'This is the Home page. It displays contact information, as well as a short introduction.'},
        {src: '/Projects/PortfolioProjects.png', caption: 'This is the Projects page (the page you are currently on) where you can see information about my projects.'},
        {src: '/Projects/PortfolioAboutMe.png', caption: 'This is the About Me page, which provides more insight into who I am.'}
      ],
      code: 'https://github.com/voxtrel'
    },
    {
      id: 'project-2',
      title: 'JCY Pharmacy Manager',
      description: 
        'This is a pharmacy management web app built as part of a final project for a Database Design course. I collaborated with\
         a team to create a user-friendly platform that would implement the core operations of a regular pharmacy, including patient records, inventory, and the different processing stages of prescription orders. \
         This was a great hands-on full-stack experience where I strengthened my ability to work in a team.',
      stack: ['C#', 'JavaScript', 'HTML', 'CSS', 'ASP.NET', 'PostgreSQL', 'Visual Studio'],
      images:
      [
        {src: '/Projects/JCYHome.png', caption: 'This is the Home page of the website. Here you can learn about the goal and key focus of the project.'},
        {src: '/Projects/JCYLogin.png', caption: 'This is the Login page, where staff must enter their account information to be able to access the Dashboard. \nNote: For security reasons, user passwords are not stored in plain text, and are instead hashed.'},
        {src: '/Projects/JCYDashboard.png', caption: 'This is the Dashboard page that only logged-in users are able to access. From this page, staff members are able to access all the core features, including handling customer information, managing inventory, and continuing the process of prescription orders at the 4 different stages.'},
        {src: '/Projects/JCYCustomers.png', caption: 'Here is a closer look at the Customer information table. On this page, you are given options for viewing, creating, editing, and deleting customer information, as well as managing their medication allergies. You may also use filtering tools to sort the data based on customer first name, last name, or date of birth. \nNote: The data displayed is fictitious and for demonstration purposes only.'},
        {src: '/Projects/JCYPrescriptions.png', caption: 'This is the main page for prescriptions, where you can see all prescriptions from any stage and have the option to continue with their process, edit, or delete them if needed.\nNote: The data displayed is fictitious and for demonstration purposes only.'},


      ],
      code: 'https://github.com/voxtrel'

    },
    {
      id: 'project-3',
      title: 'SmartEnroll Course Planning Tool',
      description:
        'SmartEnroll is a Ruby on Rails course registration and scheduling planner web application built as part of the final project for a Software Engineering course. I worked on this project with a team to create a platform\
         that enables students to effectively plan their semester by selecting the courses they plan to take, which are then displayed in a page with statuses that indicate scheduling conflicts, class availability, and expected demand.', 
      stack: ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'MySQL'],
      images:
      [
        {src: '/Projects/SmartEnrollHome.png', caption: 'This is the Home page of SmartEnroll. Here, students that are logged in are able to access the schedule planning page, view their profile, or take a look at their notifications. The top left counter displays the time left before registration opens for the upcoming semester.'},
        {src: '/Projects/SmartEnrollSchedule.png', caption: 'This is the Course Schedule page. On this page, students can view details about their current plan, but also have the option to view past schedules, as well as plan ahead. All cards have a colored border indicating status information about that course. The legend on the top left explains the meaning of each color. Another important feature is the Class Demand information, which indicates how many students are planning to take the same course before registration opens.'},
        {src: '/Projects/SmartEnrollCourses.png', caption: 'This is the Courses page, where students are able to find the courses they would like to add to their plan. This page includes search and filtering options to make it easier to find courses. In addition to displaying all the course information, there is a row that allows you to add the course, or warn you if you have already added or taken the course.'},
        {src: '/Projects/SmartEnrollNotifications.png', caption: 'This is the Notifications page where students will be able to see notifications for courses that have been changed for their major.'},
      ],
      code: 'https://github.com/voxtrel/SmartEnroll-Course-Planning-Tool'
    },

    {
      id: 'project-4',
      title: 'Candlestick Analyzer',
      description:
        'This Candlestick Analyzer is a Windows Forms application developed with Visual Studio 2022 using C#. It enables users to analyze stock data from CSV files by creating candlestick and volume bar charts. The application provides features\
         to view data within a specific range, identify different candlestick patterns, as well as the ability to perform Fibonacci retracement analysis on a selected area.',
      stack: ['C#', 'Windows Forms', 'Visual Studio'],
      images:
      [
        {src: '/Projects/CandlestickChart.png', caption: 'From the left menu, the "Pick a File" button brings up a file dialog where the user can select which stock data file they want to analyze, which is immediately displayed on a Candlestick and Volume charts. There are also date-time pickers on the top left which allow you to select the range of data to view.'},
        {src: '/Projects/CandlestickFibonacci.png', caption: 'By clicking and dragging on the Candlestick chart, the user is able to select and adjust an area to be used for Fibonacci retracement analysis. The "Start" button on the left side, initiates a simulation that displays how the Fibonacci levels change with a shrinking or growing area.'},
        {src: '/Projects/CandlestickPeakValleys.png', caption: 'By allowing annotations or moving the margin scrollbar, a user is able to recognize the data points that represent peaks (red arrows) and valleys (green arrows).'},
        {src: '/Projects/CandlestickWaves.png', caption: 'This application can recognize up and down waves, which the user can select from the two dropdown menus on the left side. By selecting a wave from one of the dropdowns, the corresponding area is highlighted on the Candlestick chart. \n Note: For reference, an up wave is an upward trend that is uninterrupted by any peaks or valleys in between. Similarly, a down wave is an uninterrupted downward trend.'}
      ],
      code: 'https://github.com/voxtrel/Candlestick-Analyzer'
    },

    {
      id: 'project-5',
      title: 'Rush Unix Shell',
      description:
        'This is a Unix Shell called Rush written in C. It implements built-in functions such as exit, cd, path, and runs external programs using fork()/execv(). Features include output redirection and running multiple commands in parallel.',
      stack: ['C', 'Parallelism', 'Shell', 'Linux', 'Concurrency'],
      images:
      [
        {src: '/Projects/CProg.png', caption: '  '},
        {src: '/Projects/RushTerminal.png', caption: 'This is an example run of the program in a Linux terminal.'}
      ],
      code: 'https://github.com/voxtrel/Unix-Shell'
    },

    {
      id: 'project-6',
      title: "Dijkstra's Algorithm",
      description:
        "This program is an implementation of an undirected weighted Graph ADT using Adjacency List. The main feature is to find the shortest path between two vertices using Dijkstra's Algorithm.",
      stack: ['C', 'Graph Data Structure', 'Adjacency List'],
      images:
      [
        {src: '/Projects/CPlusPlusProg.png', caption: '  '},
        {src: '/Projects/ShortestPathTerminal.png', caption: 'This is an example run of the program in a Linux terminal.'}
      ],
      code: 'https://github.com/voxtrel/Unix-Shell'
    }


  ];