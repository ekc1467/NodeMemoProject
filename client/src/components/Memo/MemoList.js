import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2'
import "../../css/styles.css";
import "../../css/stylea.css";
import "../../js/scripts.js";
class MemoList extends Component{



    render(){
        return(
                <div>
                    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Simple Sidebar - Start Bootstrap Template</title>

    </head>
    <body>
        <div class="d-flex" id="wrapper">
   
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">메모하기</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">일반 카드 메모장</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">사진 카드 메모장</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">리스트 종이 메모장</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">카드 형태 바꾸기</a>
                </div>
            </div>
            
            <div id="page-content-wrapper">
              
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle">메모 메뉴</button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#!">Action</a>
                                        <a class="dropdown-item" href="#!">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
          
                <div class="container-fluid">
                    <h1 class="mt-4">Simple Sidebar</h1>

                    



                  
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div>

                 <div class="form-input">
                    <label>
                    

                      <textarea rows="1" required></textarea>
                      <span class="placeholder"></span>

                    </label>
                  </div>
                  
                  <div class="form-input">
                    <label>
                      <textarea rows="10" required></textarea>
                      <span class="placeholder"></span>
                    </label>
                  </div>
            </div>
        </div>
  
    </body>
                </div>
        );
    }
}

export default MemoList;