import React from 'react';

class InputTest extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    componentDidMount(){
        this.a.focus();
    }

    focus() {
        // 直接使用原生 API 使 text 输入框获得焦点
        this.a.blur();
    }

    render() {
        // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
        // 实例上（比如 this.textInput）
        return (
            <div>
                <input
                    type='text'
                    ref={(b) => {
                        this.a = b;
                    }}/>
                <input
                    type='button'
                    value='Focus the text input'
                    onClick={this.focus}
                />
            </div>
        );
    }
}

export default InputTest;

