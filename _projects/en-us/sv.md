---
page_id: searchvision
layout: page
title: Search Vision
description: Open-source platform for end-to-end custom object detection model creation.
img: assets/img/sv/sv.png
importance: 1
category: other_projects
---
Sept 2024 - Present

SearchVision is an end-to-end AI pipeline that automates the process of  training custom computer vision object detection models. Rather than manually collecting and labeling thousands of images, a user simply types the name of the object they want to detect, SearchVision handles the rest, from automated web scraping and dataset construction to model training and export.

The project stemmed from a recurring frustration: the bottleneck in most CV projects isn't the model architecture, it's the dataset. SearchVision eliminates that bottleneck entirely.

### Technical Contributions
* **Automated Dataset Pipeline:** Built a web scraping system that automatically collects, filters, and structures image datasets based on a user-provided text query, eliminating manual data collection entirely.
* **CV Model Training Automation:** Integrated automated model training on the collected dataset, producing a deployable object detection model without manual intervention.
* **Fallback Search Architecture:** Implemented a multi-source search fallback system to ensure robust dataset collection when primary sources  return insufficient results.
* **UI:** Developed a functional user interface allowing users to initiate the full pipeline through a simple text input.

### Research
A whitepaper documenting SearchVision's architecture and methodology is publicly available on the project's GitHub repository.

### Links
* [GitHub Repository](https://github.com/BrandonS09/SearchVision)
* [Whitepaper](https://github.com/Brandon-Shen/SearchVision/blob/main/SearchVision__Human_in_the_Loop_Object_Detection_Dataset_Generation_from_Web_Images.pdf)