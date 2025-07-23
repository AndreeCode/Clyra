import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarDays, MapPin, User } from "lucide-react"

export default function Component() {
  const mockEncargos = [
    {
      id: "1",
      title: "Diseño de Logo para Startup Tecnológica",
      description:
        "Necesitamos un diseñador gráfico para crear un logo moderno y minimalista para nuestra nueva startup de IA. Se requiere experiencia previa en branding.",
      user: "UsuarioDemo1",
      modality: "Virtual",
      status: "Abierto",
      date: "Publicado hace 2 días",
    },
    {
      id: "2",
      title: "Asistencia en Mudanza Local",
      description:
        "Se busca ayuda para cargar y descargar muebles en una mudanza dentro de la ciudad. Se requiere fuerza física y disponibilidad inmediata.",
      user: "UsuarioDemo2",
      modality: "Presencial",
      status: "Abierto",
      date: "Publicado hace 1 día",
    },
    {
      id: "3",
      title: "Desarrollo Web para E-commerce",
      description:
        "Proyecto para desarrollar una tienda online completa con pasarela de pago y gestión de inventario. Experiencia en React y Node.js es un plus.",
      user: "UsuarioDemo3",
      modality: "Virtual",
      status: "En curso",
      date: "Publicado hace 5 días",
    },
    {
      id: "4",
      title: "Clases Particulares de Matemáticas",
      description:
        "Profesor particular de matemáticas para nivel bachillerato. Se busca alguien con paciencia y buena metodología de enseñanza.",
      user: "UsuarioDemo4",
      modality: "Presencial",
      status: "Abierto",
      date: "Publicado hace 3 horas",
    },
    {
      id: "5",
      title: "Traducción de Documentos Legales (Inglés-Español)",
      description:
        "Necesitamos un traductor certificado para documentos legales. Se requiere precisión y conocimiento de terminología jurídica.",
      user: "UsuarioDemo5",
      modality: "Virtual",
      status: "Finalizado",
      date: "Publicado hace 1 semana",
    },
    {
      id: "6",
      title: "Edición de Video para Contenido de YouTube",
      description:
        "Editor de video con experiencia en Adobe Premiere y After Effects para canal de YouTube. Se valorará creatividad y agilidad.",
      user: "UsuarioDemo6",
      modality: "Virtual",
      status: "Abierto",
      date: "Publicado hace 1 día",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Abierto":
        return "bg-green-500 hover:bg-green-500/80 text-white"
      case "En curso":
        return "bg-yellow-500 hover:bg-yellow-500/80 text-white"
      case "Finalizado":
        return "bg-gray-500 hover:bg-gray-500/80 text-white"
      default:
        return "bg-gray-500 hover:bg-gray-500/80 text-white"
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-12 text-center bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Explora los encargos disponibles</h1>
        <p className="mt-2 text-lg text-gray-600">
          Encuentra tareas, trabajos o servicios que se ajusten a tu experiencia o tiempo libre
        </p>
      </header>

      {/* Search and Filters Bar */}
      <section className="w-full max-w-6xl px-4 mx-auto mt-8">
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white rounded-lg shadow-md md:flex-row md:p-6">
          <Input
            type="text"
            placeholder="Buscar encargo por título o palabra clave..."
            className="flex-1 w-full md:w-auto"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                Todas las categorías
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Diseño</DropdownMenuItem>
              <DropdownMenuItem>Desarrollo</DropdownMenuItem>
              <DropdownMenuItem>Asistencia</DropdownMenuItem>
              <DropdownMenuItem>Traducción</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                Modalidad
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Virtual</DropdownMenuItem>
              <DropdownMenuItem>Presencial</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto bg-transparent">
                Estado
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Abierto</DropdownMenuItem>
              <DropdownMenuItem>En curso</DropdownMenuItem>
              <DropdownMenuItem>Finalizado</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 md:w-auto">Aplicar filtros</Button>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl px-4 mx-auto py-8">
        {/* Featured Card */}
        <Card className="mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">¿Tienes un encargo que publicar?</CardTitle>
            <CardDescription className="text-white/90">
              Comparte tu necesidad y recibe ayuda rápidamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Publicar encargo
            </Button>
          </CardContent>
        </Card>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockEncargos.map((encargo) => (
            <Card key={encargo.id} className="shadow-md rounded-lg overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-800">{encargo.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 line-clamp-3">{encargo.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" alt={`@${encargo.user}`} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span>{encargo.user}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    <MapPin className="w-3 h-3 mr-1" />
                    {encargo.modality}
                  </Badge>
                  <Badge className={getStatusColor(encargo.status)}>{encargo.status}</Badge>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  <span>{encargo.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Ver más
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 mt-8 text-center text-gray-500 bg-white shadow-sm">
        <p className="text-sm">⚠️ Esta es una vista demo, los datos y acciones no son reales</p>
      </footer>
    </div>
  )
}
