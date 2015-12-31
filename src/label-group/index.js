import { Component, PropTypes } from '@yummies/yummies';

export default class extends Component {
    static displayName = 'core: label-group';
    static propTypes = {
        controlPosition: PropTypes.oneOf([
            'left',
            'right'
        ]),
        labelText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    };
    static defaultProps = {
        controlPosition: 'right'
    };

    _renderLabel() {
        return {
            elem: 'label',
            props: {
                key: 'label'
            },
            content: this.props.labelText
        };
    }

    _renderControl() {
        return {
            elem: 'control',
            props: {
                key: 'control'
            },
            content: this.props.children
        };
    }

    render() {
        return {
            block: 'label-group',
            mods: {
                'control-position': this.props.controlPosition
            },
            tag: 'label',
            content: this.props.controlPosition === 'right' ?
                [
                    this._renderLabel(),
                    this._renderControl()
                ] :
                [
                    this._renderControl(),
                    this._renderLabel()
                ]
        };
    }
}
