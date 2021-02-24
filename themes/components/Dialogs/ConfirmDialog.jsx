import React from 'react';
import { Modal } from 'antd';
const { confirm } = Modal;

class ConfirmDialog extends React.Component {
  constructor() {
    super()
    this.state = {
    };
  }

  show(data = null) {
    let { title, content } = this.props
    title = title || "Title"
    content = content || "Content";
    this.setState({ data: data });
    confirm({
      title: title,
      content: content,
      onOk: this.onSubmit,
      onCancel: this.onCancel,
    });
  }

  onCancel = () => {
    const { onCancel } = this.props
    if (typeof onCancel === "function") {
      onCancel(this.state.data)
    }
  }

  onSubmit = async () => {
    const { onSubmit } = this.props;
    if (typeof onSubmit === "function") {
      await onSubmit(this.state.data)
    }
  }

  render() {
    return (
      <div></div>
    )

  }
}

export default ConfirmDialog;