import React from 'react';
import Tabs from './Components/Tab/Tab';
import { Button } from 'neokred-ui';
import 'neokred-ui/dist/styles.css'


const App = () => {
  const handleTabChange = (tab: string) => {
    console.log('Selected Tab:', tab);
  };

  return (
    <div>
      <Tabs tabs={['Verify', 'Pay', 'Consent']} onTabChange={handleTabChange} />
    <Button label="button" size='large'/>
    </div>
  );
};

export default App;
