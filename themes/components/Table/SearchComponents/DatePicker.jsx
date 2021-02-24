import React from 'react'
import { DatePicker, Button } from 'antd';
import _ from 'lodash'
import moment from 'moment'
const { RangePicker } = DatePicker;

class FilterDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.getDates()
        }
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
            this.setState({
                ...this.getDates()
            })
        }
    }

    getDates = (dateStrings) => {
        if(!dateStrings) dateStrings = _.get(this.props.column, "filteredValue[0].value", [])
        if (!dateStrings) return {}
        if (!dateStrings[0]) dateStrings[0] = undefined
        if(!dateStrings[1]) dateStrings[1] = undefined
        return {
            dateStrings: dateStrings,
            dates: [
                dateStrings[0] ? moment(dateStrings[0]) : undefined,
                dateStrings[1] ? moment(dateStrings[1]) : undefined
            ]
        }
    }
    onChange = (dates, dateStrings) => {
        this.setState({
            ...this.getDates(dateStrings)
        }, () => {
                this.onSubmit()
        })
    }

    clear = () => {
        this.setState({dateStrings:''}, () => {this.onSubmit()})
    }

    onSubmit = () => {
        const { column, confirm } = this.props
        let filters = [];
        if (this.state.dateStrings && this.state.dateStrings[0] && this.state.dateStrings[1]) {
            filters.push({
                field: column.field,
                operator: this.props.operator || 'between',
                value: [
                    moment(this.state.dateStrings[0]).startOf("days").add(14,'h').toISOString(),
                    moment(this.state.dateStrings[1]).endOf("days").add(14,'h').toISOString()
                ]
            })
        }
        confirm(filters)
    }
    render() {
        const { confirm, column, ...otherProps } = this.props
        return <div style={{ padding: 8 }}>
            <RangePicker
                {...otherProps}
                allowEmpty={true, true}
                ref={ref => this.refInput = ref}
                value={this.state.dates}
                onChange={this.onChange}
                onPressEnter={this.onSubmit}
                style={{ width: "256px", marginBottom: 8, }}
            />
            <Button onClick={this.clear} danger >Clear</Button>
        </div>
    }
}

export default FilterDatePicker