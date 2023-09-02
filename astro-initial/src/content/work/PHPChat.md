---
title: Chat
publishDate: 2023-09-01 21:53:18
img: /assets/works/phpchat.png
img_alt: An image of a php webchat
description: An interactive WebChat in PHP and JS  
tags:
  - Rest-API
  - AJAX
  - Vanilla JS
  - PHP-native
---


This is my second project in vanilla PHP, and is accessible here http://webchat-1.000webhostapp.com/. <br>
In order to gain experience with Restful-API development and some concepts like interactivity, responsive UI, and so on, i made a PHPChat with a backend based on an Restful-API to manage authentication and messages, and a front-end part in vanilla javascript with AJAX Request.  

#### Login
![logsig](https://github.com/NullBrunk/PHPChat/assets/125673909/ea198379-ee30-421b-8bf9-d4c9a8c84274)

As you can see here, the validation is dynamic, the user type something, hit the submit button and JavaScript + the PHP API do the rest.

#### Chat 
![simplescreenrecorder-2023-09-02_16 11 39 (online-video-cutter com)](https://github.com/NullBrunk/PHPChat/assets/125673909/b14b05ed-f002-489e-b568-db3ab0a5cb9b)

Here, the post message is not dynamic, so we post to the API with the \<form\> directly. However, the update and delete functionnality are dynamic, javascript update/remove the element from the DOM (front-side) and does an AJAX request to the API to update/remove it from the database (backend-side).

#### Settings page
![simplescreenrecorder-2023-09-02_16 38 36 (online-video-cutter com)](https://github.com/NullBrunk/PHPChat/assets/125673909/672b8596-6146-4404-b13e-da1b2b09927a)

The validation of the entered password is also dynamic.

<br>


#### Source

https://github.com/NullBrunk/PHPChat
