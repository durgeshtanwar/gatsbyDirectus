import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit perferendis, eum ipsa dolore omnis praesentium debitis!
              Illum, fugiat aspernatur velit voluptas at repellat reiciendis qui
              laboriosam? Dolorum, tempore perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              beatae sed autem neque aspernatur perspiciatis molestias ex
              excepturi facere corporis labore pariatur consectetur
              exercitationem unde, magni voluptatum, voluptatem doloremque modi.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
