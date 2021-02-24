import React from 'react'
import { Radio, Button } from 'antd';
import _ from 'lodash'
const { Group } = Radio;

class FilterCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.getChecked()
        }
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
            this.setState({
                ...this.getChecked()
            })
        }
    }

    getChecked = (checked) => {
        if(checked == undefined) checked = _.get(this.props.column, "filteredValue[0].value", undefined)
        return {
            checked: checked
        }
    }

    onChange = (e) => {
        this.setState({
            ...this.getChecked(e.target.value)
        }, () => {
                this.onSubmit()
        })
    }

    clear = () => {
        this.setState({checked:undefined}, () => {this.onSubmit()})
    }

    onSubmit = () => {
        const { column, confirm } = this.props
        let filters = [];
        if (this.state.checked != undefined) {
            filters.push({
                field: column.field,
                operator: this.props.operator || '=',
                value: this.state.checked
            })
        }
        confirm(filters)
    }
    render() {
        const { confirm, column, ...otherProps } = this.props
        return <div style={{ padding: 8 }}>
            <Group
                {...otherProps}
                ref={ref => this.refInput = ref}
                value={this.state.checked}
                onChange={this.onChange}
                options={column.options}
                style={{ width: "150px", marginBottom: 8, }}
            />
            <Button onClick={this.clear} danger >Clear</Button>
        </div>
    }
}

export default FilterCheck