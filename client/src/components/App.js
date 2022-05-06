import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Start from './Start';
import Check from './Check';
import MemoList from './Memo/MemoList';
import MemoShow from './Memo/MemoShow';



class App extends Component{
    render (){
        return(
        <div className = "App">
            <Route exact path ='/' component = {Start}/>
            <Route path ='/MemoList' component = {MemoList}/>
            <Route path ='/MemoShow' component = {MemoShow}/>
        </div>
        );
    }
}

export default App;