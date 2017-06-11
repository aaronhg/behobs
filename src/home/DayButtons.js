import React from 'react'
import PropTypes from 'prop-types'

class DayButtons extends React.Component {
    onSelectDay(day) {
        this.props.onSelectDay(day)
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
    render() {
        let { date } = this.props
        let dayrange = [-4, -3, -2, -1, 0]
        return (<div className="button-group" style={this.props.rootStyles}>
            {dayrange.map((day) => {
                return (<a className="button" key={day} value={day} onClick={() => this.onSelectDay(day)} >{day}</a>)
            })}
        </div>)
    }
}
DayButtons.propTypes = {
    date: PropTypes.number,
    onSelectDay: PropTypes.func,
}
export default DayButtons;