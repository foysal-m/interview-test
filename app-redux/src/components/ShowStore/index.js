import React from 'react'
import './footer.css'
import { connect } from 'react-redux'

function ShowStore(props) {
  return <pre className="footer">State: {JSON.stringify(props, null, 2)}</pre>
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(ShowStore)
