import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">Obrigado pela Compra!</h1>
                <p className="text-gray-400">Em breve você receberá as instruções de acesso.</p>
            </div>
        </div>
    );
}

function Unavailable() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Produto Indisponível</h1>
                <p className="text-gray-400">No momento estamos sem estoque. Tente novamente mais tarde.</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="bg-[var(--bg-dark)] min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/obrigado" element={<ThankYou />} />
                    <Route path="/indisponivel" element={<Unavailable />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
