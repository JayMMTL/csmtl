import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import EmailListForm from '../../components/EmailListForm'


  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <EmailListForm />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
