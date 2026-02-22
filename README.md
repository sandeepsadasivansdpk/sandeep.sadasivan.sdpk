<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Praveenterax/reactjs-portfolio">
    <img src="images/letter-P-circle.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio Website - React JS</h3>

  <p align="center">
    A well designed portfolio to showcase your skills and achievements. A beautiful and functional portfolio with smooth animations. Built using React JS, Framer-motion, with local data management.
    <br />
    <a href="https://praveenterax-portfolio.netlify.app" target="_blank" rel="noreferrer"><strong>Portfolio Website</strong></a>
    <br />
    <a href="https://github.com/Praveenterax/reactjs-portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://praveenterax-portfolio.netlify.app" target="_blank" rel="noreferrer">View Demo</a>
    ·
    <a href="https://github.com/Praveenterax/reactjs-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Praveenterax/reactjs-portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Page][product-screenshot-1]](https://praveenterax-portfolio.netlify.app)
[![Skills Page][product-screenshot-2]](https://praveenterax-portfolio.netlify.app/#skills)
[![Contact Page][product-screenshot-3]](https://praveenterax-portfolio.netlify.app/#contact)

Website is completely built using React JS with a local data management system. No need to be proficient to understand or change the content, basic understanding is enough to fill the gaps.

It is completely responsive, works fine on most devices, and is highly interactive. Data is stored in local JSON files and can be easily modified anytime even after deployment. Simply edit the JSON files in the `src/data/` folder to update your portfolio.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [SCSS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)
- [Netlify](https://www.netlify.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This portfolio uses local JSON data files for easy setup and deployment with no external backend required.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Praveenterax/reactjs-portfolio.git
   ```

2. Navigate to the frontend directory and install dependencies
   ```sh
   cd frontend_react
   npm install
   ```

3. Add your image assets to the `public/assets/` folder
   - The app references images from `/assets/` paths
   - Update the image paths in `src/data/*.json` files to match your assets

4. Update your portfolio data
   - Edit files in `src/data/` folder:
     - `skills.json` - Add your technical skills
     - `works.json` - Add your portfolio projects
     - `abouts.json` - Add your expertise areas
     - `aboutMe.json` - Add your profile information
     - `testimonials.json` - Add client testimonials
     - `brands.json` - Add brand logos
     - `experiences.json` - Add your work experience

5. Run the development server
   ```sh
   npm run dev
   ```

6. Build for production
   ```sh
   npm run build
   ```

8. Your website is up and running! Make the necessary changes and deploy it.

9. To update your portfolio data, simply edit the JSON files in `frontend_react/src/data/`:
   - Update `aboutMe.json` for your profile information
   - Update `skills.json` to add/remove skills
   - Update `works.json` to showcase your projects
   - Update `testimonials.json` and `brands.json` for testimonials and client logos
   - Update `experiences.json` for your work experience history

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Praveen Dunga - [@Praveenterax](https://instagram.com/Praveenterax) - praveendunga789@gmail.com

Project Link: [https://praveenterax-portfolio.netlify.app](https://praveenterax-portfolio.netlify.app)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Praveenterax/reactjs-portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/Praveenterax/reactjs-portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Praveenterax/reactjs-portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/Praveenterax/reactjs-portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/Praveenterax/reactjs-portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/Praveenterax/reactjs-portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/Praveenterax/reactjs-portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/Praveenterax/reactjs-portfolio/issues
[license-shield]: https://img.shields.io/github/license/Praveenterax/reactjs-portfolio.svg?style=for-the-badge
[license-url]: https://github.com/Praveenterax/reactjs-portfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/praveendunga
[product-screenshot-1]: images/home-page.png
[product-screenshot-2]: images/contact-page.png
[product-screenshot-3]: images/skills-page.png
