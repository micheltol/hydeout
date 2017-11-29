---
layout: post
title: "Docker for Windows  - unauthorized: incorrect username or password"
excerpt_separator: "<!--more-->"
categories:
  - Docker
tags:
  - docker
  - troubleshooting
last_modified_at: 2017-11-29T10:25:52+02:00
---

On my development machine I am using Docker For Windows to speed up development, keep my dev machine as clean as possible and to avoid the 'it works on my machine' problem.

### What is Docker For Windows?
> Docker For Windows is an integrated, easy-to-deploy development environment for building, debugging and testing Docker apps on a Windows PC. Docker for Windows is a native Windows app deeply integrated with Hyper-V virtualization, networking and file system, making it the fastest and most reliable Docker environment for Windows. <cite>[Docker.com](https://www.docker.com/docker-windows)</cite>{: .small}

<small>Side note: Docker for windows is a client tool and is utilizing Hyper-V, as far as I know Hyper-V is only supported on Windows 10 Professional or Enterprise 64-bit clients.</small>

I had to reset Docker on my machine because of some weird timeout error - after resetting I tried the pull an image from the Docker registry when the following error occured.
> Error response from daemon: Get https://registry-1.docker.io/v2/microsoft/dotnet-samples/manifests/latest: unauthorized: incorrect username or password.

I was surprised about this error; according to the Docker for Windows client I was logged in. I also tried to re-authenticate via the commandline (`docker login`). This resulted in the same error.

![Docker login via commandline]({{ site.baseurl }}/assets/images/20171129/error_commandline_login.png "Docker login via commandline")

<!--more-->

### The Solution
When searching for a solution I came across [this post](https://github.com/docker/hub-feedback/issues/935#issuecomment-300361781). The docker commandline is expecting your Docker id and **your Docker id is not your email address**. The Docker for Windows client does accept your email address, the underlying docker commandline doesn't.

To find your docker id go to [docker.com](https://www.docker.com/) and sign in. When signed in your docker id will be shown in the right-top-corner. My docker id is _'micheltol'_.

![Signed in on Docker.com]({{ site.baseurl }}/assets/images/20171129/dockercom_signedin.png "Signed in on Docker.com")

Go back to the commandline, sign in with your docker id & password with the command `docker login` and start pulling those images!
![Pulling the docker image]({{ site.baseurl }}/assets/images/20171129/docker_commandline_success.png "Pulling the docker image")

