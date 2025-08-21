import React, { Component } from 'react'
import PracticeChild from './PracticeChild'

type StateTypes = {
    isShow: boolean;
};
export default class PracticeParent extends Component<object, StateTypes> {
    constructor(props: object){
        super(props)

        //Định nghĩa ra state
        this.state = {
            isShow: false,
        }
    }
  render() {
    const handleToggle = () =>{
        this.setState
        
    }
    return (
      <div>
        <h2>ParentComponent</h2>
        <button onClick={handleToggle}>Show</button>
        {
            this.state.isShow ? <PracticeChild/>:<> </>
        }
        
      </div>
    )
  }
}
