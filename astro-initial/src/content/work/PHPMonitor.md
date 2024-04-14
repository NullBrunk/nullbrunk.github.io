---
title: PHPMonitor
publishDate: 2023-09-01 21:53:00
img: /assets/works/phpmonitor.png
img_alt: An image of the PHP Monitoring website
description:  PHP monitoring with real-time display of system metrics 
tags:
  - Monitoring
  - Tailwind
  - Chart.js
  - PHP
---

<div align="center">
  <br/>    
  
  ![GitHub top language](https://img.shields.io/github/languages/top/NullBrunk/PHPMonitor?style=for-the-badge)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/NullBrunk/PHPMonitor?style=for-the-badge)
  ![repo size](https://img.shields.io/github/repo-size/NullBrunk/PHPMonitor?style=for-the-badge)

</div>

To gain more experience in object-oriented development in PHP, as well as in API development and in the usage of AJAX requests, I redesigned one of my previous projects :  a **monitoring website** that displays information in real-time.
<br>The `api.php` file serves as a link between HTTP requests and calls to various methods within the <a href="https://github.com/NullBrunk/PHPMonitor/tree/main/App/Class" target="_blank">Classes I have developed</a>.
<br><br>
The front-end part, on the other hand, is entirely handled by **JavaScript** with AJAX requests and ChartJS for the graphs, and by **Tailwind** for the CSS part.

#### 🗺️ Overview  
<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/1ea23d5f-1619-4a48-8f1c-fa6064ace70e"></video>





#### 💻 System
The system page displays a variety of information related to the machine hosting the monitoring website.
![image](https://github.com/NullBrunk/PHPMonitor/assets/125673909/182d47c1-8a0f-4e09-aa9b-c8311605f042)


#### 🔳 CPU

The CPU page displays various informations related to the CPU, including real-time updates of the frequency for each thread. You can stop this updating by clicking on the stop button, as demonstrated in this video.

<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/e68a3c16-911c-4cb4-b09e-c62ed6f2a3ad"></video>

#### 💾 RAM

The RAM page displays various informations related to the volatile memory (RAM) and to the SWAP, with real-time graph and metrics as shown in this video.
<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/332354e2-87ef-494e-968e-6553bba30def"></video>


#### ⚙️ TOP 

The TOP page displays various real-time informations related to the processes. You can sort theses processes by RAM/CPU consumption with the right select menu as demonstrated in the video.
<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/86e69d90-7355-4d02-954b-b1cac25f9c6f"></video>



#### ✨ Responsive
All pages of this project are responsive, meaning they adapt to the screen size accordingly.
<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/fca04462-4505-4e8d-9eb4-8265a1561033"></video>


#### 🤝 Thanks

- https://github.com/dylanaraps/neofetch for the ascii logos on <a href="https://github.com/NullBrunk/PHPMonitor/blob/main/specs.php">the specs</a> page.


#### 📂 Source

The source code and installation instructions are accessible <a href="https://github.com/NullBrunk/PHPMonitor" target="_blank">here</a>

You'll also find a Dockerfile there if you want to test the application locally.

