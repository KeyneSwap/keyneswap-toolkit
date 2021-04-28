declare var React: any;
declare var styled: any;
declare var styledSystem: any;
declare var get: any;
declare var noop: any;
declare var debounce: any;
declare var reactPopper: any;
declare var throttle: any;
declare var reactRouterDom: any;
declare var reactTransitionGroup: any;
declare function _interopDefaultLegacy$1(e: any): any;
declare var React__default: any;
declare var styled__default: any;
declare var get__default: any;
declare var noop__default: any;
declare var debounce__default: any;
declare var throttle__default: any;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
declare var __assign: () => any;
declare function __rest(s: any, e: any): {};
declare function __spreadArray(to: any, from: any): any;
declare function __makeTemplateObject(cooked: any, raw: any): any;
declare var getThemeValue: (path: any, fallback: any) => (theme: any) => any;
declare var rotate$1: any;
declare var spinStyle: any;
declare var Svg: any;
declare var templateObject_1$W: any, templateObject_2$o: any, templateObject_3$b: any;
declare var Icon$1A: (props: any) => any;
declare var Icon$1z: (props: any) => any;
declare var Icon$1y: (props: any) => any;
declare var Icon$1x: (props: any) => any;
declare var getColor: (_a: any) => any;
declare var getFontSize: (_a: any) => any;
declare var Text: {
    new (data?: string | undefined): Text;
    prototype: Text;
};
declare var templateObject_1$V: any;
declare var getExternalLinkProps: () => {
    target: string;
    rel: string;
};
declare var scales$7: {
    MD: string;
    SM: string;
    XS: string;
};
declare var variants$3: {
    PRIMARY: string;
    SECONDARY: string;
    TERTIARY: string;
    TEXT: string;
    DANGER: string;
    SUBTLE: string;
    SUCCESS: string;
};
declare var _a$4: any, _b$2: any;
declare var scaleVariants$1: {};
declare var styleVariants$2: {};
declare var getDisabledStyles: (_a: any) => string;
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
declare var getOpacity: (_a: any) => ".5" | "1";
declare var StyledButton: any;
declare var templateObject_1$U: any;
declare var Button: (props: any) => any;
declare var IconButton: any;
declare var templateObject_1$T: any;
declare var Icon$1w: (props: any) => any;
declare var Icon$1v: (props: any) => any;
declare var Icon$1u: (props: any) => any;
declare var Icon$1t: (props: any) => any;
declare var Icon$1s: (props: any) => any;
declare var Icon$1r: (props: any) => any;
declare var Icon$1q: (props: any) => any;
declare var Icon$1p: (props: any) => any;
declare var Icon$1o: (props: any) => any;
declare var Icon$1n: (props: any) => any;
declare var Icon$1m: (props: any) => any;
declare var Icon$1l: (props: any) => any;
declare var Icon$1k: (props: any) => any;
declare var Icon$1j: (props: any) => any;
declare var Icon$1i: (props: any) => any;
declare var Icon$1h: (props: any) => any;
declare var Icon$1g: (props: any) => any;
declare var Icon$1f: (props: any) => any;
declare var Icon$1e: (props: any) => any;
declare var Icon$1d: (props: any) => any;
declare var Icon$1c: (props: any) => any;
declare var Icon$1b: (props: any) => any;
declare var Icon$1a: (props: any) => any;
declare var Icon$19: (props: any) => any;
declare var Icon$18: (props: any) => any;
declare var Icon$17: (props: any) => any;
declare var Icon$16: (props: any) => any;
declare var Icon$15: (props: any) => any;
declare var Icon$14: (props: any) => any;
declare var Icon$13: (props: any) => any;
declare var Icon$12: (props: any) => any;
declare var Icon$11: (props: any) => any;
declare var Icon$10: (props: any) => any;
declare var Icon$$: (props: any) => any;
declare var Icon$_: (props: any) => any;
declare var Icon$Z: (props: any) => any;
declare var Icon$Y: (props: any) => any;
declare var Icon$X: (props: any) => any;
declare var Icon$W: (props: any) => any;
declare var Icon$V: (props: any) => any;
declare var Icon$U: (props: any) => any;
declare var Icon$T: (props: any) => any;
declare var Icon$S: (props: any) => any;
declare var Icon$R: (props: any) => any;
declare var Icon$Q: (props: any) => any;
declare var Icon$P: (props: any) => any;
declare var Icon$O: (props: any) => any;
declare var Icon$N: (props: any) => any;
declare var Icon$M: (props: any) => any;
declare var Icon$L: (props: any) => any;
declare var Icon$K: (props: any) => any;
declare var Icon$J: (props: any) => any;
declare var Icon$I: (props: any) => any;
declare var Icon$H: (props: any) => any;
declare var Icon$G: (props: any) => any;
declare var Icon$F: (props: any) => any;
declare var Icon$E: (props: any) => any;
declare var Icon$D: (props: any) => any;
declare var Icon$C: (props: any) => any;
declare var Icon$B: (props: any) => any;
declare var Icon$A: (props: any) => any;
declare var Icon$z: (props: any) => any;
declare var Icon$y: (props: any) => any;
declare var Icon$x: (props: any) => any;
declare var Icon$w: (props: any) => any;
declare var Icon$v: (props: any) => any;
declare var Icon$u: (props: any) => any;
declare var Icon$t: (props: any) => any;
declare var Icon$s: (props: any) => any;
declare var ExpandableButton: (_a: any) => any;
declare var ExpandableLabel: (_a: any) => any;
declare var Box: any;
declare var templateObject_1$S: any;
declare var Flex: any;
declare var templateObject_1$R: any;
declare var variants$2: {
    INFO: string;
    DANGER: string;
    SUCCESS: string;
    WARNING: string;
};
declare var getThemeColor: (_a: any) => any;
declare var getIcon: (variant: any) => (props: any) => any;
declare var IconLabel: any;
declare var withHandlerSpacing: number;
declare var Details: any;
declare var CloseHandler: any;
declare var StyledAlert: any;
declare var Alert: (_a: any) => any;
declare var templateObject_1$Q: any, templateObject_2$n: any, templateObject_3$a: any, templateObject_4$7: any;
declare var scales$6: {
    SM: string;
    MD: string;
    LG: string;
};
/**
 * Priority: Warning --> Success
 */
