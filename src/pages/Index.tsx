import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TestingSidebar } from "@/components/TestingSidebar";
import { ActionButtons } from "@/components/ActionButtons";
import { TextInputBox } from "@/components/TextInputBox";

const Index = () => {
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
              <ActionButtons />
            </div>
          </header>

          {/* Área de trabajo con las 3 cajas de texto */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <TextInputBox
                title="Tareas del Test"
                placeholder="Ej: Buscar un producto..."
              />
              <TextInputBox
                title="Observaciones"
                placeholder="Ej: El usuario tuvo dificultad..."
              />
              <TextInputBox
                title="Comentarios"
                placeholder="Ej: Mejorar la navegación..."
              />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
