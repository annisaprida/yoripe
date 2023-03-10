import React,{ Component } from "react"
import "../style/toast.scss"

class Toast extends Component {

  render(){
    if(!this.props.isVisible){
        return null
    };
    return (
        <div className={`toast ${this.props.isVisible ? "show" : ""}`}>
            <div className="toast__slot" dangerouslySetInnerHTML={{ __html: this.props.slot }}></div>
        </div>
    )
  }
  
}

export default Toast