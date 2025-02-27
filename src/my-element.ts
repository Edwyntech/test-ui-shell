import {LitElement, css, html, unsafeCSS} from 'lit'
import {customElement, query} from 'lit/decorators.js'
import styles from "./my-element.scss?inline"

import '@carbon/web-components/es/components/ui-shell/index.js';
import Switcher20 from '@carbon/web-components/es/icons/switcher/20.js';
import {CDSHeaderGlobalAction, CDSHeaderPanel} from "@carbon/web-components/es";

@customElement('my-element')
export class MyElement extends LitElement {
    static readonly styles = css`${unsafeCSS(styles)}`

    @query('#switcher-panel')
    private readonly _switcherPanel!: CDSHeaderPanel;

    @query('cds-header-global-action')
    private readonly _globalAction!: CDSHeaderGlobalAction;

    render() {
        return html`
            <cds-header aria-label="Blodi header">
                <cds-header-name
                        href="javascript:void 0"
                        prefix="Blodi"
                >Editor
                </cds-header-name>

                <div class="cds--header__global">
                    <cds-header-global-action
                            button-label-active="Close switcher"
                            button-label-inactive="Open switcher"
                            tooltip-text="Open switcher"
                            panel-id="switcher-panel"
                            tooltip-alignment="right"
                            @click="${() => {
                                this._globalAction.active = !this._globalAction.active;
                                this._switcherPanel.expanded = !this._switcherPanel.expanded
                            }}"
                    >${Switcher20({slot: 'icon'})}
                    </cds-header-global-action>
                </div>
                <cds-header-panel
                        id="switcher-panel"
                        aria-label="App switcher Panel"
                >App switcher Panel
                </cds-header-panel>
            </cds-header>
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement
    }
}
