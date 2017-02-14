import React, {Component} from 'react';
import './App.css';

import GitHubCorner from './Components/GitHubCorner';

import solver from './solver';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
        }
    }

    handleChange(e) {
        const value = Number(e.target.value);
        const currentInput = e.target.id.slice(-2);
        const solveButton = document.querySelector('#solve-button');


        function focusNext(currentInputId) {


            let a = Number(currentInputId.slice(0, 1));
            let b = Number(currentInputId.slice(1));


            if (a === 8 && b === 8) {
                solveButton.focus();
            } else if (b < 8) {
                b++;

                document.querySelector('#square' + a + b).focus();
            } else if (b === 8 && a < 8) {
                b = 0;
                a++;
                document.querySelector('#square' + a + b).focus();
            }
        }


        if (e.target.value) {
            if ([1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(value) >= 0) {
                e.target.classList.add('filled-correct');
                e.target.classList.remove('filled-incorrect');


                focusNext(currentInput);

            } else {
                e.target.classList.remove('filled-correct');
                e.target.value = '';
            }
        } else {
            e.target.classList.remove('filled-correct');
        }
    }


    render() {
        return (
            <div className="App container sudoku-container">
                <GitHubCorner/>
                <h1 className="section-heading">Sudoku Solver</h1>
                <h4 id="solveTime" className="solveTime-hidden">I've got 99 proplems but this text ain't one! Yaaaaaay
                    Cee!</h4>
                <div className="col-md-12">
                    <table className="sudoku-table">
                        <tbody>
                        <tr>
                            <td>
                                <input className="form-control" id='square00' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square01' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square02' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square03' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square04' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square05' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square06' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square07' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square08' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square10' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square11' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square12' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square13' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square14' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square15' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square16' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square17' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square18' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square20' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square21' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square22' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square23' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square24' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square25' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square26' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square27' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square28' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square30' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square31' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square32' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square33' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square34' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square35' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square36' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square37' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square38' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square40' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square41' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square42' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square43' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square44' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square45' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square46' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square47' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square48' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square50' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square51' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square52' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square53' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square54' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square55' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square56' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square57' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square58' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square60' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square61' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square62' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square63' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square64' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square65' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square66' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square67' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square68' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square70' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square71' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square72' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square73' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square74' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square75' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square76' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square77' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square78' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="form-control" id='square80' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square81' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square82' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square83' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square84' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square85' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square86' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square87' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                            <td>
                                <input className="form-control" id='square88' type="text" size="1"
                                       autoComplete='off' maxLength='1'
                                       onChange={this.handleChange}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <hr/>

                    <button id="solve-button" className="btn btn-default" onClick={solver}>Solve
                    </button>


                    <div className="row">
                        <div className="col-xs-12">
                            <p className="text-center invisible"></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
