import {LitElement, css, html, unsafeCSS} from 'lit'
import {customElement, query} from 'lit/decorators.js'
import styles from "./ui-shell.scss?inline"

import '@carbon/web-components/es/components/ui-shell/index.js';
import Switcher20 from '@carbon/web-components/es/icons/switcher/20.js';
import {CDSHeaderGlobalAction, CDSHeaderPanel} from "@carbon/web-components/es";

@customElement('ui-shell')
export class UIShell extends LitElement {
    static readonly styles = css`${unsafeCSS(styles)}`

    @query('#switcher-panel')
    private readonly _switcherPanel!: CDSHeaderPanel;

    @query('cds-header-global-action')
    private readonly _globalAction!: CDSHeaderGlobalAction;

    render() {
        return html`
            <header>
                <cds-header aria-label="UI Shell">
                    <cds-header-name
                            href="javascript:void 0"
                            prefix="UI"
                    >Shell
                    </cds-header-name>
                    <div class="cds--header__global">
                        <cds-header-global-action
                                button-label-active="Close switcher"
                                button-label-inactive="Open switcher"
                                tooltip-text="Open switcher"
                                panel-id="switcher-panel"
                                tooltip-alignment="right"
                                @click="${this._toggleSwitcherPanel}"
                        >${Switcher20({slot: 'icon'})}
                        </cds-header-global-action>
                    </div>
                    <cds-header-panel
                            id="switcher-panel"
                            aria-label="App switcher Panel">
                        <cds-switcher aria-label="Switcher Container">
                            <cds-switcher-item aria-label="Take me there" href="#"
                            >Take me there
                            </cds-switcher-item>
                        </cds-switcher>
                    </cds-header-panel>
                </cds-header>
            </header>

            <main class="cds--content">
                <div class="cds--grid">
                    <div class="cds--row">
                        <div class="cds--column">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>
            </main>
        `
    }

    private _toggleSwitcherPanel(): void {
        this._globalAction.active = !this._globalAction.active;
        this._switcherPanel.expanded = !this._switcherPanel.expanded
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'ui-shell': UIShell
    }
}
