import { Provider } from './provider/provider';
import { DehydratedState } from '@tanstack/react-query';
import Header from './widgets/header';
import ImageSection from './widgets/imageSection';
import s from './App.module.scss';
import './_boilerplate.scss';

function App() {
  return (
    <Provider dehydratedState={{} as DehydratedState}>
      <div className={s.appWrapper}>
        <Header />
        <ImageSection />
      </div>
    </Provider>
  );
}

export default App;
