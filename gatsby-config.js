/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "simply Recipes",
    description: "A simple recipe site",
    author: "@durgesh_tanwar",
    person: { name: "durgesh", age: 23 },
    simpleData: ["item 1", "item 2", "item 3"],
    complexData: [
      { name: "durgesh", age: 23 },
      { name: "chiku", age: 0.2 },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: `http://localhost:8055`, // Fill with your Directus instance address
        auth: {
          token: "graphics", // You can use a static token from an user

          // Or you can use the credentials of an user
          // email: "johndoe@directus.cloud",
          // password: "mysecretpassword",
        },
      },
    },
  ],
}
