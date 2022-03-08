// import { request, gql } from "graphql-request";

// // const token = process.env.PERSONAL_BLOG_TOKEN;
// const graphqlAPI = `https://api-ap-northeast-1.graphcms.com/v2/ckvxh19hm3h4r01z0b5udb1ao/master`;

// export const getPosts = async () => {
//   const query = gql`
//     query MyQuery {
//       postsConnection {
//         edges {
//           node {
//             author {
//               bio
//               author
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             updatedAt
//             slug
//             title
//             metaDescription
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);
//   return result.postsConnection.edges;
// };

// export const getRecentPosts = async () => {
//   const query = gql`
//     query GetPostDetails() {
//       posts(
//         orderBy: createdAt_ASC
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);
//   return result.posts;
// };

// export const getSimilarPosts = async (categories, slug) => {
//   const query = gql`
//     query GetPostDetails($slug: String!, $categories: [String!]) {
//       posts(
//         where: {
//           slug_not: $slug
//           AND: { categories_some: { slug_in: $categories } }
//         }
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query, { slug, categories });
//   return result.posts;
// };

// export const getCategories = async () => {
//   const query = gql`
//     query GetCategories {
//       categories {
//         name
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query);
//   return result.categories;
// };

// export const getPostDetails = async (slug) => {
//   const query = gql`
//     query GetPostDetails($slug: String!) {
//       post(where: { slug: $slug }) {
//         author {
//           bio
//           author
//           id
//           photo {
//             url
//           }
//         }
//         createdAt
//         slug
//         title
//         metaDescription
//         featuredImage {
//           url
//         }
//         categories {
//           name
//           slug
//         }
//         content {
//           raw
//         }
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query, { slug });
//   return result.post;
// };
