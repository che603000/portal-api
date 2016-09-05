/**
 * Created by alex on 05.09.2016.
 */
import React from 'react'
import { connect } from 'react-redux'
//import { increase, decrease } from '../actions/count'

function Home({ number, increase, decrease }) {
    return (
        <div>
            Some state changes:
        </div>
    )
}

// export default connect(
//     state => ({ number: state.count.number }),
//     //{ increase, decrease }
// )(Home)

export default Home