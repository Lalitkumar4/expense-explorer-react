import loadingBar from "./assets/loader.gif"
const LoadingBar = () => {
  return (
    <div>
      <img
        style={{
          width: "360px",
          height: "30px",
        }}
        src={loadingBar}
        alt="loading..."
      />
    </div>
  )
}

export default LoadingBar
