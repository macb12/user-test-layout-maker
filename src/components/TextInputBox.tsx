import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface TextInputBoxProps {
  title: string;
  items?: string[];
  variant?: "default" | "success" | "destructive";
}

export function TextInputBox({ title, items = [], variant = "default" }: TextInputBoxProps) {
  const { toast } = useToast();

  const handleCopyAll = () => {
    const allText = items.join("\n");
    navigator.clipboard.writeText(allText);
    toast({
      title: "Copiado",
      description: "Se ha copiado toda la información al portapapeles",
    });
  };

  const getItemClasses = () => {
    return "bg-muted/30 border-border";
  };

  const getTextColor = () => {
    switch (variant) {
      case "success":
        return "text-success";
      case "destructive":
        return "text-destructive";
      default:
        return "";
    }
  };

  return (
    <Card className="shadow-lg border-2 border-primary/30 bg-card/95 backdrop-blur-sm h-full">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {items.length > 0 && (
          <Button onClick={handleCopyAll} size="sm" variant="outline">
            <Copy className="h-4 w-4 mr-2" />
            Copiar todo
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] rounded-md border border-border/50 p-2 bg-background/50">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              No hay información disponible
            </div>
          ) : (
            <div className="space-y-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-2 rounded-md border transition-all duration-200",
                    getItemClasses()
                  )}
                >
                  <span className={cn("text-sm break-words", getTextColor())}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
