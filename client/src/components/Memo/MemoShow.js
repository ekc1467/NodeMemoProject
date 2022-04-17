import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2'
import {Button, Jumbotron} from 'react-bootstrap';

class MemoList extends Component {


    




    render() {
        return (
            <> < head > <meta charset="utf-8"/>
        </head>

        <body>
            <Jumbotron>
                <h1>모두의 메모장</h1>
                <p>
                여러분들의 일주일 간의 메모를 볼 수 있어요! 매주 월요일 00:00시 초기화가 됩니다!
                </p>
                <p>
                    <Button variant="primary">메모하기</Button>
                </p>
            </Jumbotron>

            <div class="row">

                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make
                                up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>

        </body>
    </>
        );
    }
}

export default MemoList;