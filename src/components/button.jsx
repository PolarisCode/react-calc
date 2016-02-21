var React = require('react');

var button = React.createClass({
    click: function(){
      alert('clicked!');
    },
    render: function () {

        var btnStyle = "form-control col-md-12 btn " +
            (this.props.style ?
                this.props.style : "btn btn-primary");

        var formGroup ="form-group " + (this.props.width ? this.props.width: "");

        return (
            <div className={formGroup}>
                <button className={btnStyle} onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        );
    }
});

module.exports = button;
