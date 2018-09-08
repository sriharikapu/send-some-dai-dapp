import React from 'react'
import { connect } from 'react-redux'

import "../Styles/transaction-commit.css"

class TransactionCommit extends React.Component {
  render() {
    //TODO: Update with props for receipient
    const email = 'jarvie@example.com'

    return <div>
      <div className="transaction-commit">
        <h1>Preparing to send $50 USD to {email}</h1>

        <ul>
          <li>We will create a new disposable wallet to send the funds</li>
          <li>Dai will be purchased from the Oasis decentralized exchange</li>
          <li>The receipient will be able to access this wallet on their phone</li>
          <li>Aproximate fees are 0.0001 ETH</li>
          <li>Aproximate exchange rate is 223 USD/ETH</li>
        </ul>

        <button className="button-cta">
          I agree. Send the funds.
        </button>

        <div>&nbsp;</div>
      </div>
    </div>
  }
}

export default connect(
  null,
  null
)(TransactionCommit)