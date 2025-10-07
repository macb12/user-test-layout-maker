import { Button } from "@/components/ui/button";
import { Play, Pause, Save, Download, Upload, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ActionButtons() {
  const { toast } = useToast();

  const handleAction = (action: string, colorClass: string) => {
    toast({
      title: `Acción: ${action}`,
      description: "Funcionalidad en desarrollo",
      className: colorClass,
    });
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => handleAction("Iniciar Test", "[&_.toast-description]:text-[hsl(var(--toast-success))]")}
        className="gap-2"
      >
        <Play className="h-4 w-4" />
        Iniciar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Pausar", "[&_.toast-description]:text-[hsl(var(--toast-pause))]")}
        className="gap-2"
      >
        <Pause className="h-4 w-4" />
        Pausar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Guardar", "[&_.toast-description]:text-[hsl(var(--toast-warning))]")}
        className="gap-2"
      >
        <Save className="h-4 w-4" />
        Guardar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Exportar", "[&_.toast-description]:text-[hsl(var(--toast-info))]")}
        className="gap-2"
      >
        <Download className="h-4 w-4" />
        Exportar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Importar", "[&_.toast-description]:text-[hsl(var(--toast-info))]")}
        className="gap-2"
      >
        <Upload className="h-4 w-4" />
        Importar
      </Button>
      <Button
        variant="outline"
        onClick={() => handleAction("Reiniciar", "")}
        className="gap-2"
      >
        <RotateCcw className="h-4 w-4" />
        Reiniciar
      </Button>
    </div>
  );
}
