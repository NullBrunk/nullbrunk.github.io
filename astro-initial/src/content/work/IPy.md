---
title: IPy
publishDate: 2023-09-01 02:53:00
img: /assets/works/ipy.png
img_alt: An image of the IPy tool
description:  A python GNU/Linux networking configuration tool  
tags:
  - Scripting
  - Python
  - Configuration
  - IP
---

<div align="center">  
    <br/>  

![GitHub top language](https://img.shields.io/github/languages/top/NullBrunk/FTPy?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/NullBrunk/FTPy?style=for-the-badge)
![repo size](https://img.shields.io/github/repo-size/NullBrunk/FTPy?style=for-the-badge)
</div>


As I’ve mentioned before, I’m currently pursuing a bachelor’s degree in the field of networks and telecommunications, where I’m often tasked with configuring IP addresses and machine routes. Therefore, I wanted to automate and simplify this task by developing a small script that facilitates configuration using a TUI (Text User Interface) and short commands. I chose the scripting language I am most comfortable with: Python.
<br>



#### 💻 Usage 

##### Show mode : IP
This mode allows you to display a variety of information related to a given interface. You can provide the interface via CLI or by interactively selecting it from a list.
![show_mode_ip](https://github.com/NullBrunk/IPy/assets/125673909/5da86a4c-cdb0-414c-8aa6-d873ca4e5cde)

##### Show mode : ROUTE
This mode allows you to display the routes in a nice format
![image](https://github.com/NullBrunk/IPy/assets/125673909/ce1d2c97-02ec-4780-a132-d9c23efc34c2)


##### Config mode : IP
This mode allows you to UP/DOWN the interface or ADD/DELL an ip (v4 or v6), on a given interface. You can provide the interface via CLI, or by interactively selecting it from a list.
![config_mode_ip](https://github.com/NullBrunk/IPy/assets/125673909/940bca59-5797-4fc9-a9c2-1843a10ba855)


##### Config mode : ROUTE
This mode allows you to ADD/DEL a Route on a given interface. You can provide the interface via CLI, or by interactively selecting it from a list.
![route_mode](https://github.com/NullBrunk/IPy/assets/125673909/9ff3bd4b-42d8-4efc-a0c4-b5a4f1b976ea)


#### 📖 Changelog

All notable changes to this project will be documented in this file.

```bash
# [1.0] - 27 mars 2024
- First commit
- Show IP (v4 and v6) of a specific interface
- Show all routes
- Configure an interface (UP, DOWN, ADD/DEL IP)
- Configure routes (ADD/DEL)

# [1.1] - 28 mars 2024
- Refactored ALL_INTERFACES + display_interface() with netifaces
- Added netifaces to the requirements
- General graphical improvement
- Refactored the log class
```

#### 📂 Source
The source code and installation instructions are accessible <a href="https://github.com/NullBrunk/IPy" target="_blank">here</a>

