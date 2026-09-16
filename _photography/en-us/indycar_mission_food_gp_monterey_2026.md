---
layout: page
title: IndyCar Mission Food Grand Prix of Monterey
description: Photography from the IndyCar Mission Food Grand Prix of Monterey at Laguna Seca
img: assets/img/indylagunaseca2026/IMG_6311.jpg
importance: 3
---

<div class="photography-gallery">
  <div class="row">
    {% assign images = "IMG_3371.jpg,IMG_3377.jpg,IMG_3383.jpg,IMG_3389.jpg,IMG_3406.jpg,IMG_3410.jpg,IMG_3418.jpg,IMG_3432.jpg,IMG_3433.jpg,IMG_3434.jpg,IMG_3436.jpg,IMG_3438.jpg,IMG_3442.jpg,IMG_3454.jpg,IMG_3470.jpg,IMG_3489.jpg,IMG_3501.jpg,IMG_3503.jpg,IMG_3506.jpg,IMG_3507.jpg,IMG_3509.jpg,IMG_3784.jpg,IMG_3852.jpg,IMG_3988.jpg,IMG_4006.jpg,IMG_4306.jpg,IMG_4517.jpg,IMG_4557.jpg,IMG_4615.jpg,IMG_4720.jpg,IMG_4727.jpg,IMG_4883.jpg,IMG_4987.jpg,IMG_4995.jpg,IMG_5023.jpg,IMG_5045.jpg,IMG_5067.jpg,IMG_5077.jpg,IMG_5088.jpg,IMG_5110.jpg,IMG_5136.jpg,IMG_5272.jpg,IMG_5322.jpg,IMG_5367.jpg,IMG_5422.jpg,IMG_5451.jpg,IMG_5486.jpg,IMG_5514.jpg,IMG_5537.jpg,IMG_5635.jpg,IMG_5642.jpg,IMG_5659.jpg,IMG_5664.jpg,IMG_5677.jpg,IMG_5850.jpg,IMG_5892.jpg,IMG_5929.jpg,IMG_5970.jpg,IMG_6010.jpg,IMG_6084.jpg,IMG_6104.jpg,IMG_6141.jpg,IMG_6237.jpg,IMG_6311.jpg" | split: "," %}
    {% for img in images %}
      <div class="col-12 col-md-6 col-lg-12 mt-4">
        {% capture img_path %}assets/img/indylagunaseca2026/{{ img }}{% endcapture %}
        {% include figure.liquid loading="lazy" path=img_path title="IndyCar Mission Food Grand Prix of Monterey" class="img-fluid rounded z-depth-1" %}
      </div>
    {% endfor %}
  </div>
</div>
