import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Crown, Search, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Creators = () => {
  const creators = [
    { id: 1, name: "@creator1", crowns: 125000, rank: 1, change: "+5" },
    { id: 2, name: "@creator2", crowns: 98500, rank: 2, change: "-1" },
    { id: 3, name: "@creator3", crowns: 87200, rank: 3, change: "+2" },
    { id: 4, name: "@creator4", crowns: 76800, rank: 4, change: "0" },
    { id: 5, name: "@creator5", crowns: 65400, rank: 5, change: "+1" },
    { id: 6, name: "@creator6", crowns: 54300, rank: 6, change: "-2" },
  ];

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
                <Crown className="w-4 h-4 mr-2" />
                Comprar Coronas
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ranking de Creadores</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            500 creadores compitiendo por el millón. Apoya a tus favoritos y ayúdalos a ganar.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar creadores..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {creators.slice(0, 3).map((creator, index) => (
            <Card key={creator.id} className={`${index === 0 ? 'md:col-start-2 md:row-start-1 border-primary/50 shadow-lg shadow-primary/20' : index === 1 ? 'md:col-start-1 md:row-start-2' : 'md:col-start-3 md:row-start-2'}`}>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-muted" />
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} font-bold mb-2`}>
                    {creator.rank}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{creator.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{creator.crowns.toLocaleString()}</span>
                </div>
                <Progress value={(creator.crowns / 1000000) * 100} className="mb-3" />
                <p className="text-sm text-muted-foreground mb-4">
                  {((creator.crowns / 1000000) * 100).toFixed(1)}% del objetivo
                </p>
                <Link to={`/creators/${creator.id}`}>
                  <Button className="w-full">Ver Perfil</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Ranking Table */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Ranking Completo</h2>
            <div className="space-y-2">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 text-center">
                    <span className="font-bold text-2xl">{creator.rank}</span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-muted" />
                  
                  <div className="flex-1">
                    <h3 className="font-bold">{creator.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Crown className="w-4 h-4" />
                      <span>{creator.crowns.toLocaleString()} coronas</span>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1">
                    <Progress value={(creator.crowns / 1000000) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {((creator.crowns / 1000000) * 100).toFixed(1)}% del objetivo
                    </p>
                  </div>

                  <div className="text-right">
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      creator.change.startsWith('+') ? 'text-green-500' : 
                      creator.change.startsWith('-') ? 'text-red-500' : 
                      'text-muted-foreground'
                    }`}>
                      <TrendingUp className="w-4 h-4" />
                      {creator.change}
                    </div>
                  </div>

                  <Link to={`/creators/${creator.id}`}>
                    <Button variant="outline" size="sm">
                      Ver Perfil
                    </Button>
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

export default Creators;