import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserData } from '../redux/coba'

function UserContainer ({ res, getUserData }) {
  useEffect(() => {
    getUserData(res.userId)
  }, [])
  return res.loading ? (
    <h2>Loading</h2>
  ) : res.error ? (
    <h2>{res.error}</h2>
  ) : (
    <div>
        <h2>User Data</h2>
        <div>
        {
            res &&
            res.userData &&
        
            Object.keys(res.userData).map((key, i) => (
                <p key={i}>
                    <span>{key}: </span>
                    <span>{res.userData[key]}</span>
                </p>
            ))
        }
        </div>
    </div>
  )
}



const mapStateToProps = state => {
  return {
    res: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)