import { TagsEditorContainer } from './TagsEditorContainer';
import * as React from 'react';
import { render } from 'react-dom';
import { init, FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import './index.css';

export const TagsEditor = TagsEditorContainer;

init((sdk: FieldExtensionSDK) => {
  sdk.window.startAutoResizer();
  render(<TagsEditor sdk={sdk as FieldExtensionSDK} />, document.getElementById('root'));
});
