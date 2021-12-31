import { AppHeader } from './js/cmps/AppHeader.jsx';
import { Home } from './js/pages/Home.jsx';
import { About } from './js/pages/About.jsx';
import { NoteApp } from './js/apps/keep/pages/note-app.jsx';
import { MailApp } from './js/apps/mail/pages/mail-app.jsx';
import { MailDetails } from './js/apps/mail/pages/MailDetails.jsx';
import { BookApp } from './js/apps/book/pages/BookApp.jsx';
import { BookDetails } from './js/apps/book/pages/BookDetails.jsx';
import { BookAdd } from './js/apps/book/pages/BookAdd.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Switch>
            <Route component={BookDetails} path='/book/:bookId' />
            <Route component={MailDetails} path='/email/:emailId' />
            <Route component={BookAdd} path='/bookAdd/' />
            <Route component={NoteApp} path='/Note' />
            <Route component={BookApp} path='/book' />
            <Route component={MailApp} path='/email' />
            <Route component={About} path='/about' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </section>
    </Router>
  );
}
