import { useState } from "react";
import { GiftCard } from "@/components/GiftCard";
import { GiftModal } from "@/components/GiftModal";
import { Heart } from "lucide-react";
import couplePhoto from "@/assets/couple-photo.png";


interface Gift {
  id: number;
  title: string;
  description: string;
  value: number;
  imageUrl?: string;
}

const gifts: Gift[] = [
  {
    id: 1,
    title: "Lua de Mel - Passagens",
    description: "Contribua para tornar nossa viagem dos sonhos ainda mais especial",
    value: 500.00,
    imageUrl: "https://forbes.com.br/wp-content/uploads/2024/03/Life_tendencias-de-viagem-2024.jpg"
  },
  {
    id: 2,
    title: "Lua de Mel - Hospedagem",
    description: "Ajude-nos a ter dias inesquecíveis em um lugar paradisíaco",
    value: 800.00
  },
  {
    id: 3,
    title: "Jantar Romântico",
    description: "Uma noite especial para celebrar nosso amor",
    value: 300.00
  },
  {
    id: 4,
    title: "Kit Cozinha",
    description: "Utensílios para preparar refeições deliciosas juntos",
    value: 450.00
  },
  {
    id: 5,
    title: "Jogo de Cama Premium",
    description: "Conforto e elegância para nossos momentos de descanso",
    value: 350.00
  },
  {
    id: 6,
    title: "Decoração da Casa",
    description: "Itens especiais para tornar nosso lar ainda mais aconchegante",
    value: 400.00
  }
];

const Index = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/20 to-background">
      {/* Header */}
      <header className="py-12 px-4 text-center space-y-6">
        <div className="flex justify-center">
          <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />
        </div>
        
        {/* Couple Photo */}
        <div className="w-full md:max-w-4xl mx-auto md:px-4 relative">
          <div className="relative overflow-hidden md:rounded-3xl">
            <img 
              src={couplePhoto} 
              alt="Foto do casal de noivos" 
              className="w-full h-auto"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Nossa Lista de Presentes
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sua presença é o maior presente, mas se desejar nos presentear, 
          escolha uma das contribuições simbólicas abaixo
        </p>
      </header>

      {/* Gifts Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {gifts.map((gift) => (
            <GiftCard
              key={gift.id}
              title={gift.title}
              description={gift.description}
              value={gift.value}
              imageUrl={gift.imageUrl}
              onClick={() => setSelectedGift(gift)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedGift && (
        <GiftModal
          isOpen={!!selectedGift}
          onClose={() => setSelectedGift(null)}
          title={selectedGift.title}
          description={selectedGift.description}
          value={selectedGift.value}
        />
      )}

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          Feito com <Heart className="w-4 h-4 inline text-primary" fill="currentColor" /> para nosso dia especial
        </p>
      </footer>
    </div>
  );
};

export default Index;
