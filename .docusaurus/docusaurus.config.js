export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Save Dao Logo",
        "src": "img/rg-icon.png"
      },
      "links": [
        {
          "href": "https://raidguild.org",
          "label": "Dot Org",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2022 RaidGuild, DAO"
    }
  },
  "title": "MIO Grimoire",
  "tagline": "Magical Internet Organization Grimoire",
  "url": "https://github.com/savedao/Mio-grimoire",
  "baseUrl": "/savedao/",
  "favicon": "img/rg-icon.png",
  "organizationName": "Savedao",
  "projectName": "Mio-grimoire",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/baba/grimoire/sidebars.js",
          "editUrl": "https://github.com/raid-guild/handbook/edit/master/"
        },
        "theme": {
          "customCss": "/Users/baba/grimoire/src/css/custom.css"
        }
      }
    ]
  ]
};