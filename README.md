Welcome to my portfolio website. This site is designed to showcase my professional skills, credentials, and projects beyond what traditional platforms like LinkedIn offer.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)
- [License](#license)

## Overview
This project was created as a portfolio website to highlight my skills, credentials, and ongoing projects. It provides an interactive environment where I can display my work experience, technical skills, certifications, and detailed information about the projects I've worked on.

## Features
- **Homepage**: An overview of the entire site with sections for credentials, projects, work experience, and skills.
- **Credentials Page**: Lists educational degrees and certifications.
- **Projects Page**: Directory of all my projects.
- **Project Details**: Individual pages for each project to showcase what technologies were used, the purpose of the project, and my personal take on the development process.

## Technologies Used
- **Preact**: A fast 3kB alternative to React. Chosen for its small size and performance.
- **Preact Router**: For managing client-side routing between pages.
- **GitHub Actions**: Automates CI/CD processes, running tests, and deploying the site on each push.
- **GitHub Pages**: Hosting service used for the static website.
- **Vite**: Fast development server with hot module replacement (HMR) for quick iterations during development.
- **JSX**: For defining UI components.
- **CSS Modules & Global Styles**: Scoped styling within components to avoid conflicts and enhance maintainability.

## How to Run Locally
### Prerequisites
Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/rdYards/resume.git
   cd resume-portfolio
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

## Deployment
The website is automatically deployed using GitHub Actions whenever changes are pushed to the main branch. It's hosted on GitHub Pages, which requires a static site.

To manually deploy the site:
1. Run the build command:
   ```bash
   npm run build
   ```
2. This will generate static files in the `dist` directory. You can then upload these files to any web server or hosting service that supports static websites.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.