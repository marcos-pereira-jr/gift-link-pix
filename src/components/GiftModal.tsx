import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PIX } from 'gpix';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  value: number;
}

export const GiftModal = ({ isOpen, onClose, title, description, value }: GiftModalProps) => {
  const [pixGenerated, setPixGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  console.log('Value for PIX generation:', value.toFixed(2));
  const pixCode = PIX.static()
  .setReceiverName('Marcos Pereira Junior')
  .setReceiverCity('Rio de Janeiro')
  .setKey('184.196.997-22') 
  .setAmount(300)
  .getBRCode();

  const handleGeneratePix = () => {
    setPixGenerated(true);
    toast.success("Link PIX gerado com sucesso!");
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    toast.success("Código PIX copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Gift className="w-6 h-6 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <p className="text-muted-foreground">{description}</p>
            <div className="p-4 bg-accent rounded-lg">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                R$ {value.toFixed(2)}
              </span>
            </div>
          </div>

          {!pixGenerated ? (
            <Button 
              onClick={handleGeneratePix}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              size="lg"
            >
              Gerar Link PIX
            </Button>
          ) : (
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-sm font-medium text-foreground">Código PIX:</p>
                <p className="text-xs text-muted-foreground font-mono break-all">
                  {pixCode}
                </p>
              </div>
              <Button 
                onClick={handleCopyPix}
                variant="outline"
                className="w-full"
                size="lg"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar Código PIX
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Cole o código no seu app de pagamento ou escaneie o QR Code
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
