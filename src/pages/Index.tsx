import { useState, useRef } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TestingSidebar } from "@/components/TestingSidebar";
import { ActionButtons } from "@/components/ActionButtons";
import { TextInputBox } from "@/components/TextInputBox";

const Index = () => {
  const [infoCargada, setInfoCargada] = useState<string[]>(["user=admin", "pass=admin12"]);
  const [aprobados, setAprobados] = useState<string[]>(["output=true", "status=approved"]);
  const [rechazados, setRechazados] = useState<string[]>(["output=true", "status=declined"]);
  const [isRunning, setIsRunning] = useState(false);

  const handleImport = (items: string[]) => {
    setInfoCargada(items);
  };

  const handleReset = () => {
    setInfoCargada([]);
    setAprobados([]);
    setRechazados([]);
  };

  const handleStart = async () => {
    setIsRunning(true);
    // Template para ejecutar script de selenium
    // Nota: Selenium requiere un backend. Este es un ejemplo de cómo se estructuraría:
    
    /*
    try {
      const response = await fetch('/api/selenium/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testData: infoCargada,
          // Configuración del test
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Manejar resultados exitosos
        setAprobados(prev => [...prev, ...result.approved]);
        setRechazados(prev => [...prev, ...result.rejected]);
      }
    } catch (error) {
      console.error('Error ejecutando selenium:', error);
    } finally {
      setIsRunning(false);
    }
    */
    
    // Por ahora, solo simulamos el inicio
    console.log('Iniciando test con datos:', infoCargada);
    setIsRunning(false);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted/30">
        <TestingSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header con botones de acción */}
          <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-4 p-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1">
                <h1 className="text-xl font-bold text-foreground mb-1">
                  Programa de Testeo de Usuarios
                </h1>
                <p className="text-sm text-muted-foreground">
                  Gestiona y analiza tus sesiones de testing
                </p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <ActionButtons 
                onImport={handleImport}
                onReset={handleReset}
                onStart={handleStart}
                isRunning={isRunning}
              />
            </div>
          </header>

          {/* Área de trabajo con las 3 cajas de texto */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 gap-6">
              <TextInputBox
                title="Info cargada"
                items={infoCargada}
                variant="default"
              />
              <TextInputBox
                title="Aprobados"
                items={aprobados}
                variant="success"
              />
              <TextInputBox
                title="Rechazados"
                items={rechazados}
                variant="destructive"
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
