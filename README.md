# NodeBlog - A blogging platform built on Node.js

[![Build Status](https://travis-ci.org/rukmal/NodeBlog.svg?branch=master)](https://travis-ci.org/rukmal/NodeBlog)

![Alt text](./bin/NodeBlog_logo.png)


##Description

NodeBlog is a full stack blogging platform, including a utility to write and publish posts in Markdown, as well as Facebook-authenticated comments. This utility was developed and written entirely in JavaScript, HTML and CSS using Node.js, ExpressJS, MongoDB and the Facebook SDK.

## Installation

First, you would want to make sure that you have all of the basic dependencies installed: *Node.js*, and *npm* (Node package manager).

After this, navigate to the project folder and proceed to install all Node.js dependencies using the following:
```shell
npm install
```

Next, edit the ```userdata.json``` file, changing all information to that of your own. This step will edit all configuration on the actual blog.

A critical decision you will have to make when deploying NodeBlog is whether or not you will be using an online hosting service to host your blog (eg: [Heroku](http://herokuapp.com)), or whether you will be hosting it on a server that you have the ability to start an interactive session with. Follow the next steps depending on what type of service you choose to use.

### Heroku Installation

- Create a [MongoLab](mongolab.com) account, or a different MongoDB online storage service. Add your unique database connection URL to ```userdata.json```, for the blog to connect to the database correctly.
- Deploy to Heroku, and have fun with your new blog!

### Local Installation

- Decide where you want to store your blogposts. Personally, I recommend storing them in the same directory as your NodeBlog working directory. Before launching the blog locally, run the following command after navigating to the folder containing NodeBlog.
```shell
mkdir blog_data && mongod --dbpath blog_data &
```
- Launch your blog with the following command, and have fun with your blog!
```shell
[sudo] forever start app.js
```
*Note: The sudo may be necessary, depending on your system configuration.*