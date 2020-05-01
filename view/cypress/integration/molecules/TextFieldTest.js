/// <reference types="cypress" />
import { mount } from 'cypress-react-unit-test';
import React from 'react';

import TextField from '../../../src/molecules/TextField';

describe('Unit test of TextField ', () => {
  it('should have "label" as label', () => {
    const meta = { error: '', touched: true };
    mount(
      <TextField
        type='text'
        label='label'
        required
        meta={meta}
        cy={'cyTextField'}
      />
    );
    cy.contains('label');
  });
  it('should have "*" if requiered', () => {
    const meta = { error: '', touched: true };
    mount(
      <TextField
        type='text'
        label='test'
        required
        meta={meta}
        cy={'cyTextField'}
      />
    );
    cy.contains('*');
  });
  it('should have "(optional)" if not required', () => {
    const meta = { error: '', touched: true };
    mount(
      <TextField type='text' label='test' meta={meta} cy={'cyTextField'} />
    );
    cy.contains('(optional)');
  });

  it('should have a message under the field if invalid', () => {
    const meta = { error: 'error', touched: true };
    mount(
      <TextField type='text' label='test' meta={meta} cy={'cyTextField'} />
    );
    cy.contains('error');
  });
});
