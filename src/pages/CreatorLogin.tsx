import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CreatorLogin = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-10 h-10 text-primary" />
            <span className="text-3xl font-bold text-primary">The Million Challenge</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Portal de Creadores</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Iniciar Sesión - Creadores</h1>
          <p className="text-muted-foreground">Accede a tu panel de control de creador</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            ¿Aún no eres creador?{" "}
            <Link to="/creator-apply" className="text-primary hover:underline">
              Aplica aquí
            </Link>
          </div>

          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong className="text-primary">Nota:</strong> Solo creadores aprobados pueden acceder a esta área.
              Si aplicaste recientemente, espera la confirmación por email.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-primary hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorLogin;