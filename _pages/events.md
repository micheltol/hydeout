--- 
layout: default 
permalink: /events 
title: Events
---
<div id="fh5co-team-section">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="heading-section text-center animate-box">
                    <h2>{{page.title}}</h2>
                </div>
                <div class="col-md-12 col-sm-12 fulleventList" >
                {% assign sortedEvents = site.data.events | sort:"date" | reverse %}
                {% for event in sortedEvents %}
                    <div class="col-md-12 col-md-offset-0 event" id='{{ event.date | date: "%s" }}'>
                        <div class="fh5co-blog animate-box">
                            <div class="meta-date text-center">
                                <p>
                                    <span class="date">{{ event.date | date: "%d" }}</span>
                                    <span>{{ event.date | date: "%b" }}</span>
                                    <span>{{ event.date | date: "%Y" }}</span>
                                </p>
                            </div>
                            <div class="desc desc2">
                                <h3>
                                    <a href="#">{{ event.title }}</a>
                                </h3>
                                <span class="posted_by">Team: {{ event.members }}</span>
                                <p>{{ event.description }}</p>
                                <!-- <a href="#" class="btn btn-default">Read More</a> -->
                            </div>
                        </div>
                    </div>
                {% endfor %} 
                </div>	
            </div>
        </div>
    </div>
</div>