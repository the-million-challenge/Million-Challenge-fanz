import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Users, Trophy, Calendar, Coins, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">The Million Challenge</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">Volver al Inicio</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">¿Cómo Funciona?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Million Challenge es un reality show digital donde TÚ tienes el poder de decidir quién gana $1,000,000 USD
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Compra Coronas</h3>
            <p className="text-muted-foreground mb-4">
              Las coronas son la moneda de la plataforma. 1 corona = $1.50 USD. Puedes comprar con Stripe o PayPal.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium">Paquetes Disponibles:</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>10 coronas = $15</li>
                <li>50 coronas = $75</li>
                <li>100 coronas = $150</li>
                <li>500 coronas = $750</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Apoya Creadores</h3>
            <p className="text-muted-foreground mb-4">
              Transfiere tus coronas a los creadores que más te gusten. Cada corona los acerca al millón.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium">¿Cómo elegir?</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Ve sus perfiles y contenido</li>
                <li>• Revisa el ranking actual</li>
                <li>• Apoya a quien más te guste</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Gana el Millón</h3>
            <p className="text-muted-foreground mb-4">
              El primer creador en alcanzar 1,000,000 coronas gana $1,000,000 USD en efectivo.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium">Premio Final:</p>
              <p className="text-3xl font-bold text-primary mt-2">$1,000,000</p>
              <p className="text-xs text-muted-foreground mt-1">Un millón de dólares en efectivo</p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Retos Cada 15 Días</h3>
                <p className="text-muted-foreground mb-3">
                  Cada dos semanas hay un reto especial donde los creadores suben videos temáticos.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• El video con más likes gana</li>
                  <li>• El participante con menos likes es eliminado</li>
                  <li>• Las coronas del eliminado se transfieren al ganador</li>
                  <li>• Los fans pueden dar likes ilimitados durante el reto</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Star className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Para Creadores</h3>
                <p className="text-muted-foreground mb-3">
                  Si quieres participar y competir por el millón:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Debes ser mayor de 18 años (verificación requerida)</li>
                  <li>• Completa el formulario de aplicación</li>
                  <li>• Sube tu identificación oficial</li>
                  <li>• Espera la aprobación del equipo (48-72 horas)</li>
                  <li>• Una vez aprobado, crea contenido y gana coronas</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Coins className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Sistema de Coronas</h3>
                <p className="text-muted-foreground mb-3">
                  Las coronas son la forma de apoyar a los creadores:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1 corona = $1.50 USD</li>
                  <li>• Las coronas no son reembolsables (excepto casos especiales)</li>
                  <li>• Puedes distribuir tus coronas entre varios creadores</li>
                  <li>• El ranking se actualiza en tiempo real</li>
                  <li>• Todas las transacciones son seguras y verificadas</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Participar?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Únete ahora como fan para apoyar a tus creadores favoritos, o aplica como creador para competir por el millón.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Registrarse como Fan
              </Button>
            </Link>
            <Link to="/creator-apply">
              <Button size="lg" variant="outline">
                Aplicar como Creador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;