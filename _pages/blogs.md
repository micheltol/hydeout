--- 
layout: default 
permalink: /blogs 
title: Recente blogposts
---

<div id="fh5co-team-section">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="heading-section text-center animate-box">
                    <h2>{{page.title}}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">

                {% assign sortedposts = site.posts | sort:"last_modified_at" | reverse %}
                {% for post in sortedposts %}
                <div class="col-md-12 col-md-offset-0">
                        <div class="fh5co-blog animate-box">
                            <div class="inner-post">
                                <a href="{{post.url}}">
                                    {% if post.image %}
                                        <img class="img-responsive" src="{{site.baseurl}}/assets/images/posts/{{post.image}}" alt="{{post.title}}">
                                    {% else %}
                                        <img class="img-responsive" src="{{ site.baseurl }}/assets/images/posts/blogdefault.jpg" alt="{{post.title}}">
                                    {% endif %}
                                </a>
                            </div>
                            <div class="desc">
                                <h3>
                                    <a href="{{post.url}}">{{post.title}}</a>
                                </h3>
                                <span class="comment"><i class="icon-stopwatch"> </i>{{ post.last_modified_at | date: "%d %b %Y" }}</span>
                                <span> - </span>
                                <span class="comment">
                                    {% assign wordCount = post.content | number_of_words %}
                                    {%assign minutesToRead = wordCount | divided_by: site.applicationsettings.wordCountPerMinute | round %}
                                    {{ minutesToRead }} min. 
                                        <i class="icon-bubble22"></i>
                                </span>
                                <p>{{post.summary}}</p>
                                <a href="{{post.url}}" class="btn btn-default">Lees verder</a>
                            </div>
                        </div>
                    </div>
                {% endfor %} 

            </div>	
        </div>
    </div>
</div>


  
