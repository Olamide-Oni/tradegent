import { Section } from './components/Section';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Stats } from './components/Stats';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white">
      <Section className="bg-gradient-to-r from-dark to-secondary/20">
        <Hero />
      </Section>

      <Section className="bg-dark">
        <Problems />
      </Section>

      <Section className="bg-gradient-to-l from-dark to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Value Proposition 💎
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Tradegent revolutionizes Solana trading by combining lightning-fast execution ⚡ 
            with AI-powered decision making 🤖, eliminating emotional bias and minimizing 
            slippage through advanced algorithms 🎯
          </p>
        </div>
      </Section>

      <Section className="bg-dark">
        <div className="max-w-6xl mx-auto w-full">
          <Stats />
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-dark to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Edge 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark/50 p-8 rounded-2xl backdrop-blur-lg border border-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Competitive Advantage 💪</h3>
              <ul className="space-y-4">
                <li>⚡ Fastest execution speed on Solana</li>
                <li>🤖 Advanced AI decision making</li>
                <li>💬 User-friendly Telegram interface</li>
                <li>🔒 Institutional-grade security</li>
              </ul>
            </div>
            <div className="bg-dark/50 p-8 rounded-2xl backdrop-blur-lg border border-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Traction 📈</h3>
              <ul className="space-y-4">
                <li>👥 10,000+ Beta Users</li>
                <li>💰 $50M+ Trading Volume</li>
                <li>✅ 99.9% Execution Rate</li>
                <li>📈 45% Monthly Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;