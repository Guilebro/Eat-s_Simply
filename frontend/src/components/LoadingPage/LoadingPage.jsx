import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loadingPage">
      <div className="loadingPageContainer">
        <div className="loadingTitle">
          <p className="loadingSpan">EAT'S SIMPLY</p>
        </div>
        <div className="loadingLine" />
        <div className="loadingLine" id="secondLoadingLine" />
      </div>
    </div>
  );
}

export default LoadingPage;
