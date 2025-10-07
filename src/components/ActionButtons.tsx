import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Save, Download, Upload, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ActionButtonsProps {
  onImport: (items: string[]) => void;
  onReset: () => void;
  onStart: () => void;
  isRunning: boolean;
}

export function ActionButtons({ onImport, onReset, onStart, isRunning }: ActionButtonsProps) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAction = (action: string, titleColorClass: string, descriptionColorClass: string) => {
    toast({
      title: `Acción: ${action}`,
      description: "Funcionalidad en desarrollo",
      className: `${titleColorClass} ${descriptionColorClass}`,
    });
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) {
      toast({
        title: "No se cargó ninguna información",
        description: "No se seleccionó ningún archivo",
        className: "[&_.toast-title]:text-foreground [&_.toast-description]:text-foreground",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const lines = content.split('\n').filter(line => line.trim() !== '');
      
      onImport(lines);
      
      toast({
        title: "Información cargada correctamente",
        description: `Se cargaron ${lines.length} líneas del archivo`,
        className: "[&_.toast-title]:text-[hsl(var(--toast-success))] [&_.toast-description]:text-[hsl(var(--toast-success))]",
      });
    };
    
    reader.readAsText(file);
    
    // Reset input para permitir cargar el mismo archivo nuevamente
    event.target.value = '';
  };

  const handleStartClick = () => {
    onStart();
    toast({
      title: "Acción: Iniciar Test",
      description: "Funcionalidad en desarrollo",
      className: "[&_.toast-title]:text-[hsl(var(--toast-success))] [&_.toast-description]:text-[hsl(var(--toast-success))]",
    });
  };

  const handleResetClick = () => {
    onReset();
    toast({
      title: "Todas las cajas han sido limpiadas",
      description: "Los datos han sido eliminados",
      className: "[&_.toast-title]:text-foreground [&_.toast-description]:text-foreground",
    });
  };

  return (
    <div className="flex gap-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".txt"
        className="hidden"
      />
      
      <Button
        onClick={handleStartClick}
        className="gap-2"
        disabled={isRunning}
      >
        <Play className="h-4 w-4" />
        Iniciar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Pausar", "[&_.toast-title]:text-[hsl(var(--toast-pause))]", "[&_.toast-description]:text-[hsl(var(--toast-pause))]")}
        className="gap-2"
      >
        <Pause className="h-4 w-4" />
        Pausar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Guardar", "[&_.toast-title]:text-[hsl(var(--toast-warning))]", "[&_.toast-description]:text-[hsl(var(--toast-warning))]")}
        className="gap-2"
      >
        <Save className="h-4 w-4" />
        Guardar
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleAction("Exportar", "[&_.toast-title]:text-[hsl(var(--toast-info))]", "[&_.toast-description]:text-[hsl(var(--toast-info))]")}
        className="gap-2"
      >
        <Download className="h-4 w-4" />
        Exportar
      </Button>
      <Button
        variant="secondary"
        onClick={handleImportClick}
        className="gap-2"
      >
        <Upload className="h-4 w-4" />
        Importar
      </Button>
      <Button
        variant="outline"
        onClick={handleResetClick}
        className="gap-2"
      >
        <RotateCcw className="h-4 w-4" />
        Reiniciar
      </Button>
    </div>
  );
}
