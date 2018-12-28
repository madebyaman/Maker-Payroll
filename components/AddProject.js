import React from 'react';
import { Consumer } from './Context';

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.rateRef = React.createRef();
    this.dateRef = React.createRef();
    this.hourRef = React.createRef();
  }

  render() {
    return (
      <Consumer>
        {context => {
          const createProject = e => {
            e.preventDefault();
            const project = {
              projectName: this.nameRef.current.value,
              hourlyRate: this.rateRef.current.value,
              deadlineDate: this.dateRef.current.value,
              hoursToComplete: this.hourRef.current.value,
            };
            context.actions.addProject(project);
            e.currentTarget.reset();
          };

          return (
            <form action="/" onSubmit={createProject}>
              <div>
                <label htmlFor="projectName">projectName</label>
                <input
                  type="text"
                  name="projectName"
                  ref={this.nameRef}
                  id="projectName"
                />
              </div>

              <div>
                <label htmlFor="hourlyRate">hourlyRate</label>
                <input
                  type="number"
                  name="hourlyRate"
                  ref={this.rateRef}
                  id="hourlyRate"
                />
              </div>

              <div>
                <label htmlFor="deadlineDate">deadlineDate</label>
                <input
                  type="date"
                  name="deadlineDate"
                  ref={this.dateRef}
                  id="deadlineDate"
                />
              </div>

              <div>
                <label htmlFor="hoursToComplete">hoursToComplete</label>
                <input
                  type="number"
                  name="hoursToComplete"
                  ref={this.hourRef}
                  id="hoursToComplete"
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddProject;
