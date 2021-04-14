
<!-- PROJECT LOGO -->

  

<br  />

  

<p  align="center">

  

<h3  align="center">Funda Assignment App</h3>

  

<p  align="center">


<!-- TABLE OF CONTENTS -->

  

<details  open="open">

<summary>Table of Contents</summary><ol>

  

<a  href="#about-the-project">About The Project</a>

<ul>

  

<li><a  href="#built-with">Built With</a></li>

</ul>

  

<a  href="#getting-started">Getting Started</a>

<ul>

  

<li><a  href="#prerequisites">Prerequisites</a></li>

<li><a  href="#installation">Installation</a></li>

</ul>

</li>

<li><a  href="#usage">Usage</a></li>

<li><a  href="#contact">Contact</a></li>

<li><a  href="#acknowledgements">Acknowledgements</a></li>

</ol>

</details>

  

  

<!-- ABOUT THE PROJECT -->

  

## About The Project

  

  

[[See app screenshot]](https://github.com/Abhiybrant/funda-test-assignment/blob/master/src/assets/images/app-screenshot.png)

  

This is a small demo application built using funda APIs. A user can view the properties/objects list and see the details of any particular property/object. Additionally few filtering options are also provided.

  

### Built With

  

  

This application is built using vue.js framewrok with custom components and styling (only with css). No UI framework or library (like bootstrap, vuetify) used.

  

*  [vue.js](https://vuejs.org/)

  

  

<!-- GETTING STARTED -->

  

## Setup and running app

  

  

Application setup is really simple and described below.

  

  

### Prerequisites

  

  

We only need to have npm installed to run this application.


* npm

  

```sh

npm install npm@latest -g

```

  

  

### Installation

  

  

1. I used two proxy for development [https://github.com/Freeboard/thingproxy](https://example.com)

[https://cors-anywhere.herokuapp.com/corsdemo](https://example.com)

API key and proxies are added in `config.js`. In case proxy doesn't work. Please switch the proxy to old proxy in the same file.

  

```JS

proxy_old = 'https://cors-anywhere.herokuapp.com/';

proxy = 'https://thingproxy.freeboard.io/fetch/';

```

  

2. Clone the repo or download zip file

  

```sh

git clone https://github.com/Abhiybrant/funda-test-assignment.git

```

  

3. Install NPM packages

  

```sh

npm install

```

  

4. Run below command to start the application.

  

```JS

npm  run  serve

```

Application will start on http://localhost:8080/ or please go to http://localhost:8080/funda

5. To create production build, run

  

```JS
npm  run  build
```

  

  

<!-- USAGE EXAMPLES -->

  

## Usage

  

On start, application loads 15 objects and shows a list, Upon successful list display it fetches the details of the first property and shows details on the first object in details section. Please note the following points while testing the app.

  

1. It shows limited details from the object details I selected few(14) attributes for the demonstration purpose.

2. I have provided 3 filtering options. Huur, Koop and by city name.

3. For filtering objects by city, we need to enter the city name and say 'find in my city'

4. User interface is responsive, application has a decent look and feel on different devices.

5. Please note the there is no pagination so property list (with 15 objects) is slightly longer (I would keep it as future improvement).

6. I was running out of time for adding tests. (I would use Jasmine for tests, would love to discuss/answer test approach and questions related to testing)

7. Please note that, when we type a city name and search, there is a posibility of making a type, then we get no results. To avoid that I would use a geo location input field, instead of regular input (in real time application).

  
  

<!-- CONTACT -->

  

## Contact

  

  

Your Name - Abhishek Jain- abhi.1986.jain@gmail.com

Linkedin: [Linkedin Proflle](https://www.linkedin.com/in/abhishek-jain-430abb85/)

Project Link: [https://github.com/Abhiybrant/funda-assignment](https://github.com/your_username/repo_name)

  
  

<!-- ACKNOWLEDGEMENTS -->

  

## Acknowledgements

  
  

*  [XML to JSON](https://goessner.net/download/prj/jsonxml/)

  

*  [Google Fonts](https://fonts.google.com/)

*  [Vue](https://vuejs.org)

