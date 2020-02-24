import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  handleClick = () => {
    let beginner = document.getElementById('beginner');
    let intermediate = document.getElementById('intermediate');
    let twenty = document.getElementById('twenty');
    let forty = document.getElementById('forty');
    let sixty = document.getElementById('sixty');

    if (beginner.checked && twenty.checked) {
      return this.props.history.push('/BeginnerTwenty');
    } else if (beginner.checked && forty.checked) {
      return this.props.history.push('/BeginnerForty');
    } else if (beginner.checked && sixty.checked) {
      return this.props.history.push('/BeginnerSixty');
    } else if (intermediate.checked && twenty.checked) {
      return this.props.history.push('/IntermediateTwenty');
    } else if (intermediate.checked && forty.checked) {
      return this.props.history.push('/IntermediateForty');
    } else if (intermediate.checked && sixty.checked) {
      return this.props.history.push('/IntermediateSixty');
    }
  };
  render = () => {
    return (
      <>
        <div className="container">
          <div className="col col-md-6 offset-md-4 mx-auto ">
            <div>
              <img className="logo" src="images/logo.png" alt=""></img>
            </div>
            <div className="row-sm level text">
              <div className="row-sm level namestyle">Choose your level</div>
              <div className="row-sm ">
                <div>
                  <label className="btnstyle">
                    <input
                      type="radio"
                      name="level"
                      defaultChecked="checked"
                      id="beginner"
                      className="level"
                    />{' '}
                    <span className="checkmark">
                      {' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beginner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </label>

                  <label className="btnstyle ">
                    <input
                      type="radio"
                      name="level"
                      id="intermediate"
                      className="level  "
                    />{' '}
                    <span className="checkmark">
                      &nbsp;&nbsp;Intermediate&nbsp;&nbsp;
                    </span>
                  </label>
                  <label className="btnstyle ">
                    <input name="level" id="intermediate" className="level  " />{' '}
                  </label>
                </div>
              </div>
            </div>
            <div className="row-sm level text ">
              <div className="row-sm level namestyle">
                Choose the session length
              </div>
              <div className="row-sm ">
                <div>
                  <label className="btnstyle">
                    <input
                      type="radio"
                      name="time"
                      id="twenty"
                      className="time"
                    />{' '}
                    <span className="checkmark">
                      {' '}
                      &nbsp;&nbsp;24 minutes&nbsp;&nbsp;
                    </span>
                  </label>

                  <label className="btnstyle ">
                    <input
                      type="radio"
                      name="time"
                      id="forty"
                      className="time"
                    />{' '}
                    <span className="checkmark">
                      &nbsp;&nbsp;40 minutes&nbsp;&nbsp;
                    </span>
                  </label>
                  <label className="btnstyle ">
                    <input
                      type="radio"
                      name="time"
                      id="sixty"
                      className="time"
                    />{' '}
                    <span className="checkmark">
                      &nbsp;&nbsp;60 minutes&nbsp;&nbsp;
                    </span>
                  </label>
                </div>
              </div>
            </div>{' '}
            <div className="row-sm ">
              <button className="btn btn-md" onClick={() => this.handleClick()}>
                Start
              </button>
            </div>
            <div className="col  text">
              <span className="col-sm  namestyle">
                Advanced
                <span className="advanced">
                  <Link to="/Advanced">
                    <span className="btn btn-md">Create your sequence</span>
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default Home;
