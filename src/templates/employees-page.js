import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EmployeesPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

EmployeesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EmployeesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <Layout>
        <EmployeesPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
        />
      </Layout>
  )
}

EmployeesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EmployeesPage

export const employeesPageQuery = graphql`
  query EmployeesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
