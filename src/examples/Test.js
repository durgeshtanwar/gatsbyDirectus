import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const q = graphql`
  {
    directus {
      articles {
        post
        title
        img {
          id
          imageFile {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: TRACED_SVG
                width: 300
              )
            }
          }
        }
      }
    }
  }
`

const Test = () => {
  const data = useStaticQuery(q)
  console.log(data)
  return (
    <div>
      {data.directus.articles.map((article, index) => {
        const { title, img } = article
        console.log(img)
        return (
          <div key={index}>
            <h1>{article.title}</h1>
            <p>{article.post}</p>
            <GatsbyImage
              alt="atest"
              image={article.img.imageFile.childImageSharp.gatsbyImageData}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Test
