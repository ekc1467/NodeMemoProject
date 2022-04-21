import Axios from 'axios';
import React, {Component} from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import {Link} from 'react-router-dom'

let result = [];
class Check extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseSwtoolList: '',
            responseSwtoolList2: '',
            append_SwtoolList: [],
        }
    }
    
    f1 = () => {
        let s1;
        let s2;
        let s3;
        let s4;
        Axios
            .get('/t1')
            .then(response => {
                console.log(response.data); 
                console.log(response.data.factorA);
                console.log(response.data.factorB);
                
                s1 = document.getElementById("span1");
                s2 = document.getElementById("span2");
             
                s1.textContent = response.data.factorA;
                s2.textContent = response.data.factorB;
                s3 = response.data.factorA;
                s4 = response.data.factorB;

                this.setState({ responseSwtoolList: s3 });
                this.setState({ responseSwtoolList2: s4 });
            });
         
            
    }
   
    f2 = () => {
        
        

        let a = document
            .getElementById("span1")
            .textContent;
        let b = document
            .getElementById("span2")
            .textContent;

        console.log(a, b);

        // 닉네임
        let alias = document
            .getElementById("ab")
            .value;
        console.log(alias);

        // 답안
        let attempt = document
            .getElementById("bc")
            .value;
        console.log(attempt);
        let formData = {
            user: {
                alias: alias
            },
            multiplication: {
                factorA: a,
                factorB: b
            },
            resultAttempt: attempt
        };

        // user alias multiplication resultAttempt
        let temp = JSON.stringify(formData)
        console.log(JSON.stringify(formData));
        console.log(typeof temp);
        console.log("들어왔나?");
        // console.log(formData); console.log(typeof formData);
        
        console.log(formData);
        
        

      

        
        let aaa = this.state.responseSwtoolList;
        let bbb = this.state.responseSwtoolList2;
        console.log(aaa);
        console.log(bbb);
        Axios //애초에 {}형식으로 주는 걸 위에서 만들었으니..
            .post('/t2', formData)
            .then(response => {
                let s3 = document.getElementById("span3");
                console.log(typeof(response.data));
               
                s3.textContent = response.data;
                let sss = String(response.data);
               
                result.push(
                    <tr key="uniqueId1">
                    <td>{alias}</td>
                    <th>---</th>
                    <td>{this.state.responseSwtoolList}*{this.state.responseSwtoolList2}</td>
                    <td>---</td>
                    <td>{sss}</td>
                    </tr>
                )
                this.setState({ append_SwtoolList: result });  
            });
    }

    render() {
        return (
            <section className="main">
                <div className="m_login">
                    <body>
                        <h1>index</h1>
                        <a href="t1">기본 컨트롤러 확인</a><br/>
                        <button onClick={this.f1}>문제요청</button>
                        <span id="span1"></span>
                        *
                        <span id="span2"></span>
                        = ?
                        <span id="span3"></span>
                        <form id="form1" name="form1">
                            <input type="text" id="ab" name="alias" /><br/>
                            <input type="text" id="bc" name="attempt" /><br/> {/* <input type = "button" id = "cd" value = "전송" onClick={this.f2}/> */}
                            <button type="button" onClick={this.f2}>
                                전송</button>
                        </form>

                        <div>
                            <table>
                                <tr>
                                    <th>닉네임</th>
                                    <th>---</th>
                                    <th>문제</th>
                                    <th>---</th>
                                    <th>정답</th>
                                </tr>
                            </table>
                            <table id = "Resultbody">
                                {this.state.append_SwtoolList}
                            </table>
                        </div>
                    </body>
                </div>
            </section>
        );
    }
}

export default Check;