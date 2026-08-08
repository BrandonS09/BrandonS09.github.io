
const currentUrl = window.location.href;
const siteUrl = "https://brandons09.github.io";
let updatedUrl = currentUrl.replace("https://brandons09.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-landing",
    title: "Landing",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-photography",
          title: "Photography",
          description: "A gallery of photography and motorsport work.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "Activities and contributions.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "photography-cold-start-2026",
          title: 'Cold Start 2026',
          description: "Photography from Cold Start 2026 in San Francisco",
          section: "",handler: () => {
              window.location.href = "/photography/cold_start_2026/";
            },},{id: "photography-redbull-showrun",
          title: 'Redbull Showrun',
          description: "Photography from Redbull Showrun in San Francisco",
          section: "",handler: () => {
              window.location.href = "/photography/redbull_showrun/";
            },},{id: "projects-frc-2024-competition-robot",
          title: 'FRC 2024 Competition Robot',
          description: "End Effector Design and Programming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/frc2024/";
            },},{id: "projects-frc-2025-competition-robot",
          title: 'FRC 2025 Competition Robot',
          description: "Elevator Design and Overall Robot Programming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/frc2025/";
            },},{id: "projects-search-vision",
          title: 'Search Vision',
          description: "Open-source platform for end-to-end custom object detection model creation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sv/";
            },},{id: "projects-motorized-test-track",
          title: 'Motorized Test Track',
          description: "A fully modular motorized test track used for HIL testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/verdant/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-projeto-4",
          title: 'projeto 4',
          description: "outro sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-projeto-5",
          title: 'projeto 5',
          description: "um projeto com imagem de fundo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-projeto-6",
          title: 'projeto 6',
          description: "um projeto sem imagem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: 'Languages',
          handler: () => {
            window.location.href = "/pt-br" + updatedUrl;
          },
        },{
          id: 'lang-fr-ca',
          title: 'fr-ca',
          section: 'Languages',
          handler: () => {
            window.location.href = "/fr-ca" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
