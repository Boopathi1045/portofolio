import { Link } from "react-router-dom";
import Header from "@/components/Header";
import avatar from "@/assets/avatarss.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Hero Section */}
      <div className="relative h-[85vh]">
        {/* Background - Pure black with subtle grid */}
        <div className="absolute inset-0 bg-black z-0">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Floating code snippets */}
          <div className="absolute top-32 left-[15%] font-mono text-xs text-neon-cyan/30 animate-float" style={{ animationDelay: '0s' }}>
            {'const ai = new NeuralNetwork();'}
          </div>
          <div className="absolute top-48 left-[8%] font-mono text-xs text-neon-purple/30 animate-float" style={{ animationDelay: '1s' }}>
            {'model.train(data);'}
          </div>
          <div className="absolute bottom-40 left-[20%] font-mono text-xs text-neon-cyan/20 animate-float" style={{ animationDelay: '2s' }}>
            {'await predict(input);'}
          </div>
          
          {/* Geometric shapes */}
          <div className="absolute top-40 left-[40%] w-2 h-2 bg-neon-cyan/40 rotate-45 animate-pulse" />
          <div className="absolute top-60 left-[35%] w-3 h-3 border border-neon-purple/40 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-48 left-[45%] w-1.5 h-1.5 bg-neon-pink/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-36 left-[50%] w-4 h-4 border border-neon-cyan/20 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
          
          {/* Tech lines */}
          <div className="absolute top-1/3 left-[30%] w-20 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-[25%] w-16 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-[35%] w-24 h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Brackets decoration */}
          <div className="absolute top-1/4 left-[42%] font-mono text-2xl text-neon-cyan/10 animate-float" style={{ animationDelay: '0.8s' }}>{'{ }'}</div>
          <div className="absolute bottom-1/4 left-[38%] font-mono text-xl text-neon-purple/10 animate-float" style={{ animationDelay: '1.8s' }}>{'< />'}</div>
        </div>

        {/* Header */}
        <div className="relative z-30">
          <Header variant="dark" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          {/* Left Content */}
          <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2">
            <p className="font-mono text-sm text-neon-cyan tracking-widest mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {'>'} Hello, World
            </p>
            <p className="font-heading text-2xl md:text-3xl font-bold text-white animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Hi, I am
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2 gradient-text animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Boopathi R
            </h1>
            <p className="font-mono text-lg md:text-xl text-neon-purple mt-3 animate-fade-in-up text-glow-purple" style={{ animationDelay: "0.3s" }}>
              AI/ML Engineer
            </p>
            
            {/* Tech tags */}
            <div className="flex gap-3 mt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <span className="px-3 py-1 text-xs font-mono border border-neon-cyan/30 text-neon-cyan/70 rounded-sm">LLM</span>
              <span className="px-3 py-1 text-xs font-mono border border-neon-purple/30 text-neon-purple/70 rounded-sm">RAG</span>
              <span className="px-3 py-1 text-xs font-mono border border-neon-pink/30 text-neon-pink/70 rounded-sm">Agents</span>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <img
              src={avatar}
              alt="Boopathi R - AI/ML Engineer"
              className="w-[400px] md:w-[500px] lg:w-[660px] h-auto animate-scale-in"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-black py-10 md:py-14 border-t border-neon-purple/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="animate-slide-in-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Who I Am</h2>
            </div>
            <div className="md:col-span-2 animate-slide-in-right">
              <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-4">
                Passionate AI Engineer with expertise in building intelligent systems using Large Language Models, 
                Retrieval-Augmented Generation (RAG), and multi-agent frameworks. I specialize in creating 
                autonomous AI solutions that solve real-world problems.
              </p>
              <Link
                to="/about"
                className="inline-block px-4 py-2 border border-neon-cyan/50 text-neon-cyan text-xs tracking-widest font-mono transition-all duration-300 hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_hsl(180_100%_50%/0.3)] glow-cyan"
              >
                READ MORE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
