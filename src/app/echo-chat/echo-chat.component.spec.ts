/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EchoChatComponent } from './echo-chat.component';

describe('Component: EchoChat', () => {
  it('should create an instance', () => {
    let component = new EchoChatComponent();
    expect(component).toBeTruthy();
  });
});
