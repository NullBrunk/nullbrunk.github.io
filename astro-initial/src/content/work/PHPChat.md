---
title: Chat
publishDate: 2023-09-01 05:53:18
img: /assets/works/phpchat.png
img_alt: An image of a php webchat
description: An interactive WebChat in PHP and JS  
tags:
  - AJAX Request
  - PHP-native
  - Vanilla JS
  - Rest-API
  - Dynamic
---

<div align="center">
  <br/>    
  
  ![GitHub top language](https://img.shields.io/github/languages/top/NullBrunk/PHPMonitor?style=for-the-badge)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/NullBrunk/PHPMonitor?style=for-the-badge)
  ![repo size](https://img.shields.io/github/repo-size/NullBrunk/PHPMonitor?style=for-the-badge)

  <br>
</div>


In order to gain experience with Restful-API development and some concepts like interactivity, designing a responsive UI, and so on, i made a <a href="http://webchat-1.000webhostapp.com/">PHPChat</a> with a backend based on a PHP Restful-API to manage authentication and messages, coupled with a MariaDB database.
<br><br>
The front-end part, on the other hand, is entirely handled by **JavaScript** with AJAX requests, and by **Bootstrap + Vanilla CSS** for the CSS part.

#### 🔐 Login
<img src="https://github.com/NullBrunk/PHPChat/assets/125673909/ea198379-ee30-421b-8bf9-d4c9a8c84274" style="width: 100%;" />

As you may noticed, the validation is dynamic. The user types something, hit the submit button and JavaScript + the PHP API do the rest.

#### 💬 Chat 
<img src="https://github.com/NullBrunk/PHPChat/assets/125673909/b14b05ed-f002-489e-b568-db3ab0a5cb9b" style="width: 100%;" />

Here, the post message is not dynamic, so the \<form\> is directly post to the API. However, the update and delete fonctionnalities are dynamic, JS updates/removes the element from the DOM (front-side) and does an AJAX request to the API to update/remove it from the database (backend-side).

#### ⚙️ Settings page
<img src="https://github.com/NullBrunk/PHPChat/assets/125673909/672b8596-6146-4404-b13e-da1b2b09927a" style="width: 100%;" />

The validation of the entered password is also dynamic.

<br>


#### 📂 Source

The source code and installation instructions are accessible <a href="https://github.com/NullBrunk/PHPChat" target="_blank">here</a>

You'll also find a docker-compose file there if you want to test the application locally.