declare var getBoxShadow$1: (_a: any) => any;
declare var getHeight: (_a: any) => "48px" | "32px" | "40px";
declare var Input$1: any;
declare var templateObject_1$P: any;
declare var StyledBalanceInput: any;
declare var StyledInput$1: any;
declare var templateObject_1$O: any, templateObject_2$m: any;
declare var BalanceInput: (_a: any) => any;
declare var Separator: any;
declare var StyledBreadcrumbs: any;
declare var insertSeparators: (items: any, separator: any) => any;
declare var DefaultSeparator: any;
declare var Breadcrumbs: (_a: any) => any;
declare var templateObject_1$N: any, templateObject_2$l: any;
declare var getBackgroundColor: (_a: any) => any;
declare var StyledButtonMenu: any;
declare var templateObject_1$M: any;
declare var ButtonMenu$1: (_a: any) => any;
declare var InactiveButton: any;
declare var ButtonMenuItem: (_a: any) => any;
declare var templateObject_1$L: any;
/**
 * Priority: Warning --> Success --> Active
 */
declare var getBoxShadow: (_a: any) => any;
declare var StyledCard: any;
declare var templateObject_1$K: any;
declare var Card: (_a: any) => any;
declare var CardBody: any;
declare var templateObject_1$J: any;
declare var CardHeader: any;
declare var templateObject_1$I: any;
declare var CardFooter: any;
declare var templateObject_1$H: any;
declare var StyledCardRibbon: any;
declare var CardRibbon: (_a: any) => any;
declare var templateObject_1$G: any;
declare var scales$5: {
    SM: string;
    MD: string;
};
declare var getScale$3: (_a: any) => "32px" | "24px";
declare var Checkbox: any;
declare var templateObject_1$F: any;
declare var getLeft: (_a: any) => "50%" | "100%";
declare var getBottom: (_a: any) => "auto" | "100%";
declare var DropdownContent: any;
declare var Container$4: any;
declare var Dropdown: (_a: any) => any;
declare var templateObject_1$E: any, templateObject_2$k: any;
declare var bunnyFall: any;
declare var Bunny: any;
declare var FallingBunnies: (_a: any) => any;
declare var templateObject_1$D: any, templateObject_2$j: any;
declare var tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
};
declare var sizes: {
    MD: string;
    LG: string;
    XL: string;
    XXL: string;
};
declare var _a$3: any;
declare var style: {};
declare var Heading: any;
declare var templateObject_1$C: any;
declare var observerOptions: {
    root: null;
    rootMargin: string;
    threshold: number;
};
declare var Wrapper$3: any;
declare var templateObject_1$B: any;
declare var BackgroundImage: (_a: any) => any;
declare var StyledImage: any;
declare var Placeholder: any;
declare var Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement;
declare var templateObject_1$A: any, templateObject_2$i: any;
declare var GridLayout$1: any;
declare var templateObject_1$z: any;
declare var GridLayout: any;
declare var templateObject_1$y: any;
declare var StyledLink$1: any;
declare var Link: (_a: any) => any;
declare var templateObject_1$x: any;
declare var LinkExternal: (_a: any) => any;
declare var NotificationDotRoot: any;
declare var Dot: any;
declare var NotificationDot: (_a: any) => any;
declare var templateObject_1$w: any, templateObject_2$h: any;
declare var scales$4: {
    SM: string;
    MD: string;
};
declare var scaleKeyValues$1: {
    sm: {
        pancakeSize: string;
        travelDistance: string;
        toggleHeight: string;
        toggleWidth: string;
        pancakeThickness: string;
        pancakeTwoOffset: string;
        pancakeThreeOffset: string;
        butterTop: string;
        butterLeft: string;
        butterWidth: string;
        butterHeight: string;
        butterThickness: string;
        butterRadius: string;
        butterSmearOneTop: string;
        butterSmearOneLeft: string;
        butterSmearTwoTop: string;
        butterSmearTwoRight: string;
    };
    md: {
        pancakeSize: string;
        travelDistance: string;
        toggleHeight: string;
        toggleWidth: string;
        pancakeThickness: string;
        pancakeTwoOffset: string;
        pancakeThreeOffset: string;
        butterTop: string;
        butterLeft: string;
        butterWidth: string;
        butterHeight: string;
        butterThickness: string;
        butterRadius: string;
        butterSmearOneTop: string;
        butterSmearOneLeft: string;
        butterSmearTwoTop: string;
        butterSmearTwoRight: string;
    };
};
declare var getScale$2: (property: any) => (_a: any) => any;
declare var PancakeStack: any;
declare var PancakeInput: any;
declare var PancakeLabel: any;
declare var templateObject_1$v: any, templateObject_2$g: any, templateObject_3$9: any;
declare var PancakeToggle: (_a: any) => any;
declare var variants$1: {
    ROUND: string;
    FLAT: string;
};
declare var scales$3: {
    MD: string;
    SM: string;
};
declare var _a$2: any, _b$1: any;
declare var styleVariants$1: {};
declare var styleScales: {};
declare var Bar: any;
declare var StyledProgress: any;
declare var templateObject_1$u: any, templateObject_2$f: any;
declare var ProgressBunnyWrapper: any;
declare var templateObject_1$t: any;
declare var stepGuard: (step: any) => any;
declare var Progress: (_a: any) => any;
declare var scales$2: {
    SM: string;
    MD: string;
};
declare var getScale$1: (_a: any) => "32px" | "24px";
declare var getCheckedScale: (_a: any) => "20px" | "12px";
declare var Radio: any;
declare var templateObject_1$s: any;
declare var bunnyHeadMain: string;
declare var bunnyHeadMax: string;
declare var bunnyButt: string;
declare var getCursorStyle: (_a: any) => "not-allowed" | "cursor";
declare var getBaseThumbStyles: (_a: any) => string;
declare var SliderLabelContainer: any;
declare var SliderLabel: any;
declare var BunnyButt: any;
declare var BunnySlider: any;
declare var StyledInput: any;
declare var BarBackground: any;
declare var BarProgress: any;
declare var templateObject_1$r: any, templateObject_2$e: any, templateObject_3$8: any, templateObject_4$6: any, templateObject_5$4: any, templateObject_6$1: any, templateObject_7$1: any;
declare var Slider: (_a: any) => any;
declare var animation: {
    WAVES: string;
    PULSE: string;
};
declare var variant: {
    RECT: string;
    CIRCLE: string;
};
declare var waves: any;
declare var pulse: any;
declare var Root: any;
declare var Pulse: any;
declare var Waves: any;
declare var Skeleton: (_a: any) => any;
declare var templateObject_1$q: any, templateObject_2$d: any, templateObject_3$7: any, templateObject_4$5: any, templateObject_5$3: any;
declare var Icon$r: (props: any) => any;
declare var Icon$q: (props: any) => any;
declare var rotate: any;
declare var float: any;
declare var Container$3: any;
declare var RotatingPancakeIcon: any;
declare var FloatingPanIcon: any;
declare var Spinner: (_a: any) => any;
declare var templateObject_1$p: any, templateObject_2$c: any, templateObject_3$6: any, templateObject_4$4: any, templateObject_5$2: any;
declare var StepperWrapper: any;
declare var Stepper: (_a: any) => any;
declare var templateObject_1$o: any;
declare var getStepNumberFontColor: (_a: any) => any;
declare var StyledStep: any;
declare var Connector: any;
declare var ChildrenWrapper: any;
declare var ChildrenLeftWrapper: any;
declare var ChildrenRightWrapper: any;
declare var Wrapper$2: any;
declare var StepNumber: any;
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
declare var Step: (_a: any) => any;
declare var templateObject_1$n: any, templateObject_2$b: any, templateObject_3$5: any, templateObject_4$3: any, templateObject_5$1: any, templateObject_6: any, templateObject_7: any;
declare var byTextAscending: (getTextProperty: any) => (objectA: any, objectB: any) => 0 | 1 | -1;
declare var byTextDescending: (getTextProperty: any) => (objectA: any, objectB: any) => 0 | 1 | -1;
declare var sortByColumn: (data: any, sortColumn: any, columns: any) => any;
declare var getPaginatedData: (rows: any, perPage: any, page: any) => any;
declare var getColumnsByName: (columns: any) => {};
declare var createReducer: () => (state: any, action: any) => any;
declare var sortDataInOrder: (data: any, columns: any) => any;
declare var makeRender: (value: any, render: any, row: any) => () => any;
declare var makeHeaderRender: (label: any, render: any) => () => any;
declare var useTable: (columns: any, data: any, options: any) => {
    headers: any;
    rows: any;
    originalRows: any;
    selectedRows: any;
    dispatch: any;
    selectRow: (rowId: any) => any;
    toggleAll: () => any;
    toggleSort: (columnName: any, isAscOverride: any) => any;
    setSearchString: (searchString: any) => any;
    pagination: any;
    toggleAllState: any;
};
declare var Wrapper$1: any;
declare var Inner$1: any;
declare var ButtonMenu: (_a: any) => any;
declare var templateObject_1$m: any, templateObject_2$a: any;
declare var StyledTab: any;
declare var templateObject_1$l: any;
declare var Tab: (_a: any) => any;
declare var variants: {
    PRIMARY: string;
    SECONDARY: string;
    SUCCESS: string;
    TEXTDISABLED: string;
    TEXTSUBTLE: string;
    BINANCE: string;
    FAILURE: string;
};
declare var scales$1: {
    MD: string;
    SM: string;
};
declare var _a$1: any, _b: any;
declare var scaleVariants: {};
declare var styleVariants: {};
declare var getOutlineStyles: (_a: any) => string;
declare var StyledTag: any;
declare var templateObject_1$k: any;
declare var Tag: (_a: any) => any;
declare var scaleKeyValues: {
    sm: {
        handleHeight: string;
        handleWidth: string;
        handleLeft: string;
        handleTop: string;
        checkedLeft: string;
        toggleHeight: string;
        toggleWidth: string;
    };
    md: {
        handleHeight: string;
        handleWidth: string;
        handleLeft: string;
        handleTop: string;
        checkedLeft: string;
        toggleHeight: string;
        toggleWidth: string;
    };
};
declare var getScale: (property: any) => (_a: any) => any;
declare var Handle: any;
declare var Input: any;
declare var StyledToggle: any;
declare var templateObject_1$j: any, templateObject_2$9: any, templateObject_3$4: any;
declare var scales: {
    SM: string;
    MD: string;
};
declare var Toggle: (_a: any) => any;
declare var breakpointMap: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare var breakpoints: string[];
declare var mediaQueries$1: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    nav: string;
};
declare var shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    inset: string;
};
declare var spacing: number[];
declare var radii: {
    small: string;
    default: string;
    card: string;
    circle: string;
};
declare var zIndices: {
    dropdown: number;
    modal: number;
};
declare var base: {
    siteWidth: number;
    breakpoints: string[];
    mediaQueries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        nav: string;
    };
    spacing: number[];
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        inset: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
declare var mediaQueries: {};
declare var getKey: (size: any) => string;
declare var useMatchBreakpoints: () => any;
declare var defaultParticleOptions: {
    size: number;
    distance: number;
};
declare var createParticle: (x: any, y: any, imgSrc: any, options: any) => void;
declare var defaultOptions: {
    numberOfParticles: number;
    debounceDuration: number;
    particleOptions: {};
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
declare var useParticleBurst: (options: any) => {
    initialize: any;
    teardown: any;
};
declare var useKonamiCheatCode: (matchedCodeHandler: any) => void;
declare var Arrow: any;
declare var StyledTooltip: any;
declare var templateObject_1$i: any, templateObject_2$8: any;
declare function isTouchDevice(): boolean;
declare var useTooltip: (content: any, placement: any, trigger: any, arrowPadding: any, tooltipPadding: any, tooltipOffset: any) => {
    targetRef: any;
    tooltip: any;
    tooltipVisible: any;
};
declare var ModalHeader: any;
declare var ModalTitle: any;
declare var ModalBody: any;
declare var ModalCloseButton: (_a: any) => any;
declare var ModalBackButton: (_a: any) => any;
declare var ModalContainer: any;
declare var templateObject_1$h: any, templateObject_2$7: any, templateObject_3$3: any, templateObject_4$2: any;
declare var Modal: (_a: any) => any;
declare var Overlay: any;
declare var templateObject_1$g: any;
declare var ModalWrapper: any;
declare var Context: any;
declare var ModalProvider: (_a: any) => any;
declare var templateObject_1$f: any;
declare var useModal: (modal: any, closeOnOverlayClick: any) => any[];
declare var Icon$p: (props: any) => any;
declare var Icon$o: (props: any) => any;
declare var Icon$n: (props: any) => any;
declare var Icon$m: (props: any) => any;
declare var Icon$l: (props: any) => any;
declare var Icon$k: (props: any) => any;
declare var Icon$j: (props: any) => any;
declare var Icon$i: (props: any) => any;
declare var Logo$2: (_a: any) => any;
declare var LogoWithText: any;
declare var Icon$h: (props: any) => any;
declare var Icon$g: (props: any) => any;
declare var Icon$f: (props: any) => any;
declare var Icon$e: (props: any) => any;
declare var Icon$d: (props: any) => any;
declare var Icon$c: (props: any) => any;
declare var Icon$b: (props: any) => any;
declare var Icon$a: (props: any) => any;
declare var Icon$9: (props: any) => any;
declare var Icon$8: (props: any) => any;
declare var Icon$7: (props: any) => any;
declare var IconModule: Readonly<{
    __proto__: null;
    FarmIcon: (props: any) => any;
    GroupsIcon: (props: any) => any;
    HamburgerIcon: (props: any) => any;
    HamburgerCloseIcon: (props: any) => any;
    HomeIcon: (props: any) => any;
    IfoIcon: (props: any) => any;
    InfoIcon: (props: any) => any;
    LanguageIcon: (props: any) => any;
    LogoIcon: any;
    MoonIcon: (props: any) => any;
    MoreIcon: (props: any) => any;
    NftIcon: (props: any) => any;
    PoolIcon: (props: any) => any;
    PredictionsIcon: (props: any) => any;
    SunIcon: (props: any) => any;
    TeamBattleIcon: (props: any) => any;
    TelegramIcon: (props: any) => any;
    TicketIcon: (props: any) => any;
    TradeIcon: (props: any) => any;
    TwitterIcon: (props: any) => any;
}>;
declare var MenuButton: any;
declare var templateObject_1$e: any;
declare var blink: any;
declare var StyledLink: any;
declare var Logo: (_a: any) => any;
declare var Logo$1: any;
declare var templateObject_1$d: any, templateObject_2$6: any;
declare var status: string;
declare var links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    status?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    status?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    status: any;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    status: any;
    items: ({
        label: string;
        href: string;
        status: any;
    } | {
        label: string;
        href: string;
        status?: undefined;
    })[];
    calloutClass: string;
    href?: undefined;
})[];
declare var socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
declare var MENU_HEIGHT: number;
declare var MENU_ENTRY_HEIGHT: number;
declare var SIDEBAR_WIDTH_FULL: number;
declare var SIDEBAR_WIDTH_REDUCED: number;
declare var rainbowAnimation: any;
declare var LinkLabel: any;
declare var MenuEntry: any;
declare var LinkStatus: any;
declare var LinkLabelMemo: any;
declare var templateObject_1$c: any, templateObject_2$5: any, templateObject_3$2: any, templateObject_4$1: any;
declare var Container$2: any;
declare var AccordionContent: any;
declare var Accordion: (_a: any) => any;
declare var templateObject_1$b: any, templateObject_2$4: any;
declare var MenuLink: (_a: any) => any;
declare var Icons$3: Readonly<{
    __proto__: null;
    FarmIcon: (props: any) => any;
    GroupsIcon: (props: any) => any;
    HamburgerIcon: (props: any) => any;
    HamburgerCloseIcon: (props: any) => any;
    HomeIcon: (props: any) => any;
    IfoIcon: (props: any) => any;
    InfoIcon: (props: any) => any;
    LanguageIcon: (props: any) => any;
    LogoIcon: any;
    MoonIcon: (props: any) => any;
    MoreIcon: (props: any) => any;
    NftIcon: (props: any) => any;
    PoolIcon: (props: any) => any;
    PredictionsIcon: (props: any) => any;
    SunIcon: (props: any) => any;
    TeamBattleIcon: (props: any) => any;
    TelegramIcon: (props: any) => any;
    TicketIcon: (props: any) => any;
    TradeIcon: (props: any) => any;
    TwitterIcon: (props: any) => any;
}>;
declare var Container$1: any;
declare var PanelBody: (_a: any) => any;
declare var templateObject_1$a: any;
declare var PriceLink: any;
declare var CakePrice: (_a: any) => any;
declare var CakePrice$1: any;
declare var templateObject_1$9: any;
declare var Icons$2: Readonly<{
    __proto__: null;
    FarmIcon: (props: any) => any;
    GroupsIcon: (props: any) => any;
    HamburgerIcon: (props: any) => any;
    HamburgerCloseIcon: (props: any) => any;
    HomeIcon: (props: any) => any;
    IfoIcon: (props: any) => any;
    InfoIcon: (props: any) => any;
    LanguageIcon: (props: any) => any;
    LogoIcon: any;
    MoonIcon: (props: any) => any;
    MoreIcon: (props: any) => any;
    NftIcon: (props: any) => any;
    PoolIcon: (props: any) => any;
    PredictionsIcon: (props: any) => any;
    SunIcon: (props: any) => any;
    TeamBattleIcon: (props: any) => any;
    TelegramIcon: (props: any) => any;
    TicketIcon: (props: any) => any;
    TradeIcon: (props: any) => any;
    TwitterIcon: (props: any) => any;
}>;
declare var MoonIcon: (props: any) => any, SunIcon: (props: any) => any;
declare var ThemeSwitcher: (_a: any) => any;
declare var ThemeSwitcher$1: any;
declare var Icons$1: Readonly<{
    __proto__: null;
    FarmIcon: (props: any) => any;
    GroupsIcon: (props: any) => any;
    HamburgerIcon: (props: any) => any;
    HamburgerCloseIcon: (props: any) => any;
    HomeIcon: (props: any) => any;
    IfoIcon: (props: any) => any;
    InfoIcon: (props: any) => any;
    LanguageIcon: (props: any) => any;
    LogoIcon: any;
    MoonIcon: (props: any) => any;
    MoreIcon: (props: any) => any;
    NftIcon: (props: any) => any;
    PoolIcon: (props: any) => any;
    PredictionsIcon: (props: any) => any;
    SunIcon: (props: any) => any;
    TeamBattleIcon: (props: any) => any;
    TelegramIcon: (props: any) => any;
    TicketIcon: (props: any) => any;
    TradeIcon: (props: any) => any;
    TwitterIcon: (props: any) => any;
}>;
declare var SocialLinks: () => any;
declare var SocialLinks$1: any;
declare var Icons: Readonly<{
    __proto__: null;
    FarmIcon: (props: any) => any;
    GroupsIcon: (props: any) => any;
    HamburgerIcon: (props: any) => any;
    HamburgerCloseIcon: (props: any) => any;
    HomeIcon: (props: any) => any;
    IfoIcon: (props: any) => any;
    InfoIcon: (props: any) => any;
    LanguageIcon: (props: any) => any;
    LogoIcon: any;
    MoonIcon: (props: any) => any;
    MoreIcon: (props: any) => any;
    NftIcon: (props: any) => any;
    PoolIcon: (props: any) => any;
    PredictionsIcon: (props: any) => any;
    SunIcon: (props: any) => any;
    TeamBattleIcon: (props: any) => any;
    TelegramIcon: (props: any) => any;
    TicketIcon: (props: any) => any;
    TradeIcon: (props: any) => any;
    TwitterIcon: (props: any) => any;
}>;
declare var LanguageIcon: (props: any) => any;
declare var LangSelector: (_a: any) => any;
declare var LangSelector$1: any;
declare var Container: any;
declare var SettingsEntry: any;
declare var SocialEntry: any;
declare var PanelFooter: (_a: any) => any;
declare var templateObject_1$8: any, templateObject_2$3: any, templateObject_3$1: any;
declare var StyledPanel: any;
declare var Panel: (props: any) => any;
declare var templateObject_1$7: any;
declare var Icon$6: (props: any) => any;
declare var Icon$5: (props: any) => any;
declare var Icon$4: (props: any) => any;
declare var Icon$3: (props: any) => any;
declare var Icon$2: (props: any) => any;
declare var Icon$1: (props: any) => any;
declare var Icon: (props: any) => any;
declare var connectors: {
    title: string;
    icon: (props: any) => any;
    connectorId: any;
}[];
declare var connectorLocalStorageKey: string;
declare var WalletCard: (_a: any) => any;
declare var HelpLink: any;
declare var ConnectModal: (_a: any) => any;
declare var templateObject_1$6: any;
declare var StyleButton: any;
declare var Tooltip: any;
declare var CopyToClipboard: (_a: any) => any;
declare var templateObject_1$5: any, templateObject_2$2: any;
declare var AccountModal: (_a: any) => any;
declare var useWalletModal: (login: any, logout: any, account: any) => {
    onPresentConnectModal: any;
    onPresentAccountModal: any;
};
declare var UserBlock: (_a: any) => any;
declare var UserBlock$1: any;
declare var StyledAvatar: any;
declare var Pip: any;
declare var Avatar: (_a: any) => any;
declare var templateObject_1$4: any, templateObject_2$1: any;
declare var Wrapper: any;
declare var StyledNav: any;
declare var BodyWrapper: any;
declare var Inner: any;
declare var MobileOnlyOverlay: any;
declare var Menu: (_a: any) => any;
declare var templateObject_1$3: any, templateObject_2: any, templateObject_3: any, templateObject_4: any, templateObject_5: any;
declare var types: {
    SUCCESS: string;
    DANGER: string;
    WARNING: string;
    INFO: string;
};
declare var _a: any;
declare var alertTypeMap: {};
declare var StyledToast: any;
declare var Toast: (_a: any) => any;
declare var templateObject_1$2: any;
declare var ZINDEX: number;
declare var TOP_POSITION: number;
declare var StyledToastContainer: any;
declare var ToastContainer: (_a: any) => any;
declare var templateObject_1$1: any;
declare var ResetCSS: any;
declare var templateObject_1: any;
declare var baseColors: {
    failure: string;
    primary: string;
    primaryBright: string;
    primaryDark: string;
    secondary: string;
    success: string;
    warning: string;
};
declare var brandColors: {
    binance: string;
};
declare var lightColors: any;
declare var darkColors: any;
declare var light$7: {
    background: any;
};
declare var dark$7: {
    background: any;
};
declare var light$6: {
    background: any;
    boxShadow: string;
    boxShadowActive: string;
    boxShadowSuccess: string;
    boxShadowWarning: string;
    cardHeaderBackground: {
        default: any;
        blue: any;
        violet: any;
    };
    dropShadow: string;
};
declare var dark$6: {
    background: any;
    boxShadow: string;
    boxShadowActive: string;
    boxShadowSuccess: string;
    boxShadowWarning: string;
    cardHeaderBackground: {
        default: any;
        blue: any;
        violet: any;
    };
    dropShadow: string;
};
declare var light$5: {
    handleBackground: any;
    handleShadow: any;
};
declare var dark$5: {
    handleBackground: any;
    handleShadow: any;
};
declare var light$4: {
    handleBackground: any;
};
declare var dark$4: {
    handleBackground: any;
};
declare var light$3: {
    handleBackground: any;
};
declare var dark$3: {
    handleBackground: any;
};
declare var light$2: {
    background: any;
    hover: string;
};
declare var dark$2: {
    background: any;
    hover: string;
};
declare var light$1: {
    background: any;
};
declare var dark$1: {
    background: any;
};
declare var light: {
    background: any;
    text: any;
    boxShadow: string;
};
declare var dark: {
    background: any;
    text: any;
    boxShadow: string;
};
declare var darkTheme: any;
declare var lightTheme: any;
