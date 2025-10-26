import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

interface GiftCardProps {
  title: string;
  description: string;
  value: number;
  onClick: () => void;
}

export const GiftCard = ({ title, description, value, onClick }: GiftCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
    >
      <div className="relative h-48 bg-gradient-to-br from-accent/50 to-primary/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        <Gift className="w-16 h-16 text-primary relative z-10 transition-transform group-hover:scale-110" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <div className="pt-2 border-t border-border">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            R$ {value.toFixed(2)}
          </span>
        </div>
      </div>
    </Card>
  );
};
