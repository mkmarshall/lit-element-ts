/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, customElement, css, property} from 'lit-element';
import {ComponentDefinition, FormComponent, FormDocument, FormTemplate, SharedConstants} from '@formbird/types';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('sc-simple-label')
export class SimpleLabelElement extends LitElement implements FormComponent {
  @property() document: FormDocument;
  @property() fieldValue: any;
  @property() template: FormTemplate;
  @property() fieldName: string;
  @property() formParameters: any;
  @property() key: number;
  @property() message: string;
  @property() componentDefinition: ComponentDefinition;

  static styles = css``;

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like 
     * encapsulated CSS and slots are unavailable.
     */
      return this;
  }

  render() {
    return html`
        <div><h4><b>${this.componentDefinition.label}</b></h4></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-simple-label': SimpleLabelElement;
  }
}
