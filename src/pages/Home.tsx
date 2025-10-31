import { Button } from "@/components/ui/button";
import { Crown, Trophy, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">The Million Challenge</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Inicio</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">Cómo Funciona</Link>
            <Link to="/contest" className="text-foreground hover:text-primary transition-colors">Concurso</Link>
            <Link to="/creators" className="text-foreground hover:text-primary transition-colors">Creadores</Link>
            <Link to="/terms" className="text-foreground hover:text-primary transition-colors">Términos</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/buy-crowns">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Crown className="w-4 h-4 mr-2" />
                Comprar Coronas
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Login Fans</Button>
            </Link>
            <Link to="/creator-login">
              <Button variant="outline" size="sm">Login Creadores</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Reality Show Digital Interactivo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            The Million Challenge
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            500 creadores compiten por <span className="text-primary font-bold">$1,000,000 USD</span>
            <br />
            Tú decides quién gana con tus coronas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Regístrate como Fan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/creator-apply">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Quiero ser Creador
                <Crown className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">500</div>
              <div className="text-muted-foreground">Creadores Compitiendo</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">$1M</div>
              <div className="text-muted-foreground">Premio Final</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">15 días</div>
              <div className="text-muted-foreground">Cada Reto</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">¿Cómo Funciona?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Compra Coronas</h3>
              <p className="text-muted-foreground">
                Cada corona vale $1.50 USD. Usa Stripe o PayPal para comprar y apoyar a tus creadores favoritos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Apoya Creadores</h3>
              <p className="text-muted-foreground">
                Transfiere tus coronas a los creadores que quieras ver ganar. ¡Cada corona cuenta!
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Gana el Millón</h3>
              <p className="text-muted-foreground">
                El primer creador en alcanzar 1,000,000 coronas gana $1,000,000 USD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Participar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de fans que ya están apoyando a sus creadores favoritos.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              Crear Cuenta Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} The Million Challenge (Fans). Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;