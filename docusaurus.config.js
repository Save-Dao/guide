module.exports = {
    title: "Save Guide",
    tagline: "Magical Internet Organization Grimoire",
    url: "https://github.com",
    baseUrl: "/guide/",
    favicon: "img/rg-icon.png",
    onBrokenLinks: "ignore",
    organizationName: "Save-Dao", // Usually your GitHub org/user name.
    projectName: "Mio-grimoire", // Usually your repo name.
    themeConfig: {
        navbar: {
            logo: {
                alt: "Save Dao Logo",
                src: "img/rg-icon.png",
            },
            items: [
                // { to: "docs/raidCentral", label: "Handbook", position: "left" },
                // {
                //   to: "docs/raidCentral#member-registry",
                //   label: "Member Registry",
                //   position: "left"
                // },
                {
                    href: "https://www.adbongo.io",
                    label: "Main Site",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //   {}, // keep this empty object in so the footer objects are "centered" in desktop view
            //   {
            //     title: "Our Presence",
            //     items: [
            //       {
            //         label: "Homepage",
            //         href: "https://www.adbongo.io"
            //       },
            //       {
            //         label: "DAO",
            //         href: "https://twitter.com/adbongogroupllc"
            //       },
            //       {
            //         label: "Twitter",
            //         href: "https://twitter.com/adbongogroupllc"
            //       },
            //       {
            //         label: "GitHub",
            //         href: "https://github.com/save-dao"
            //       }
            //     ]
            //   }
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} SAVE, DAO`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/raid-guild/handbook/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
