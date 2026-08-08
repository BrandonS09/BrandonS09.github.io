
const currentUrl = window.location.href;
const siteUrl = "https://brandons09.github.io";
let updatedUrl = currentUrl.replace("https://brandons09.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr-ca".length > 0) {
  updatedUrl = updatedUrl.replace("/fr-ca", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-landing",
    title: "Landing",
    section: "",
    handler: () => {
      window.location.href = "/fr-ca/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my projects.",
          section: "",
          handler: () => {
            window.location.href = "/fr-ca/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "",
          handler: () => {
            window.location.href = "/fr-ca/cv/";
          },
        },{id: "nav-photography",
          title: "Photography",
          description: "A gallery of photography and motorsport work.",
          section: "",
          handler: () => {
            window.location.href = "/fr-ca/photography/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "Activities and contributions.",
          section: "",
          handler: () => {
            window.location.href = "/fr-ca/activities/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "photography-cold-start-2026",
          title: 'Cold Start 2026',
          description: "Photography from Cold Start 2026 in San Francisco",
          section: "",handler: () => {
              window.location.href = "/fr-ca/photography/cold_start_2026/";
            },},{id: "photography-redbull-showrun",
          title: 'Redbull Showrun',
          description: "Photography from Redbull Showrun in San Francisco",
          section: "",handler: () => {
              window.location.href = "/fr-ca/photography/redbull_showrun/";
            },},{id: "projects-frc-2024-competition-robot",
          title: 'FRC 2024 Competition Robot',
          description: "End Effector Design and Programming",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/frc2024/";
            },},{id: "projects-frc-2025-competition-robot",
          title: 'FRC 2025 Competition Robot',
          description: "Elevator Design and Overall Robot Programming",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/frc2025/";
            },},{id: "projects-search-vision",
          title: 'Search Vision',
          description: "Open-source platform for end-to-end custom object detection model creation.",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/sv/";
            },},{id: "projects-motorized-test-track",
          title: 'Motorized Test Track',
          description: "A fully modular motorized test track used for HIL testing.",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/verdant/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "",handler: () => {
              window.location.href = "/fr-ca/projects/9_project/";
            },},{
        id: 'social-email',
        title: '',
        section: '',
        handler: () => {
          window.open("mailto:%62%72%61%6E%64%6F%6E%73%68%65%6E%31%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: '',
        handler: () => {
          window.open("https://www.linkedin.com/in/brandonshen09", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: '',
        handler: () => {
          window.open("/assets/pdf/fr-ca//assets/pdf/[LANG]/Brandon_Shen_CV.pdf", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '',
        handler: () => {
          window.open("https://github.com/BrandonS09", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: '',
        handler: () => {
          window.open("https://instagram.com/_brandon.s__", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=c-_K4qUAAAAJ", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: '',
          handler: () => {
            window.location.href = "/pt-br" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '',
      description: '',
      section: '',
      handler: () => {
        setThemeSetting("system");
      },
    },];
