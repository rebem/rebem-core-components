import { Component, PropTypes } from 'react';
import { BEM } from '@yummies/bem';

export default class extends Component {
    static displayName = 'core: link';
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.object)
        ])
    };

    render() {
        return BEM(
            {
                ...this.props,
                block: 'link',
                tag: 'a'
            },
            this.props.children
        );
    }
}
