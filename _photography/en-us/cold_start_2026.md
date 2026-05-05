---
layout: page
title: Cold Start 2026
description: Photography from Cold Start 2026 in San Francisco
img: assets/img/cold_start_2026/IMG_2346_Nero_AI_Image_Denoiser_100_01.jpg
importance: 1
---

<div class="photography-gallery">
  <div class="row">
    {% assign images = "IMG_2346_Nero_AI_Image_Denoiser_100_01.jpg,IMG_2348_Nero_AI_Image_Denoiser_100.jpg,IMG_2378_Nero_AI_Image_Denoiser_100.jpg,IMG_2388_Nero_AI_Image_Denoiser_100.jpg,IMG_2638_Nero_AI_Image_Denoiser_100.jpg,IMG_2654_Nero_AI_Image_Denoiser_100.jpg,IMG_2716.jpg,IMG_2725_Nero_AI_Image_Denoiser_100.jpg,IMG_2767.jpg,IMG_2769.jpg,IMG_2778.jpg,IMG_2780.jpg,IMG_2788.jpg,IMG_2793.jpg,IMG_2820.jpg,IMG_2827.jpg,IMG_2836.jpg,IMG_2846.jpg,IMG_2853.jpg,IMG_2854.jpg,IMG_2864.jpg,IMG_2866.jpg,IMG_2884.jpg,IMG_2894.jpg,IMG_2901.jpg,IMG_2940.jpg,IMG_2942.jpg,IMG_2944.jpg,IMG_2947.jpg,IMG_2953.jpg,IMG_2958.jpg,IMG_3002.jpg,IMG_3015.jpg,IMG_3026.jpg,IMG_3032.jpg,IMG_3033.jpg,IMG_3035.jpg,IMG_3039.jpg,IMG_3040.jpg,IMG_3042.jpg,IMG_3051.jpg,IMG_3055.jpg,IMG_3056.jpg,IMG_3057.jpg,IMG_3064.jpg,IMG_3066.jpg,IMG_3070.jpg,IMG_3072.jpg,IMG_3079.jpg,IMG_3083.jpg,IMG_3086.jpg,IMG_3088.jpg,IMG_3094.jpg,IMG_3104.jpg,IMG_3108.jpg,IMG_3126.jpg,IMG_3172.jpg,IMG_3192.jpg,IMG_3213.jpg,IMG_3215.jpg,IMG_3217.jpg,IMG_3219.jpg,IMG_3277.jpg,IMG_3282.jpg,IMG_3285.jpg,IMG_3288.jpg,IMG_3323.jpg,IMG_3331.jpg" | split: "," %}
    {% for img in images %}
        <div class="col-12 col-md-6 col-lg-6 mt-4">
            {% capture img_path %}assets/img/cold_start_2026/{{ img }}{% endcapture %}
            {% include figure.liquid loading="lazy" path=img_path title="Cold Start 2026" class="img-fluid rounded z-depth-1" %}
        </div>
    {% endfor %}
  </div>
</div>
