import React from 'react';
import { ContentPanelContext } from './context/ContentPanelContext';

const SidePanel = () => {
  return (
    <ContentPanelContext.Consumer>
      {({ closePanel, content, isPanelExpand, panelClass }) => {
        console.log({ isPanelExpand });
        return (
          <>
            <div
              className={`app-overlay ${!isPanelExpand ? 'disabled' : ''}`}
              onClick={closePanel}
            />
            <div
              className={`side-panel-container ${panelClass} ${
                isPanelExpand ? 'toggle' : ''
              }`}
            >
              {content}
            </div>
          </>
        );
      }}
    </ContentPanelContext.Consumer>
  );
};

export default SidePanel;
