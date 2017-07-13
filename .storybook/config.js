import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const req = require.context('../app/components', true, /\.stories\.js$/);

function loadStories() {
    // Loads stories in the stories directory
    require('../stories');

    // Loads any .stories file that is hosted with a component
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
