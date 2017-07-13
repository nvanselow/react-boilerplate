import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Input from '../input';

const stories = storiesOf('Input');
stories.addDecorator(withKnobs);

stories
    .add('with value', () => <Input value="test" />)
    .addWithInfo(
        'simple usage',
  <div>
    <h2>Input component</h2>
    <p>This is an example component.</p>
  </div>,
        () => <Input value={text('Value', 'test')} />
    );
