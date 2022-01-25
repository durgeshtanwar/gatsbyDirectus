import React, { Component } from "react"
import Layout from "../components/Layout"

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3> Want to Get in Touch?</h3>
              <p>
                Pour-over swag disrupt butcher pork belly fanny pack you
                probably haven't heard of them everyday carry meditation
                flexitarian tbh activated charcoal selfies. Ennui literally
                fanny pack pork belly.
              </p>
              <p>
                Listicle chillwave flexitarian you probably haven't heard of
                them craft beer health goth keffiyeh butcher four loko offal
                cronut. Squid post-ironic godard hexagon semiotics snackwave
                fashion axe bespoke retro locavore seitan
              </p>
              <p>
                succulents. Banjo coloring book pug tacos godard vinyl readymade
                mixtape sriracha leggings listicle tousled tilde ramps.
                Wayfarers coloring book skateboard, bicycle rights mumblecore
                meggings woke VHS mlkshk hammock authentic taxidermy raclette
              </p>
            </article>
            <article>
              <form action="" className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">
                    Your Name
                    <input type="text" name="name" id="name" />
                  </label>
                </div>
                <div className="form-row">
                  <label htmlFor="email">
                    Your Email
                    <input type="email" name="email" id="email" />
                  </label>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    )
  }
}
