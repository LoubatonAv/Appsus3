import { AppHeader } from './js/cmps/AppHeader.jsx';
import { Home } from './js/pages/Home.jsx';
import { About } from './js/pages/About.jsx';
import { NoteIndex } from './js/apps/keep/pages/note-index.jsx';
import { MailIndex } from './js/apps/mail/pages/MailIndex.jsx';

// import { BookApp } from './pages/BookApp.jsx'
// import { BookDetails } from './pages/BookDetails.jsx'
// import { AddBook } from './pages/AddBook.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Switch>
            <Route component={NoteIndex} path='/Note' />
            <Route component={MailIndex} path='/Email' />
            <Route component={About} path='/about' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </section>
    </Router>
  );
}
