---
layout: post
title: "Best DJI Mavic settings"
excerpt_separator: "<!--more-->"
categories:
  - DJI
tags:
  - DJI
  - mavic
  - settings
last_modified_at: 2017-08-12T21:11:52+02:00
---

I love my drone, I really love it. Unfortunately I crashed it twice now. The first time I was flying in Hogsback - Eastern Cape - SA, filming some waterfalls,hit a tree and flew directly into the falls. The drone couldn’t handle it.

The 2nd time crashed it into a 40 meter high tree in Hout Bay - Western Cape. The drone survived the impact but not the fall 40 meters down. Props broken, gimbal ripped apart. Luckily I had a DJI Care Refresh package bought, which will replace your drone twice when you crash your drone!

When you get your replacement by post, the first thing you have to do is binding the drone with the remote control, update to the latest firmware and update the gimbal & control settings.

The 2 youtube videos below are the settings I am using - with these settings I got some really nice cinematic shots!

## The Best Mavic Pro Camera Settings
<div class="embed-responsive embed-responsive-16by9">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/lxBsq_iwQoE?list=PLfgL-0qmPGeFrnzsyT4ZrooiG9wAfnbnd" frameborder="0" allowfullscreen></iframe>
</div> 

## Best Settings for smooth video
<div class="embed-responsive embed-responsive-16by9">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/Ei_ymBHaRjI?list=PLfgL-0qmPGeFrnzsyT4ZrooiG9wAfnbnd" frameborder="0" allowfullscreen></iframe>
</div> 



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


