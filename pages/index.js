import { observer } from 'mobx-react';
import { useGlobalContext } from 'hooks';

const Home = () => {
  const rootStore = useGlobalContext();

  return <div>{rootStore.appName}</div>;
};

export default observer(Home);
