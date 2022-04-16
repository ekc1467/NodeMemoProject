import React, {Component} from 'react';
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom'
class Start extends Component{
    render(){
        return(
                <div>
                    <h1>Start</h1>
                    <ul className="af">
                        <li><Link to={'/MemoList'}>메모 리스트</Link></li>
                        <li><Link to={'/MemoShow'}>메모 입력</Link></li>
                    </ul>
                </div>
        );
    }
}

export default Start;