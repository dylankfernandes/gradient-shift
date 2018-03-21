import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../lib/elements/Button';

storiesOf('Button', module)
  .add('Default Button', () => (
    <Button>Hello Button</Button>
  ))
  .add('With Purple Color', () => (
    <Button bgColor="purple">Hello Button</Button>
  ))