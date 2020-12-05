import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import { data, resourcesData, priorityData } from "./data.js";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const currentDate = new Date(2020, 12, 6);
const views = ["timelineMonth"];
const groups = ["priority"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <Container>
          <Row>
            <Col style={{ width: "5%" }}> {this.renderSidebar()}</Col>
            <Col style={{ width: "80%" }}>
              <Scheduler
                timeZone="America/Los_Angeles"
                dataSource={data}
                views={views}
                defaultCurrentView="timelineMonth"
                defaultCurrentDate={currentDate}
                height={500}
                groups={groups}
                // cellDuration={60}
                // cellDuration={10}
                firstDayOfWeek={0}
                startDayHour={8}
                endDayHour={20}
              >
                <Resource
                  fieldExpr="ownerId"
                  allowMultiple={true}
                  dataSource={resourcesData}
                  label="Owner"
                  useColorAsDefault={true}
                />
                <Resource
                  fieldExpr="priority"
                  allowMultiple={false}
                  dataSource={priorityData}
                  label="Priority"
                />
              </Scheduler>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  renderSidebar() {
    return (
      <div>
        <hr />
        <h5> Employee details ({this.state.data.length})</h5>
        <hr />
        <hr />
        <ul>{this.state.data.map(renderSidebarEvent)}</ul>
      </div>
    );
  }
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <AccountCircleIcon />
      <i>{event.text}</i>&nbsp;
    </li>
  );
}

export default App;
