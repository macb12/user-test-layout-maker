import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface TextInputBoxProps {
  title: string;
  items?: string[];
}

export function TextInputBox({ title, items = [] }: TextInputBoxProps) {
  const { toast } = useToast();

  const handleCopyAll = () => {
    const allText = items.join("\n");
    navigator.clipboard.writeText(allText);
    toast({
      title: "Copiado",
      description: "Se ha copiado toda la información al portapapeles",
    });
  };

  return (
    <Card className="shadow-sm h-full">
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
        <ScrollArea className="h-[400px] rounded-md border p-3">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              No hay información disponible
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md bg-muted/30 border border-border"
                >
                  <span className="text-sm flex-1 break-words">{item}</span>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
