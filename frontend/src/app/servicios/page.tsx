import { Briefcase, Bookmark, CalendarDays, Laptop, Tag, User, AlertTriangle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            {/* Encabezado del encargo */}
            <Card className="shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Diseñar logo para tienda online</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full">Abierto</Badge>
                  <div className="flex items-center gap-1">
                    <Laptop className="w-4 h-4 text-gray-500" />
                    <span>Virtual</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4 text-gray-500" />
                    <span>15 de Julio, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span>Diseño Gráfico</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Descripción completa */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Descripción del encargo</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Necesitamos un diseñador gráfico talentoso para crear un logotipo moderno y atractivo para nuestra
                  nueva tienda online de productos artesanales. El logo debe reflejar la creatividad, la calidad y la
                  autenticidad de nuestros productos. Buscamos un diseño que sea memorable y versátil, adaptable a
                  diferentes plataformas y materiales de marketing.
                </p>
                <Separator className="my-4 bg-gray-200" />
                <p>
                  El proyecto incluye la creación de varias propuestas de diseño, revisiones ilimitadas hasta la
                  satisfacción total, y la entrega de los archivos finales en diferentes formatos (vectoriales y
                  rasterizados) para uso web e impresión. Se valorará la experiencia previa en diseño de logos para
                  e-commerce y un portafolio sólido.
                </p>
              </CardContent>
            </Card>

            {/* Sección simulada de interacción */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Preguntas y Comentarios</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Inicia sesión para postular al encargo o hacer una pregunta..."
                    className="resize-y min-h-[80px] bg-gray-100 border-gray-200"
                    disabled
                  />
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Solo usuarios registrados pueden hacer preguntas.
                  </p>
                </div>

                <Separator className="bg-gray-200" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 text-sm">
                      <div className="font-semibold text-gray-800">Juan D.</div>
                      <div className="text-gray-500 text-xs">Hace 2 días</div>
                      <p className="text-gray-700">
                        ¿Hay alguna preferencia de paleta de colores o estilo visual específico?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User Avatar" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1 text-sm">
                      <div className="font-semibold text-gray-800">Ana M.</div>
                      <div className="text-gray-500 text-xs">Hace 1 día</div>
                      <p className="text-gray-700">¿Cuál es el plazo estimado para la entrega del proyecto?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Información del solicitante y Acciones */}
          <div className="md:col-span-1 space-y-8">
            {/* Información del solicitante */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Información del Solicitante</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4 text-center">
                <Avatar className="w-24 h-24 mx-auto border-2 border-primary">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User Profile Avatar" />
                  <AvatarFallback className="text-4xl">UD</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900">UsuarioDemo</h3>
                <div className="space-y-1 text-gray-700">
                  <p className="text-sm">
                    Modalidad: <Badge variant="secondary">Solicita</Badge>
                  </p>
                  <p className="text-sm">Encargos publicados: 12</p>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  <User className="w-4 h-4 mr-2" />
                  Ver perfil
                </Button>
              </CardContent>
            </Card>

            {/* Bloque de acciones */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Acciones del Encargo</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Postular al encargo
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Guardar para después
                </Button>
                <p className="text-sm text-center text-red-500 flex items-center justify-center gap-1 mt-4">
                  <AlertTriangle className="w-4 h-4" />
                  ⚠️ Esta es una demo. No puedes realizar acciones reales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 text-sm mt-12">
        <p>Esta vista es una demostración de cómo se presentaría un encargo publicado en la plataforma.</p>
      </footer>
    </div>
  )
}
