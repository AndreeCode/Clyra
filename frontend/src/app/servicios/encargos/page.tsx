"use client"

import { useState } from "react"
import { CalendarIcon, DollarSign, MapPin, CheckCircle, Edit } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function JobApplicationMock() {
  const [hasApplied, setHasApplied] = useState(false)

  const job = {
    title: "Diseño de logo para tienda online",
    publisherName: "Ana García",
    category: "Diseño Gráfico",
    modality: "Virtual",
    publishedDate: "15 de Julio, 2025",
    startDate: "22 de Julio, 2025",
    status: "Publicado", // Can be "Publicado", "En curso", "Finalizado"
    description:
      "Necesitamos un logo moderno y minimalista para nuestra nueva tienda online de productos artesanales. La marca busca transmitir frescura, autenticidad y conexión con la naturaleza. Se valorará la creatividad y la capacidad de trabajar con plazos ajustados. Se requiere la entrega de archivos vectoriales y de alta resolución.",
    requirements: [
      "Experiencia previa en diseño de logos.",
      "Dominio de Adobe Illustrator o Figma.",
      "Portafolio demostrable.",
      "Capacidad de comunicación fluida.",
    ],
    budget: "S/150 – pago único",
    location: "Lima, Perú", // Only for "Presencial" jobs
    isPresential: false, // Set to true if modality is "Presencial"
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Publicado":
        return "bg-green-100 text-green-800"
      case "En curso":
        return "bg-orange-100 text-orange-800"
      case "Finalizado":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Toggle Button for Demo */}
        <div className="flex justify-end">
          <Button onClick={() => setHasApplied(!hasApplied)} variant="outline">
            {hasApplied ? "Mostrar Formulario" : "Mostrar Estado de Postulación"}
          </Button>
        </div>

        {/* Encabezado del encargo */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold md:text-3xl">{job.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User Avatar" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-gray-700">{job.publisherName}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                {job.category}
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800">
                {job.modality}
              </Badge>
              <Badge className={getStatusBadgeColor(job.status)}>{job.status}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>Publicado: {job.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>Inicio estimado: {job.startDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Descripción del encargo */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Descripción del Encargo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">{job.description}</p>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-800">Requisitos Clave:</h3>
              <ul className="list-none space-y-1 pl-0">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <DollarSign className="h-5 w-5 shrink-0 text-green-600" />
              <span className="font-semibold">Presupuesto:</span>
              <span>{job.budget}</span>
            </div>
            {job.isPresential && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 shrink-0 text-red-500" />
                <span className="font-semibold">Ubicación:</span>
                <span>{job.location}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Formulario visual de postulación / Estado de postulación */}
        {hasApplied ? (
          <Card className="shadow-sm border-l-4 border-green-500">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Estado de tu Postulación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-medium text-green-700">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Ya estás postulado a este encargo</span>
              </div>
              <p className="text-gray-600">El solicitante revisará tu propuesta en breve.</p>
              <Button variant="ghost" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Edit className="h-4 w-4" />
                Editar propuesta (simulado)
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Postúlate a este Encargo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="message">Mensaje al solicitante</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe un mensaje persuasivo para el solicitante..."
                  rows={5}
                  className="resize-y"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="proposal">Propuesta económica (opcional)</Label>
                <Input id="proposal" placeholder="S/____" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time-estimate">Tiempo estimado para completarlo</Label>
                <Input id="time-estimate" placeholder="Ej: 5 días, 2 semanas" type="text" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Acepto los términos de uso
                </Label>
              </div>
              <Button size="lg" className="w-full">
                Enviar postulación (simulado)
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Aviso visual */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1">
            <span className="text-orange-500">⚠️</span> Esta es una vista de demo. No se enviará ninguna postulación
            real.
          </p>
        </footer>
      </div>
    </div>
  )
}
