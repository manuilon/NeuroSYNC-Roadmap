/* @ds-bundle: {"format":4,"namespace":"NeuroSYNCDesignSystem_2985f4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EventTile","sourcePath":"components/core/EventTile.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"}],"sourceHashes":{"components/core/Button.jsx":"6e1357075ab1","components/core/Card.jsx":"a98ebcf1792d","components/core/EventTile.jsx":"a811128f5257","components/core/Logo.jsx":"07281c1c4e72"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeuroSYNCDesignSystem_2985f4 = window.NeuroSYNCDesignSystem_2985f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NeuroSYNC Button — primary / secondary / outline variants, ported 1:1 from
 * the source design system's buttons.html (colors, radius, padding, hover
 * states unchanged).
 */
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  href,
  onClick,
  children
}) {
  const base = {
    display: 'inline-block',
    fontFamily: 'var(--font-heading)',
    fontSize: size === 'small' ? 'var(--font-size-1)' : 'var(--font-size-2)',
    letterSpacing: 'var(--tracking-button)',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: 'var(--radius-button)',
    padding: size === 'small' ? 'var(--space-6) var(--space-6)' : 'var(--space-6) var(--space-4)',
    border: '2px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      base: {
        backgroundColor: 'var(--color-purple)',
        color: 'var(--color-white)'
      },
      hover: {
        backgroundColor: 'var(--color-purple-light)'
      }
    },
    secondary: {
      base: {
        backgroundColor: 'var(--color-magenta)',
        color: 'var(--color-white)'
      },
      hover: {
        filter: 'brightness(1.1)'
      }
    },
    outline: {
      base: {
        backgroundColor: 'transparent',
        color: 'var(--color-purple)',
        borderColor: 'var(--color-purple)'
      },
      hover: {
        backgroundColor: 'var(--color-neutral-pale-purple)'
      }
    }
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const style = {
    ...base,
    ...v.base,
    ...(hover && !disabled ? v.hover : {})
  };
  const Tag = href && !disabled ? 'a' : 'button';
  const extraProps = Tag === 'a' ? {
    href
  } : {
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, extraProps, {
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * NeuroSYNC Card — used for partner tiles, publication summaries, team bios.
 * Ported 1:1 from the source design system's cards.html.
 */
function Card({
  eyebrow,
  title,
  children,
  actionLabel,
  actionHref = '#'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      backgroundColor: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-4)',
      maxWidth: 320,
      fontFamily: 'var(--font-body)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-size-3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--color-purple)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-size-4)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-2)',
      color: 'var(--text-body)',
      lineHeight: 'var(--line-height-body)',
      margin: 0
    }
  }, children), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    href: actionHref
  }, actionLabel)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/EventTile.jsx
try { (() => {
/**
 * NeuroSYNC EventTile — for the events/opportunities content bucket (40% of
 * LinkedIn cadence per voice/brand-voice.md §6.2): CFP deadlines, workshops,
 * membership calls, jobs, PhD posts. Ported 1:1 from the source design
 * system's event-tiles.html.
 */
function EventTile({
  day,
  month,
  title,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      backgroundColor: 'var(--surface-subtle)',
      borderLeft: '4px solid var(--color-magenta)',
      borderRadius: 'var(--radius-tile)',
      padding: 'var(--space-4)',
      maxWidth: 480,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 64,
      fontFamily: 'var(--font-heading)',
      color: 'var(--color-white)',
      backgroundColor: 'var(--color-purple)',
      borderRadius: 'var(--radius-tile)',
      padding: 'var(--space-3) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-7)',
      lineHeight: 1
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-3)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--font-size-4)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-1)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, meta)));
}
Object.assign(__ds_scope, { EventTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EventTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NeuroSYNC Logo — renders the real brand lockup or brain-mark asset at a
 * given height. Intentional addition (not in the source component set): the
 * source design system ships logo files directly rather than a component,
 * but every UI kit / deck / doc needs a consistent way to place them.
 */
// The bundle can be loaded from any consuming page, at any directory depth,
// so plain relative asset paths ("assets/...") resolve against the *page's*
// URL, not the design system's root, and 404 for anyone but a root-level
// page. Resolve against the actual <script> tag that loaded the bundle
// (looked up by attribute at render time, not at module-eval time — bundling
// can clear document.currentScript before component code runs).
function assetBase() {
  try {
    const script = document.querySelector('script[src*="_ds_bundle.js"]');
    if (script) return new URL('.', script.src).href;
  } catch (e) {
    /* fall through to relative */
  }
  return '';
}
function sources() {
  const base = assetBase();
  return {
    lockupStacked: base + 'assets/logos/neurosync/NeuroSYNC_1.png',
    lockupStackedDivider: base + 'assets/logos/neurosync/NeuroSYNC_2.png',
    lockupHorizontal: base + 'assets/logos/neurosync/NeuroSYNC_3.png',
    mark: base + 'assets/logos/neurosync/NeuroSYNC_6.png'
  };
}
function Logo({
  variant = 'lockupHorizontal',
  height = 40,
  style,
  ...rest
}) {
  const SOURCES = sources();
  return /*#__PURE__*/React.createElement("img", _extends({
    src: SOURCES[variant] || SOURCES.lockupHorizontal,
    alt: "NeuroSYNC \u2013 UK Multidisciplinary Centre for Neuromorphic Systems and Computing",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EventTile = __ds_scope.EventTile;

__ds_ns.Logo = __ds_scope.Logo;

})();
