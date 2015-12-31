import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: table';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };

    render() {
        return {
            block: 'table',
            tag: 'table',
            props: this.props,
            content: this.props.children
        };
    }
}
