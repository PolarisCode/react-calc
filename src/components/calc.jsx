var React = require('react');
var NumberField = require('./numberField.jsx');
var Button = require('./button.jsx');

var Calc = React.createClass({
    add: function (e) {
        this.refs.result.setState({value: (parseInt(this.refs.Num1.state.value) + parseInt(this.refs.Num2.state.value))});
    },
    subtract: function () {
        this.refs.result.setState({value: (parseInt(this.refs.Num1.state.value) - parseInt(this.refs.Num2.state.value))});
    },
    divide: function () {
        var num2 = parseInt(this.refs.Num2.state.value);

        if (num2 === 0) {
            alert('Dividing by zero prohibited!!!');
            this.refs.result.setState({value:""})
        }

        this.refs.result.setState({value: (parseInt(this.refs.Num1.state.value)/num2)});
    },
    multiply: function () {
        this.refs.result.setState({value: (parseInt(this.refs.Num1.state.value) * parseInt(this.refs.Num2.state.value))});
    },
    clear: function(){
        this.refs.Num1.setState({value:""});
        this.refs.Num2.setState({value:""});
        this.refs.result.setState({value:""});
    },
    render: function () {
        return (
            <div className="row" style={{marginTop:50}}>
                <div className="panel panel-default col-md-8 col-md-offset-2">
                    <div className="panel-body">
                        <div className="row">
                            <NumberField style="col-md-6" placeholder="Number 1" ref="Num1"/>
                            <NumberField style="col-md-6" placeholder="Number 2" ref="Num2"/>
                        </div>
                        <div className="row">
                            <Button width="col-md-3" name="+ Add" onClick={this.add}/>
                            <Button width="col-md-3" name="- Subtract" onClick={this.subtract}/>
                            <Button width="col-md-3" name="/Divide" onClick={this.divide}/>
                            <Button width="col-md-3" name="*Multiply" onClick={this.multiply}/>
                        </div>
                        <div className="row">
                            <NumberField style="col-md-9" placeholder="Result" ref="result"/>
                            <Button width="col-md-3" name="Clear" style="btn-danger" onClick={this.clear}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Calc;
