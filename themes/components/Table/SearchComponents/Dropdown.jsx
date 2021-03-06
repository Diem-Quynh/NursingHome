import React from 'react'
import { Select, Input, Button } from 'antd';
import _ from 'lodash'
const { Option } = Select;
const InputGroup = Input.Group;

class FilterDropdown extends React.Component {
    state = {
        values: _.get(this.props.column,"filteredValue[0].value", [])
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
            let values = _.get(this.props.column,"filteredValue[0].value", [])
            this.setState({
                values: values
            })
        }
    }
    onChange = (values) => {
        this.setState({ values: values })
    }

    onSubmit = () => {
        const { column, confirm } = this.props
        let filters = [];
        if (this.state.values && this.state.values.length > 0) {
            filters = [{
                field: column.field,
                operator: this.props.operator || 'in',
                value: this.state.values
            }]
            /* filters = this.state.values.map(value => ({
                field: column.field,
                operator: this.props.operator || '=',
                value: value
            })) */
        }
        confirm(filters)
    }

    renderOptions() {
        if(!this.props.options) return
        return this.props.options.map(option => <Option key={option.value} value={option.value} label={option.label} >{option.label}</Option>)
    }
    render() {
        const { confirm, column, options, searchBtnText, clearBtnText, ...otherProps } = this.props
        return <div style={{ padding: 8 }}>
            <Select
                mode="multiple"
                {...otherProps}
                allowClear={true}
                autoFocus={true}
                ref={ref => this.refInput = ref}
                value={this.state.values}
                onChange={this.onChange}
                onBlur={this.onSubmit}
                optionFilterProp="label"
                style={{ width: '250px', marginBottom: 8, display: "block" }}

            >
                {this.renderOptions()}
            </Select>
        </div>
    }
}

export default FilterDropdown