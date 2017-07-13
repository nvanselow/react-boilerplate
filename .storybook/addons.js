import { configure, setAddon } from '@storybook/react';
// import "@kadira/storybook/addons";
import 'storybook-addon-jsx/register';
import JSXAddon from 'storybook-addon-jsx';
import '@storybook/addon-knobs/register';

setAddon(JSXAddon);
