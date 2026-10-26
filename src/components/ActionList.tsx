import type {ReactNode} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {Theme} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import {ActionBadge} from '@fullstackcraftllc/codevideo-react-components';
import {
  AllActionDescriptions,
  isAuthorAction,
  isCompositeAction,
  isEditorAction,
  isExternalAction,
  isFileExplorerAction,
  isMouseAction,
  isSlideAction,
  isTerminalAction,
} from '@fullstackcraftllc/codevideo-types';
import type {AllActions} from '@fullstackcraftllc/codevideo-types';

const domainGuards = {
  author: isAuthorAction,
  editor: isEditorAction,
  'file-explorer': isFileExplorerAction,
  mouse: isMouseAction,
  terminal: isTerminalAction,
  external: isExternalAction,
  slide: isSlideAction,
  composite: isCompositeAction,
};

// A top-level Radix Theme is a full-viewport root with its own typography.
// Keep only its color tokens (for the badges) and let the docs styles win.
const themeStyle = {
  minHeight: 0,
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
};

// Same offset Docusaurus gives heading anchors, so #action-name links
// don't land under the sticky navbar.
const cardStyle = {scrollMarginTop: 'calc(var(--ifm-navbar-height) + 0.5rem)'};

export default function ActionList({
  domain,
}: {
  domain: keyof typeof domainGuards;
}): ReactNode {
  const {colorMode} = useColorMode();
  // The prerendered HTML only knows the default mode, so wait for hydration
  // before handing Radix the visitor's mode.
  const isBrowser = useIsBrowser();
  const brokenLinks = useBrokenLinks();
  const isInDomain = domainGuards[domain];
  // AllActions is missing the composite names, hence the casts.
  const actions = AllActionDescriptions.filter((action) =>
    isInDomain({name: action.name as AllActions, value: ''}),
  );
  // Register each card id so links like /actions#editor-type pass the
  // build's broken-anchor check (it only knows about headings otherwise).
  actions.forEach((action) => brokenLinks.collectAnchor(action.name));

  return (
    <Theme
      accentColor="mint"
      grayColor="sage"
      hasBackground={false}
      appearance={isBrowser ? colorMode : 'inherit'}
      style={themeStyle}>
      {actions.map((action) => (
        <div
          key={action.name}
          id={action.name}
          className="card margin-bottom--md"
          style={cardStyle}>
          <div className="card__body">
            <ActionBadge actionName={action.name as AllActions} />
            <p className="margin-top--sm margin-bottom--xs">{action.description}</p>
            <p className="margin-bottom--none">
              <em>Value: {action.valueDescription}</em>
            </p>
          </div>
        </div>
      ))}
    </Theme>
  );
}
