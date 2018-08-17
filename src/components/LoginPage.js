import React from "react";
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="login-page h-100">
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <div class="card">
                <div class="card-body">
                  <div class="text-center">
                    <h3 class="white-text">
                        Welcome to Spendify.
                    </h3>
                  </div>
                  
                  <button className="btn btn-lg btn-primary btn-block" onClick={startLogin}>Login</button>

                </div>
              </div>
           

            </div>
        </div>
       
        
    </div>
)
const mapDispatchToProps = (dispatch) => ({
        startLogin: () =>  dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)
