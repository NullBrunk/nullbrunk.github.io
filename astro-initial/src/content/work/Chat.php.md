---
title: PHP Chat
publishDate: 2022-09-01 05:53:18
img: /assets/works/phpchat.png
img_alt: An image of the php web chat
description: Interactive webchat written in PHP/JS  
tags:
  - AJAX
  - PHP
  - REST API
  - WebChat
  - Bootstrap5
  - Docker
---

<div align="center">
  <img class="work-icons" src="/icons/php.png">
  <img class="work-icons" src="/icons/js.png">
  <img class="work-icons" src="/icons/bootstrap.png">
  <img class="work-icons" src="/icons/mysql.png">
  <img class="work-icons" src="/icons/docker.png">
</div>


In order to gain experience with API development and some concepts like interactivity, designing a responsive UI, and so on, i made a PHP chat with a backend based on a PHP API to manage authentication and messages, coupled with a MariaDB database.
<br><br>
On the other hand, the front-end is entirely handled by **JavaScript** with AJAX requests, and by **Bootstrap + Vanilla CSS** for the CSS part.

### 🔐 Login

<video controls style="width: 100%;">
  <source src="https://github.com/NullBrunk/Chat.php/assets/125673909/d5de75cd-9410-4fae-b0c1-2001a0a46c63" type="video/mp4" />
</video>

As you may noticed, the validation is done with AJAX, so it's dynamic.

### 💬 Chat 

<video controls style="width: 100%;">
  <source src="https://github.com/NullBrunk/Chat.php/assets/125673909/57a08d7c-36eb-4879-a80d-c4a467fbe4b5" type="video/mp4" />
</video>

The \<form\> is directly posted to the API. However, the update and delete fonctionnalities are done in JavaScript with AJAX requests.

### ⚙️ Settings page

<video controls style="width: 100%;">
  <source src="https://github.com/NullBrunk/Chat.php/assets/125673909/8b722d85-87a6-4c55-b98c-7414ab3b9157" type="video/mp4" />
</video>

The validation of the entered password is also done with AJAX requests.

<br>


#### 📂 Source

The source code and installation instructions are accessible <a href="https://github.com/NullBrunk/Chat.php" target="_blank">here</a>

You'll also find a docker-compose file there if you want to test the application locally.

