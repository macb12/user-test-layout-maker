import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TestingSidebar } from "@/components/TestingSidebar";
import desarrolloImg from "@/assets/en-desarrollo.png";

const Config = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted/30">
        <TestingSidebar />
        
        <main className="flex-1 flex flex-col">
          <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-4 p-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1">
                <h1 className="text-xl font-bold text-foreground">Configuración</h1>
              </div>
            </div>
          </header>

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center max-w-2xl">
              <img 
                src={desarrolloImg} 
                alt="En desarrollo" 
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Funcionalidad en Desarrollo
              </h2>
              <p className="text-muted-foreground">
                Esta sección estará disponible próximamente
              </p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Config;
