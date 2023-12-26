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


#### 🗺️ General overview

<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/b2e38b22-786f-4272-970f-25ef20b8e78c"></video controls>

#### 💻 Specs
The specs page displays a variety of information related to the machine hosting the monitoring website.

![image](https://github.com/NullBrunk/PHPMonitor/assets/125673909/bc6eb743-6a87-4956-970e-a7ed0034f5e0)


#### 🔳 CPU

The CPU pages displays a variety of informations linked with the CPU, as well as the frequency of every thread actualized in realtime. You can stop this actualization by clicking on the stop button like shown in this video controls.

<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/7e5a01b2-fd67-4a9a-847b-89287921b6cb"></video controls>



#### ✨ Responsive
All pages of this project are responsive, meaning they adapt to the screen size accordingly.

<video controls width="100%" src="https://github.com/NullBrunk/PHPMonitor/assets/125673909/6f9abaaa-a5c2-4f90-a2f6-ab6b9ba9eac4"></video controls>


#### ⚙️ Doc
Class files are in /App/Class

##### CPU
| Method         | Description                          | 
|---             |:--                                   | 
| get_usage      | Get CPU usage in %                   |
| get_model      | Get the CPU model                    |
| get_cores      | Get the number of cores              |
| get_threads    | Get the number of threads            |
| get_name       | Get the vendor name                  |
| get_freq       | Get the frequency of every thread    |


##### RAM
| Method            | Description                     | 
|---                |:--                              | 
| get_total         | Get total amont of RAM in Gb    |
| get_usage         | Get RAM used in Gb              |
| get_usage_percent | Get RAM used in %               |


##### Disk
| Method         | Description                           | 
|---             |:--                                    | 
| get_total      | Get total amount of disk space in Gb  |
| get_usage      | Get disk used in Gb                   |


##### Other
| Method               | Description                          | 
|---                   |:--                                   | 
| get_distrib          | Get the linux distribution name      |
| get_linux_version    | Get the linux kernel version         |
| get_uptime           | Get the machine uptme                |



#### 🤝 Thanks

- https://github.com/dylanaraps/neofetch for the ascii logos on <a href="https://github.com/NullBrunk/PHPMonitor/blob/main/specs.php">the specs</a> page.


#### 📂 Source code
Source code is being accessible here <a href="https://github.com/NullBrunk/PHPMonitor">PHPMonitor</a>