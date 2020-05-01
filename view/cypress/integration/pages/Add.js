/// <reference types="cypress" />
import { mount } from 'cypress-react-unit-test';
import React from 'react';

import Add from '../../../src/pages/Add';

describe('Test for the add page', () => {
  let onSubmitSpy;
  describe('normal scenario', () => {
    beforeEach(() => {
      onSubmitSpy = cy.spy();
      mount(<Add onSubmit={onSubmitSpy} />);
    });
    it('shuould have a description and a date', () => {
      expect(onSubmitSpy).to.have.been.calledWith();
    });
  });
});
