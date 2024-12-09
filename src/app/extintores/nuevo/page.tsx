import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function NuevoExtintor() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Agregar Nuevo Extintor</h1>
        <Button variant="outline" asChild>
          <Link href="/extintores">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información del Extintor</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <select id="tipo" className="w-full p-2 border rounded" required>
                  <option value="">Seleccione un tipo</option>
                  <option value="ABC">ABC (Polvo Químico Seco)</option>
                  <option value="CO2">CO2</option>
                  <option value="Agua">Agua</option>
                  <option value="Espuma">Espuma</option>
                  <option value="K">Clase K (Cocina)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacidad">Capacidad</Label>
                <Input id="capacidad" placeholder="ej: 10 lbs" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="agente">Agente Extintor</Label>
                <Input id="agente" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ubicacion">Ubicación</Label>
                <Input id="ubicacion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaFabricacion">Fecha de Fabricación</Label>
                <Input id="fechaFabricacion" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaInstalacion">Fecha de Instalación</Label>
                <Input id="fechaInstalacion" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaUltimaInspeccion">Última Inspección</Label>
                <Input id="fechaUltimaInspeccion" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaProximaInspeccion">Próxima Inspección</Label>
                <Input id="fechaProximaInspeccion" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaVencimiento">Fecha de Vencimiento</Label>
                <Input id="fechaVencimiento" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="presion">Presión</Label>
                <Input id="presion" placeholder="ej: 195 psi" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numeroSerie">Número de Serie</Label>
                <Input id="numeroSerie" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fabricante">Fabricante</Label>
                <Input id="fabricante" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="certificaciones">Certificaciones</Label>
              <Input id="certificaciones" placeholder="ej: UL, FM" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pesoTotal">Peso Total</Label>
              <Input id="pesoTotal" placeholder="ej: 15 lbs" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="altura">Altura</Label>
              <Input id="altura" placeholder="ej: 50 cm" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="anchura">Anchura</Label>
              <Input id="anchura" placeholder="ej: 20 cm" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instruccionesUso">Instrucciones de Uso</Label>
              <Textarea id="instruccionesUso" rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clasificacionFuego">Clasificación de Fuego</Label>
              <Input id="clasificacionFuego" placeholder="ej: A, B, C" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="garantiaInicio">Inicio de Garantía</Label>
              <Input id="garantiaInicio" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="garantiaFin">Fin de Garantía</Label>
              <Input id="garantiaFin" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="proveedor">Proveedor</Label>
              <Input id="proveedor" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="observaciones">Observaciones</Label>
              <Textarea id="observaciones" rows={4} />
            </div>
            <Button type="submit">Agregar Extintor</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

