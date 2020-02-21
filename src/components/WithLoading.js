import React from "react";
import SpinnerHoc from "./SpinnerHoc";

function WithLoading(Component) {
  return function WihLoadingComponent(props) {
    if (props.isLoading) return <SpinnerHoc />;
    else return <Component />;
  };
}

export default WithLoading;
