---
layout: post
title: "Updating the Jenkins Agent"
excerpt_separator: "<!--more-->"
categories:
  - jenkins, note to self
tags:
  - docker
  - troubleshooting
last_modified_at: 2017-11-29T10:25:52+02:00
---

This post is more like a note to self about updating the Jenkins Agent on Windows (but will proberly work on other OS's too.

### What is Jenkins?
> Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software. Jenkins can be installed through native system packages, _Docker_, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.. <cite>[Jenkins.io](https://jenkins.io/doc/)</cite>{: .small}

### What is a Jenkins Agent / Slave?
> Jenkins supports the "master/slave" mode, where the workload of building projects are delegated to multiple "slave" nodes, allowing a single Jenkins installation to host a large number of projects, or to provide different environments needed for builds/tests. This document describes this mode and how to use it.
<cite>[Jenkins.io](https://https://wiki.jenkins.io/display/JENKINS/Distributed+builds)</cite>{: .small}

### How to update?
Even when Jenkins is updated regularly the need to update the agent is minimal. Updating the slave is pretty straightforward.

* stop the jenkins agent - windows service
* browse to `http://<jenkinsmaster:portnumber>/jnlpJars/slave.jar`
* Copy over the downloaded slave.jar to the installation folder of the Jenkins Agent
* start the jenkins agent


