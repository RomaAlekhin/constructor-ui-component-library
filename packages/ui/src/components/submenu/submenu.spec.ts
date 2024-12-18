import type { AcvSubmenuProps } from './submenu';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Submenu from './submenu.vue';

describe('test Submenu component', () => {
  it('default props', () => {
    const wrapper = mount(Submenu);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Submenu, {
      props: {
        title: 'test',
      } as AcvSubmenuProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "description": undefined,
        "title": "test",
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Submenu);

    expect(wrapper.html()).toMatchInlineSnapshot(`"<div data-v-54c56904="" class="acv-submenu"></div>"`);
  });
});
