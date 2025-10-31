import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Plus, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FanDashboard = () => {
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
            <Link to="/buy-crowns">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Comprar Coronas
              </Button>
            </Link>
            <Button variant="outline" size="sm">Cerrar Sesión</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">¡Bienvenido de vuelta!</h1>
          <p className="text-muted-foreground">Gestiona tus coronas y apoya a tus creadores favoritos</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Mis Coronas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <div className="text-3xl font-bold text-primary">150</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">≈ $225.00 USD</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Creadores Apoyados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-primary" />
                <div className="text-3xl font-bold">8</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Apoyando activamente</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Invertido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <div className="text-3xl font-bold">$450</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">En toda la plataforma</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Historial de Transacciones</CardTitle>
            <CardDescription>Tus últimas compras y transferencias de coronas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Crown className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Apoyaste a @creator{i}</p>
                      <p className="text-sm text-muted-foreground">Hace 2 días</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">-50 coronas</p>
                    <p className="text-xs text-muted-foreground">$75.00</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supported Creators */}
        <Card>
          <CardHeader>
            <CardTitle>Creadores que Apoyas</CardTitle>
            <CardDescription>Los creadores a los que has transferido coronas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20" />
                  <div className="flex-1">
                    <p className="font-medium">@creator{i}</p>
                    <p className="text-sm text-muted-foreground">12,450 coronas</p>
                  </div>
                  <Link to={`/creators/${i}`}>
                    <Button size="sm" variant="outline">Ver Perfil</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FanDashboard;