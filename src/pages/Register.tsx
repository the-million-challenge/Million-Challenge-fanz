import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-10 h-10 text-primary" />
            <span className="text-3xl font-bold text-primary">The Million Challenge</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Regístrate como Fan</h1>
          <p className="text-muted-foreground">Crea tu cuenta para empezar a apoyar a tus creadores favoritos</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" type="text" placeholder="Juan Pérez" />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="age" />
              <label htmlFor="age" className="text-sm text-muted-foreground leading-tight">
                Confirmo que soy mayor de 18 años
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                Acepto los{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Términos y Condiciones
                </Link>{" "}
                y la Política de Privacidad
              </label>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Crear Cuenta
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;