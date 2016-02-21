var React = require('react');

var NumberField = React.createClass({
    getInitialState: function () {
        return {value: ""}
    },
    onChange: function (e) {

        if (isNaN(e.target.value)) {
            return false;
        }

        this.setState({value: e.target.value});

    },
    render: function () {

        var style = "form-group " +
            (this.props.style ? this.props.style : "");


        return (
            <div className={style}>
                <input type="text"
                       className="form-control"
                       onChange={this.onChange}
                       value={this.state.value}
                       placeholder={this.props.placeholder}/>
            </div>
        );
    }
});

module.exports = NumberField;