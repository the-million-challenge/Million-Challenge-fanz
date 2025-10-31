import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Shield, FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Important Notice */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Aviso Importante</h3>
                <p className="text-sm text-muted-foreground">
                  Al usar The Million Challenge, aceptas estos términos. Si no estás de acuerdo, no uses la plataforma.
                  Debes ser mayor de 18 años para participar.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              1. Aceptación de Términos
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Al acceder y usar The Million Challenge ("la Plataforma"), aceptas estar legalmente obligado por estos
                Términos y Condiciones. Si no aceptas estos términos, no debes usar la Plataforma.
              </p>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Tu uso continuo de la
                Plataforma después de dichos cambios constituye tu aceptación de los nuevos términos.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">2. Requisitos de Edad</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Debes tener al menos 18 años de edad para usar la Plataforma. Al registrarte, confirmas que cumples con
                este requisito de edad.
              </p>
              <p>
                Los creadores deben proporcionar identificación oficial válida para verificar su edad antes de poder
                participar en la competencia.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">3. Sistema de Coronas</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Las "coronas" son la moneda virtual de la Plataforma. El valor de 1 corona es de $1.50 USD.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Las coronas se pueden comprar usando métodos de pago válidos (Stripe, PayPal)</li>
                <li>Las coronas no son reembolsables, excepto según lo requerido por la ley</li>
                <li>Las coronas no tienen valor en efectivo y no pueden ser canjeadas por dinero</li>
                <li>Las coronas transferidas a creadores no pueden ser revertidas</li>
                <li>Nos reservamos el derecho de modificar el precio de las coronas con previo aviso</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">4. Reglas de la Competencia</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                The Million Challenge es una competencia donde el primer creador en alcanzar 1,000,000 coronas gana
                $1,000,000 USD.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cada 15 días se realizará un reto de video</li>
                <li>El video con más likes gana el reto</li>
                <li>El participante con menos likes es eliminado de la competencia</li>
                <li>Las coronas del eliminado se transfieren al ganador del reto</li>
                <li>Un creador puede abandonar voluntariamente, y sus coronas se redistribuyen</li>
                <li>Nos reservamos el derecho de descalificar participantes por violación de reglas</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">5. Derechos de Contenido</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="font-medium text-foreground">
                AL SUBIR CONTENIDO A LA PLATAFORMA, OTORGAS A THE MILLION CHALLENGE UNA LICENCIA PERPETUA, IRREVOCABLE,
                MUNDIAL, LIBRE DE REGALÍAS PARA USAR, REPRODUCIR, MODIFICAR, DISTRIBUIR Y MOSTRAR DICHO CONTENIDO.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mantienes la propiedad de tu contenido, pero nos otorgas derechos de uso amplios</li>
                <li>Podemos usar tu contenido para marketing, promoción y otros fines comerciales</li>
                <li>Garantizas que tienes todos los derechos necesarios sobre el contenido que subes</li>
                <li>No subirás contenido que viole derechos de autor o propiedad intelectual de terceros</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">6. Contenido Prohibido</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Está estrictamente prohibido subir contenido que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sea ilegal, fraudulento o engañoso</li>
                <li>Infrinja derechos de propiedad intelectual</li>
                <li>Contenga material obsceno o pornográfico explícito</li>
                <li>Promueva violencia, odio o discriminación</li>
                <li>Acose, intimide o amenace a otros usuarios</li>
                <li>Contenga virus, malware o código malicioso</li>
              </ul>
              <p>
                Nos reservamos el derecho de eliminar cualquier contenido y suspender o terminar cuentas que violen
                estas reglas.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">7. Privacidad y Protección de Datos</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Tu privacidad es importante. Recopilamos y procesamos datos personales según nuestra Política de
                Privacidad.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recopilamos información necesaria para operar la Plataforma</li>
                <li>No vendemos tu información personal a terceros</li>
                <li>Usamos medidas de seguridad para proteger tus datos</li>
                <li>Puedes solicitar acceso, corrección o eliminación de tus datos</li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">8. Limitación de Responsabilidad</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                LA PLATAFORMA SE PROPORCIONA "TAL CUAL" SIN GARANTÍAS DE NINGÚN TIPO. NO SOMOS RESPONSABLES POR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pérdidas o daños derivados del uso de la Plataforma</li>
                <li>Interrupciones del servicio o errores técnicos</li>
                <li>Pérdida de coronas o transacciones fallidas</li>
                <li>Contenido publicado por otros usuarios</li>
                <li>Disputas entre usuarios</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">9. Terminación de Cuenta</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Podemos suspender o terminar tu cuenta en cualquier momento si:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violas estos Términos y Condiciones</li>
                <li>Participas en actividades fraudulentas o ilegales</li>
                <li>Abusas de la Plataforma o de otros usuarios</li>
                <li>Proporcionas información falsa o engañosa</li>
              </ul>
              <p>
                También puedes eliminar tu cuenta en cualquier momento, pero las coronas gastadas no son reembolsables.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Si tienes preguntas sobre estos Términos y Condiciones, contáctanos en:</p>
              <div className="bg-card border border-border rounded-lg p-4">
                <p>Email: legal@themillionchallenge.com</p>
                <p>Teléfono: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Al continuar usando la Plataforma, confirmas que has leído y aceptado estos términos.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Acepto los Términos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;