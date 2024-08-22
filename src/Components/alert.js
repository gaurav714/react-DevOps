import React from "react";
import Alert from "react-bootstrap/Alert";
export default function BootstrapAlert(props) {
  if (props.Alert != null) {
    return (
      <Alert variant={props.Alert.type}>
        <Alert.Heading> You got an alert!</Alert.Heading>
        <p>{props.Alert.message}</p>
      </Alert>
    );
  }
}
