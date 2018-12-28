import React from 'react';
import { Consumer } from '../components/Context';
import DisplayProject from '../components/DisplayProject';

class Project extends React.Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { projects } = context;
          console.log(projects);
          return (
            <React.Fragment>
              <h1>Projects</h1>
              {Object.keys(projects).map(key => (
                <DisplayProject
                  name={projects[key].projectName}
                  rate={projects[key].hourlyRate}
                  date={projects[key].deadlineDate}
                  hours={projects[key].hoursToComplete}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Project;
