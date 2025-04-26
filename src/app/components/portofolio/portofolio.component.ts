import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-portofolio',
  imports: [CommonModule, SideNavComponent],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.scss'
})
export class PortofolioComponent {
  selectedProject: any = null;
isClosing = false;
shouldDisplayModal = false;
ngOnInit() {
  // Add/remove class from body on modal toggle
  this.watchModalState();
}
  projects = [
    {
      name: 'Lumen Lense',
      description: 'Secure, scalable backend for a blog platform.',
      fullDescription: `LumenLens is a powerful backend solution tailored for a blog application, offering secure authentication, CRUD operations, and additional features to enhance the user experience. Built using Lumen, a lightweight PHP framework, it provides efficient endpoints for seamless communication between the frontend and server.<br><br>

<strong>Responsibilities:</strong><br>
- Designed and implemented RESTful APIs.<br>
- Built secure authentication and role-based access control.<br>
- Developed and optimized MySQL database schema.<br>
- Used PHPUnit for unit testing and Postman for API testing.<br>
- Created models and relationships for posts and comments.<br>
- Integrated soft deletes and route guards.<br>
- Supported live-reloading development with Nodemon.<br><br>

<strong>Roles & Access:</strong><br>
- <strong>User:</strong> View posts, comment, manage profile.<br>
- <strong>Admin:</strong> Full post and comment control.<br>
- <strong>Super Admin:</strong> Role management and system-level privileges.<br><br>

<strong>Technologies Used:</strong><br>
Lumen (PHP Micro-framework), MySQL, Postman, PHPUnit, Nodemon, Git`
,
    
      image: 'assets/lumenlense.png',
      github: 'https://github.com/nayefserag/LumenLens', // Replace with actual repo link
      tags: [
        { label: 'PHP', icon: 'fa-brands fa-php' },
        { label: 'Lumen', icon: 'fa-solid fa-fire-flame-curved' },
        { label: 'MySQL', icon: 'fa-solid fa-database' },
        { label: 'Postman', icon: 'fa-solid fa-vial' },
        { label: 'Git', icon: 'fa-brands fa-git-alt' },
        { label: 'PHPUnit', icon: 'fa-solid fa-check-double' }
      ],
      bgColor: '#1f1b2e'
    }
    ,
    {
      name: 'TaskTresk',
      description: 'Smart task management backend with NestJS and Google Calendar integration.',
      fullDescription: `TaskTrek is a powerful server-side backend built with NestJS, a progressive Node.js framework. It leverages JWT authentication, Express, and Mongoose to provide a robust foundation for handling CRUD operations.<br><br>
    
    <strong>Key Features:</strong><br>
    - <strong>NestJS Framework:</strong> Modular and scalable structure with clean architecture.<br>
    - <strong>JWT Authentication:</strong> Secure APIs and protected routes.<br>
    - <strong>Express:</strong> Handles HTTP requests and RESTful APIs.<br>
    - <strong>Mongoose:</strong> MongoDB integration with elegant data modeling.<br>
    - <strong>Swagger Documentation:</strong> Interactive API docs for developers.<br>
    - <strong>Google Calendar Integration:</strong> Synchronize tasks with Google Calendar for streamlined scheduling.<br><br>
    
    <strong>Technologies Used:</strong><br>
    NestJS, Node.js, Express, MongoDB, Mongoose, Swagger, JWT, Google Calendar API`,
      
      image: 'assets/tasktresk.png',
      github: 'https://github.com/your-username/tasktresk', // Update with actual GitHub link
      tags: [
        { label: 'NestJS', icon: 'fa-brands fa-npm' },
        { label: 'Node.js', icon: 'fa-brands fa-node' },
        { label: 'MongoDB', icon: 'fa-solid fa-database' },
        { label: 'JWT', icon: 'fa-solid fa-key' },
        { label: 'Swagger', icon: 'fa-solid fa-book-open' },
        { label: 'Google API', icon: 'fa-brands fa-google' }
      ],
      bgColor: '#ffe9d6'
    }
    ,
    {
      name: 'Nest Wave',
      description: 'Social media mobile backend with interest-based spaces and real-time features.',
      fullDescription: `Nest Wave is a vibrant social media mobile application that facilitates user connections, content sharing, and meaningful interactions within dedicated interest-based spaces. It functions similarly to Facebook, with a strong focus on building communities around shared interests.<br><br>
    
    <strong>Responsibilities:</strong><br>
    - Designed and implemented RESTful APIs for frontend-backend interaction.<br>
    - Built scalable backend with Node.js and Express.js.<br>
    - Integrated secure user authentication and authorization systems.<br>
    - Structured MongoDB database to manage content and user data.<br>
    - Connected Firebase Cloud Messaging for real-time push notifications.<br>
    - Closely collaborated with mobile developers for smooth cross-platform compatibility.<br>
    - Ensured high code quality via unit and integration testing using Jest.<br><br>
    
    <strong>Technologies Used:</strong><br>
    Node.js, Express.js, MongoDB, Firebase Cloud Messaging, Jest, Git, Docker`,
    
      image: 'assets/nestwave.png',
      github: 'https://github.com/your-username/nest-wave', // Replace with actual GitHub URL
      tags: [
        { label: 'Node.js', icon: 'fa-brands fa-node' },
        { label: 'Express', icon: 'fa-solid fa-code' },
        { label: 'MongoDB', icon: 'fa-solid fa-database' },
        { label: 'Firebase', icon: 'fa-solid fa-fire' },
        { label: 'Docker', icon: 'fa-brands fa-docker' },
        { label: 'Jest', icon: 'fa-solid fa-vial' }
      ],
      bgColor: '#eaf6fb'
    }
    ,
    {
      name: 'Circle Sync',
      description: 'A social media backend focused on community-driven interest spaces.',
      fullDescription: `Circle Sync is a vibrant social media mobile application that facilitates user connections, content sharing, and meaningful interactions within dedicated interest-based spaces. It operates similarly to Facebook, but with a focus on creating a space for users to connect around their interests.<br><br>
    
    <strong>Responsibilities:</strong><br>
    - Designed and implemented RESTful APIs for mobile-backend communication.<br>
    - Built a robust and scalable backend using Node.js and Express.js.<br>
    - Secured user data with authentication and authorization mechanisms.<br>
    - Managed application data with a structured MongoDB database.<br>
    - Integrated Firebase Cloud Messaging for real-time notifications.<br>
    - Collaborated with mobile developers for cross-platform integration.<br>
    - Wrote unit and integration tests using Jest for maintainable code quality.<br><br>
    
    <strong>Technologies Used:</strong><br>
    Node.js, Express.js, MongoDB, Firebase Cloud Messaging, Jest, Git, Docker`,
    
      image: 'assets/circlesync.png',
      github: 'https://github.com/your-username/circle-sync', // Update this if needed
      tags: [
        { label: 'Node.js', icon: 'fa-brands fa-node' },
        { label: 'Express', icon: 'fa-solid fa-code' },
        { label: 'MongoDB', icon: 'fa-solid fa-database' },
        { label: 'Firebase', icon: 'fa-solid fa-fire' },
        { label: 'Docker', icon: 'fa-brands fa-docker' },
        { label: 'Jest', icon: 'fa-solid fa-vial' }
      ],
      bgColor: '#0b0e18'
    }
    ,
    {
      name: 'Rockstar Hub',
      description: 'A sleek gaming platform powered by RAWG API and modern frontend tools.',
      fullDescription: `Rockstar Hub is a gaming website built using React, TypeScript, Chakra UI, and Vite. It provides a clean, modern interface to browse and learn about a variety of games using data from the RAWG API.<br><br>
    
    <strong>Description:</strong><br>
    Rockstar Hub aims to be a go-to resource for gamers to discover new titles and explore ratings, trailers, release dates, and more. It includes:<br>
    - Game browsing, search, and filtering using React and TypeScript.<br>
    - Fully responsive UI designed with Chakra UI.<br>
    - Ultra-fast experience with Vite bundler.<br>
    - Custom backend with Node.js + Express for tracking analytics.<br>
    - Integration with the RAWG API for real-time game data.<br>
    - Custom theming system and wishlist functionality (in progress).<br><br>
    
    <strong>Usage Highlights:</strong><br>
    - Browse games by platform, genre, and release year.<br>
    - View trailers, descriptions, and ratings.<br>
    - Search games and create collections.<br>
    - Discover editorial recommendations.<br><br>
    
    <strong>Technologies Used:</strong><br>
    React, TypeScript, Chakra UI, Vite, RAWG API, Node.js, Express`,
    
      image: 'assets/rockstarhub.png',
      github: 'https://github.com/nayefserag/Rockstar-hub',
      tags: [
        { label: 'React', icon: 'fa-brands fa-react' },
        { label: 'TypeScript', icon: 'fa-brands fa-js' },
        { label: 'Chakra UI', icon: 'fa-solid fa-layer-group' },
        { label: 'Vite', icon: 'fa-solid fa-bolt' },
        { label: 'Node.js', icon: 'fa-brands fa-node' },
        { label: 'RAWG API', icon: 'fa-solid fa-gamepad' }
      ],
      bgColor: '#f4f4fb'
    }
    ,
    {
      name: 'Zeta Zoom',
      description: 'Fast, animated UI library.',
      fullDescription: `Zeta Zoom is a lightweight UI animation library built with Sass and powered by GSAP. It includes ready-made animation utilities, scroll-triggered effects, and easy hooks for integrating smooth transitions into modern web apps. It's perfect for performance-focused projects requiring sleek UI interactions.`,
      image: 'assets/Bitmap.png',
      github: 'https://github.com/your-username/zeta-zoom',
      tags: [
        { label: 'Sass', icon: 'fa-brands fa-sass' },
        { label: 'GSAP', icon: 'fa-solid fa-wave-square' }
      ],
      bgColor: '#170030',
    }
  ];
  
  watchModalState() {
    const body = document.body;
    if (this.shouldDisplayModal) {
      body.classList.add('blur-background');
    } else {
      body.classList.remove('blur-background');
    }
  }

  openOverview(project: any) {
    this.selectedProject = project;
    this.shouldDisplayModal = true;
    this.isClosing = false;
  }
  

  closeOverview() {
    this.isClosing = true;
    
    // Wait for the animation to complete before hiding the modal
    setTimeout(() => {
      this.shouldDisplayModal = false;
      this.selectedProject = null;
    }, 400); // This should match your animation duration
  }
  

}
