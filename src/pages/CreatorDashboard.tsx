import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Upload, Eye, Heart, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const CreatorDashboard = () => {
  const currentCrowns = 45678;
  const goalCrowns = 1000000;
  const progressPercent = (currentCrowns / goalCrowns) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">The Million Challenge</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Ver Mi Perfil Público
            </Button>
            <Button variant="outline" size="sm">Cerrar Sesión</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard de Creador</h1>
          <p className="text-muted-foreground">Bienvenido, @username</p>
        </div>

        {/* Goal Progress Card */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Progreso hacia el Millón
            </CardTitle>
            <CardDescription>Sigue así, ¡cada corona cuenta!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{currentCrowns.toLocaleString()} coronas</span>
                <span className="text-muted-foreground">/ 1,000,000</span>
              </div>
              <Progress value={progressPercent} className="h-4" />
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-sm text-muted-foreground">Valor Acumulado</p>
                  <p className="text-xl font-bold text-primary">${(currentCrowns * 1.5).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ranking Actual</p>
                  <p className="text-xl font-bold">#8 de 500</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Coronas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-primary" />
                <div className="text-2xl font-bold">{currentCrowns.toLocaleString()}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fans Activos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground mt-1">+12% esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Likes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                <div className="text-2xl font-bold">8,956</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Contenido Subido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground mt-1">Fotos y videos</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Content */}
          <Card>
            <CardHeader>
              <CardTitle>Subir Contenido</CardTitle>
              <CardDescription>Comparte fotos y videos con tus fans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Arrastra archivos aquí o haz clic para seleccionar
                </p>
                <Button variant="outline">Seleccionar Archivos</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>Últimas interacciones de tus fans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "crown", text: "@fan1 te envió 25 coronas", time: "Hace 5 min" },
                  { type: "like", text: "@fan2 le gustó tu foto", time: "Hace 15 min" },
                  { type: "crown", text: "@fan3 te envió 50 coronas", time: "Hace 1 hora" },
                  { type: "like", text: "@fan4 le gustó tu video", time: "Hace 2 horas" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {activity.type === "crown" ? (
                        <Crown className="w-4 h-4 text-primary" />
                      ) : (
                        <Heart className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Content */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Tu Contenido Reciente</CardTitle>
            <CardDescription>Gestiona y monitorea tu contenido publicado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-square rounded-lg bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> 234
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" /> 1.2k
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatorDashboard;