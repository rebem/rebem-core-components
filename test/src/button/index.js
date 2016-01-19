import { createElement } from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '#button';

describe('button', function() {
    describe('basic', function() {
        it('exists', function() {
            expect(Button).to.exist;
        });

        it('is a component', function() {
            expect(TestUtils.isElement(Button())).to.be.true;
        });
    });

    describe('render', function() {
        beforeEach(function() {
            this.component = shallow(Button());
            this.control = this.component.find('.button__control');
        });

        describe('DOM', function() {
            it('initial', function() {
                expect(this.control).to.have.tagName('input');
                expect(this.control).to.have.attr('type', 'button');
                expect(this.component).to.be.a.block('button');
                expect(this.control).to.be.an.elem({
                    block: 'button',
                    elem: 'control'
                });
            });

            it('disabled', function() {
                this.component.setProps({ disabled: true });
                expect(this.component).to.have.mods({ disabled: true });
            });

            it('children', function() {
                this.component.setProps({
                    children: createElement('div', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(this.component.find('.test-children')).to.be.block('test-children');
            });
        });
    });
});
