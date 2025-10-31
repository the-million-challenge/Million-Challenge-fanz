import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Crown, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const CreatorApply = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-3xl py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-10 h-10 text-primary" />
            <span className="text-3xl font-bold text-primary">The Million Challenge</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Aplicación de Creador</h1>
          <p className="text-muted-foreground">
            Completa este formulario para participar en el challenge por $1,000,000 USD
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="real-name">Nombre Real *</Label>
                <Input id="real-name" type="text" placeholder="Tu nombre legal" />
              </div>

              <div>
                <Label htmlFor="alias">Nombre Artístico / Alias *</Label>
                <Input id="alias" type="text" placeholder="Cómo te conocerán los fans" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div>
                <Label htmlFor="dob">Fecha de Nacimiento *</Label>
                <Input id="dob" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="bio">Biografía / Descripción *</Label>
              <Textarea
                id="bio"
                placeholder="Cuéntanos sobre ti, tu contenido y por qué deberías ser parte del challenge..."
                className="min-h-32"
              />
            </div>

            <div>
              <Label htmlFor="social">Enlaces a Redes Sociales</Label>
              <Input id="social" type="text" placeholder="Instagram, TikTok, YouTube, etc." />
            </div>

            <div>
              <Label>Documento de Identidad (ID) *</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Sube una foto clara de tu identificación oficial
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  (Pasaporte, licencia de conducir, INE, etc.)
                </p>
              </div>
            </div>

            <div>
              <Label>Muestra de Contenido (Opcional)</Label>
              <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Sube 1-3 ejemplos de tu contenido (fotos o videos)
                </p>
              </div>
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="age-verify" />
                <label htmlFor="age-verify" className="text-sm text-muted-foreground leading-tight">
                  Confirmo que soy mayor de 18 años y puedo proporcionar identificación oficial que lo demuestre *
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms-creator" />
                <label htmlFor="terms-creator" className="text-sm text-muted-foreground leading-tight">
                  He leído y acepto los{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Términos y Condiciones
                  </Link>{" "}
                  *
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="content-rights" />
                <label htmlFor="content-rights" className="text-sm text-muted-foreground leading-tight">
                  Entiendo y acepto que todo el contenido que suba podrá ser utilizado por The Million Challenge
                  según lo establecido en los Términos y Condiciones *
                </label>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Nota:</strong> Tu aplicación será revisada por nuestro equipo.
                Recibirás un email con la decisión en un plazo de 48-72 horas. Si eres aprobado, podrás crear tu
                cuenta de creador y empezar a competir.
              </p>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              Enviar Aplicación
            </Button>
          </form>
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

export default CreatorApply;