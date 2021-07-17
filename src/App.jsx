import './App.scss';
import { ContentPanelContext } from './context/ContentPanelContext';
import SidePanel from './SidePanel';

function App() {
  const handleOpenSidePanel1 = (contentPanelProps) => {
    const { setContent, closePanel } = contentPanelProps;

    setContent(
      <div>
        <h3>Hello I'm side panel 1</h3>
        <button onClick={closePanel}>close</button>
      </div>,
      true,
      ''
    );
  };

  const handleOpenSidePanel2 = (contentPanelProps) => {
    const { setContent, closePanel } = contentPanelProps;

    setContent(
      <div>
        <h3>Hello I'm side panel 2</h3>
        <button onClick={closePanel}>close</button>
      </div>,
      true,
      ''
    );
  };

  return (
    <div className="App">
      <ContentPanelContext.Consumer>
        {(contentPanelProps) => {
          console.log(contentPanelProps.isPanelExpand);
          return (
            <>
              <button
                onClick={() => {
                  handleOpenSidePanel1(contentPanelProps);
                }}
              >
                Open side panel-1
              </button>
              <button
                onClick={() => {
                  handleOpenSidePanel2(contentPanelProps);
                }}
              >
                Open side panel-2
              </button>
            </>
          );
        }}
      </ContentPanelContext.Consumer>
      <SidePanel />
    </div>
  );
}

export default App;
