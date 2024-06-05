import Header from './widgets/header';
import ImageSection from './widgets/imageSection';
import s from './App.module.scss';
import './_boilerplate.scss';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <ImageSection />
    </div>
  );
}

export default App;
