import React from 'react';
import sectionHeader from './sectionHeader';
import sectionProject from './sectionProject';
import sectionFooter from './sectionFooter';

class App extends React.Component {
    state = { langauge: 'english' };

    render() {
        return (
            <div>
              {sectionHeader}
              {sectionProject}
              {sectionFooter}
            </div>
        );
    }
}
export default App;
