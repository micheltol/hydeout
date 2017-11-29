---
layout: post
title: "Docker for Windows  - unauthorized: incorrect username or password"
categories:
  - Docker
tags:
  - docker
  - troubleshooting
last_modified_at: 2017-11-29T10:25:52+02:00
---

On my development machine I am using Docker For Windows to speed up development, keep my dev machine as clean as possible and to avoid the 'it works on my machine' problem.

### But what is Docker For Windows?
> Docker For Windows is an integrated, easy-to-deploy development environment for building, debugging and testing Docker apps on a Windows PC. Docker for Windows is a native Windows app deeply integrated with Hyper-V virtualization, networking and file system, making it the fastest and most reliable Docker environment for Windows. <cite>[Docker.com](https://www.docker.com/docker-windows)</cite>{: .small}

I had to reset Docker on my machine because of some weird timeout error - after resetting I tried the pull an image from the Docker registry when the following error occured.
> Error response from daemon: Get https://registry-1.docker.io/v2/microsoft/dotnet-samples/manifests/latest: unauthorized: incorrect username or password.

I was suprised about this error because according to the Docker for Windows client I was logged in to Docker. Trying to re-authenticate via the commandline (_docker login_) resulted in a simular error.

![Docker login via commandline]({{ site.baseurl }}/assets/images/20171129/error_commandline_login.png "Docker login via commandline")

### The Solution
When searching for a solution I came across [this post](https://github.com/docker/hub-feedback/issues/935#issuecomment-300361781). The docker commandline is expecting your Docker id and **your Docker id is not your email address**. The Docker for Windows client does accept your email address, the underlying docker commandline isn't.

To find your docker id go to [docker.com](https://www.docker.com/) and sign in. When signed in your docker id will be shown in the right-top-corner. My docker id is _'micheltol'_.

![Signed in on Docker.com]({{ site.baseurl }}/assets/images/20171129/dockercom_signedin.png "Signed in on Docker.com")

Going back to the commandline, signing in with your docker id and pulling the image works as expected!
![Pulling the docker image]({{ site.baseurl }}/assets/images/20171129/docker_commandline_success.png "Pulling the docker image")

