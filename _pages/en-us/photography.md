---
page_id: photography
layout: page
title: Photography
permalink: /photography/
description: A gallery of photography and motorsport work.
nav: true
nav_order: 4
---

<!-- pages/photography.md -->
<div class="photography">
  {% assign sorted_galleries = site.photography | sort: "importance" %}
  <!-- Generate cards for each gallery -->
  <div class="row row-cols-1">
    {% for gallery in sorted_galleries %}
      <div class="col mb-4">
        <a href="{{ gallery.url | relative_url }}">
          <div class="card hoverable">
            {% if gallery.img %}
              <img class="card-img-top" src="{{ gallery.img | relative_url }}" alt="{{ gallery.title }}" style="height: 200px; object-fit: cover;">
            {% endif %}
            <div class="card-body">
              <h5 class="card-title">{{ gallery.title }}</h5>
              <p class="card-text">{{ gallery.description }}</p>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

