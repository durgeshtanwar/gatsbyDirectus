import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          complexData {
            age
            name
          }
          simpleData
          title
          description
          person {
            age
            name
          }
        }
      }
    }
  `)
  //   return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} {item.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FetchData
