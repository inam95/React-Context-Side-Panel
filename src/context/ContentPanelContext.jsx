import React from 'react';

const defaultContentPanelContext = {
  isPanelExpand: false,
  isPanelLocked: false,
  panelClass: '',
  content: undefined,
  setPanelLock: () => {},
  setContent: () => {},
  expandPanel: () => {},
  closePanel: () => {}
};

export const ContentPanelContext = React.createContext(
  defaultContentPanelContext
);

class ContextPanelProvider extends React.Component {
  state = {
    isPanelExpand: false,
    isPanelLocked: false,
    panelClass: ''
  };

  content = undefined;

  handleContentPanelExpand = () => {
    if (!this.content) {
      return;
    }
    this.setState({
      isPanelExpand: true
    });
  };

  handleSetContent = (content, isExpand = false, panelClass = '') => {
    this.content = content;

    this.setState({
      isPanelExpand: isExpand,
      panelClass
    });
  };

  handlePanelLock = (isPanelLocked) => {
    this.setState({
      isPanelLocked
    });
  };

  handleContentPanelClose = () => {
    const { isPanelLocked } = this.state;

    if (isPanelLocked) return;

    this.setState({
      panelClass: '',
      isPanelExpand: false
    });

    this.content = undefined;
  };

  render() {
    const { isPanelExpand, isPanelLocked, panelClass } = this.state;
    const { children } = this.props;

    const customContentPanelContext = {
      isPanelExpand,
      isPanelLocked,
      panelClass,
      content: this.content,
      setPanelLock: this.handlePanelLock,
      setContent: this.handleSetContent,
      expandPanel: this.handleContentPanelExpand,
      closePanel: this.handleContentPanelClose
    };

    return (
      <ContentPanelContext.Provider value={customContentPanelContext}>
        {children}
      </ContentPanelContext.Provider>
    );
  }
}

export default ContextPanelProvider;
