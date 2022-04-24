import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2'
import {Button, Jumbotron} from 'react-bootstrap';

const MemoList = () => {

    const [inputs, setInput] = useState({responseMemoList: '', appendMemoList: ''});

    const {responseMemoList, appendMemoList} = inputs;

    useEffect(() => {
        this.callMemoListApi();
    })

    callMemoListApi = async () => {
        axios
            .post('/api/Swtool?type=list', {})
            .then(response => {
                try {
                    this.setInput({
                        ...inputs,
                        [responseMemoList]: response
                    });

                    this.setInput({
                        ...inputs,
                        [appendMemoList]: this.MemoListAppend()
                    });
                } catch (error) {
                    alert("작업 중 오류가 발생하였습니다.")
                }
            })
            .catch(error => {
                alert('작업 중 오류가 발생하였습니다.');
                return false;
            })
        }

    MemoListAppend = () => {
        let result = [];
        var MemoList = this.state.responseMemoList.data;

        for (let i = 0; i < MemoList.json.length; i++) {
            var data = MemoList.json[i]

            var date = data.reg_date
            var year = date.substr(0, 4)
            var month = date.substr(4, 2)
            var day = date.substr(6, 2)
            var reg_date = year + '.' + month + '.' + day

            result.push(
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.content}</p>
                    </div>
                </div>
            </div>
            )
        }
        return result
    }

    return (
        <> < head > <meta charset="utf-8"/>
    </head>

    <body>
        <Jumbotron>
            <h1>노트</h1>
            <p>
                {/* 여러분들의 일주일 간의 메모를 볼 수 있어요! 매주 월요일 00:00시 초기화가 됩니다! */}
                일주일 간의 메모: 매주 월요일 00:00시 초기화
            </p>
            <p>
                <Button variant="primary">Do it</Button>
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

                {this.state.MemoListAppend}
            </div>

        </div>

    </body>
</>
    );

}

export default MemoList;