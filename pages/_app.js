import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from '../components/Context';

export default class MyApp extends App {
  state = {
    projects: {},
  };

  addProject = project => {
    const projects = { ...this.state.projects };
    projects[`project${Date.now()}`] = project;
    this.setState({ projects });
  };

  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Provider
          value={{
            projects: this.state.projects,
            actions: {
              addProject: this.addProject,
            },
          }}
        >
          <Component />
        </Provider>
      </Container>
    );
  }
}
