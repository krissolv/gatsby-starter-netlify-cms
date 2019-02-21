import React from 'react'
import PropTypes from 'prop-types'
import { EmployeesPageTemplate } from '../../templates/employees-page'

const EmployeesPagePreview = ({ entry, widgetFor }) => (
    <EmployeesPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

EmployeesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EmployeesPagePreview
