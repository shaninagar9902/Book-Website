import { Home } from '../pages/Home.jsx';
import { About } from '../pages/About.jsx';
import { BookIndex } from '../pages/BookIndex.jsx';

const { useState } = React;

export function App() {

    const [page, setPage] = useState('book')

    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
            <nav className='navbar'>
                <a onClick={(e) => { e.preventDefault(); setPage('home') }} href="">Home</a>
                <a onClick={(e) => { e.preventDefault(); setPage('about') }} href="">About</a>
                <a onClick={(e) => { e.preventDefault(); setPage('book') }} href="">Books</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}