import React from 'react';
import Link from 'next/link';
import AddProject from '../components/AddProject';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Project</h1>
        <AddProject />
        <Link href="/project">
          <a>View Projects</a>
        </Link>
      </div>
    );
  }
}

export default Index;
