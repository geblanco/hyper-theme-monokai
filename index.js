'use strict';
const foregroundColor = '#EEEEEC'
const backgroundColor = '#2E3436'
const red = '#EF2929'
const green = '#8AE234'
const yellow = '#FCE94F'
const blue = '#729FCF'
const magenta = '#AD7FA8'
const cyan = '#34E2E2'

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: '#222430',
  cursorColor: '#97979b',
  cursorAccentColor: backgroundColor,
  selectionColor: 'rgba(151, 151, 155, 0.2)',
  colors: {
    black: backgroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white: '#D3D7CF',
    lightBlack: '#555753',
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: foregroundColor
  },
  css: `
    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    /* Add a highlight line below the active tab */
    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: rgba(255, 106, 193, 0.4);
      transform: scaleX(0);
      will-change: transform;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }

    /* Allow custom css / overrides */
    ${config.css}
  `
})
