import { CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, MessageSquare, Flag, ClipboardList, CheckCircle, Star, CalendarDays, Clock } from "lucide-react"

export default function UserProfilePage() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* Left Column: Profile Header */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start gap-6">
            <Card className="w-full p-6 flex flex-col items-center md:items-start gap-4 shadow-sm border-none">
              <Avatar className="w-32 h-32 border-4 border-emerald-500 shadow-md">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User Avatar" />
                <AvatarFallback className="text-4xl font-bold bg-emerald-100 text-emerald-700">UD</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">UsuarioDemo</h1>
                <Badge className="mt-2 bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">
                  Ofrece servicios
                </Badge>
                <p className="text-gray-600 flex items-center gap-1 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Madrid, España
                </p>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  Desarrollador web apasionado con experiencia en React y Node.js. Busco proyectos desafiantes y
                  colaboraciones creativas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
                <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  <Flag className="w-4 h-4 mr-2" />
                  Reportar perfil
                </Button>
              </div>
              <Badge className="mt-4 bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full self-center md:self-start">
                Estado de cuenta: Activa
              </Badge>
            </Card>
          </div>

          {/* Right Column: Stats, Gigs, Reviews */}
          <div className="md:w-2/3 flex flex-col gap-8">
            {/* Basic Statistics */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas básicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4 flex flex-col items-center text-center shadow-sm border-none bg-emerald-50">
                  <ClipboardList className="w-8 h-8 text-emerald-600 mb-2" />
                  <CardTitle className="text-xl font-bold text-gray-800">12</CardTitle>
                  <CardDescription className="text-gray-600">Encargos publicados</CardDescription>
                </Card>
                <Card className="p-4 flex flex-col items-center text-center shadow-sm border-none bg-cyan-50">
                  <CheckCircle className="w-8 h-8 text-cyan-600 mb-2" />
                  <CardTitle className="text-xl font-bold text-gray-800">8</CardTitle>
                  <CardDescription className="text-gray-600">Encargos completados</CardDescription>
                </Card>
                <Card className="p-4 flex flex-col items-center text-center shadow-sm border-none bg-yellow-50">
                  <div className="mb-2">{renderStars(4)}</div>
                  <CardTitle className="text-xl font-bold text-gray-800">4.0</CardTitle>
                  <CardDescription className="text-gray-600">Valoración promedio</CardDescription>
                </Card>
                <Card className="p-4 flex flex-col items-center text-center shadow-sm border-none bg-purple-50">
                  <CalendarDays className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle className="text-xl font-bold text-gray-800">Ene 2024</CardTitle>
                  <CardDescription className="text-gray-600">Miembro desde</CardDescription>
                </Card>
              </div>
            </section>

            {/* Encargos Relacionados */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Encargos publicados por este usuario</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 shadow-sm border-none">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      Diseño de Landing Page para Startup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-sm text-gray-700 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <Clock className="w-3 h-3 mr-1" /> Virtual
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Publicado
                      </Badge>
                    </div>
                    <p className="flex items-center gap-1 text-gray-600">
                      <CalendarDays className="w-4 h-4" /> Fecha estimada: 30/07/2025
                    </p>
                    <Button
                      variant="outline"
                      className="mt-3 w-full border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent"
                    >
                      Ver encargo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-4 shadow-sm border-none">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      Desarrollo de App Móvil para Restaurante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-sm text-gray-700 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <MapPin className="w-3 h-3 mr-1" /> Presencial
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        En curso
                      </Badge>
                    </div>
                    <p className="flex items-center gap-1 text-gray-600">
                      <CalendarDays className="w-4 h-4" /> Fecha estimada: 15/08/2025
                    </p>
                    <Button
                      variant="outline"
                      className="mt-3 w-full border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent"
                    >
                      Ver encargo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-4 shadow-sm border-none">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      Edición de Video para Campaña Publicitaria
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-sm text-gray-700 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <Clock className="w-3 h-3 mr-1" /> Virtual
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        Finalizado
                      </Badge>
                    </div>
                    <p className="flex items-center gap-1 text-gray-600">
                      <CalendarDays className="w-4 h-4" /> Fecha estimada: 01/07/2025
                    </p>
                    <Button
                      variant="outline"
                      className="mt-3 w-full border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent"
                    >
                      Ver encargo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Reseñas de otros usuarios */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Comentarios recibidos</h2>
              <div className="grid gap-4">
                <Card className="p-4 shadow-sm border-none">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reviewer Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Juan Delgado</p>
                      {renderStars(5)}
                    </div>
                    <span className="ml-auto text-xs text-gray-500">18/07/2025</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Excelente trabajo, muy profesional y entregó el proyecto antes de lo esperado. ¡Totalmente
                    recomendado!"
                  </p>
                </Card>

                <Card className="p-4 shadow-sm border-none">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reviewer Avatar" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Ana Morales</p>
                      {renderStars(4)}
                    </div>
                    <span className="ml-auto text-xs text-gray-500">10/07/2025</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Buena comunicación y resultados sólidos. Hubo un pequeño retraso, pero lo compensó con la calidad."
                  </p>
                </Card>

                <Card className="p-4 shadow-sm border-none">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Reviewer Avatar" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Roberto Pérez</p>
                      {renderStars(5)}
                    </div>
                    <span className="ml-auto text-xs text-gray-500">01/07/2025</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Un placer trabajar con UsuarioDemo. Entendió perfectamente lo que necesitaba y lo ejecutó a la
                    perfección."
                  </p>
                </Card>
              </div>
            </section>
          </div>
        </div>

        {/* Important Note */}
        <div className="p-6 md:p-8 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-600">
          <p className="font-medium text-orange-600">
            ⚠️ Este perfil es una vista demo. Las acciones están desactivadas y los datos son simulados.
          </p>
        </div>
      </div>
    </div>
  )
}
