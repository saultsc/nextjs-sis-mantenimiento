import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function NuevoAireAcondicionado() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Agregar Nuevo Aire Acondicionado</h1>
        <Button variant="outline" asChild>
          <Link href="/aires">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información del Aire Acondicionado</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modelo">Modelo</Label>
                <Input id="modelo" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marca">Marca</Label>
                <Input id="marca" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <select id="tipo" className="w-full p-2 border rounded" required>
                  <option value="">Seleccione un tipo</option>
                  <option value="split">Split</option>
                  <option value="ventana">Ventana</option>
                  <option value="central">Central</option>
                  <option value="portatil">Portátil</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacidad">Capacidad (BTU)</Label>
                <Input id="capacidad" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eficienciaEnergetica">Eficiencia Energética</Label>
                <Input id="eficienciaEnergetica" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ubicacion">Ubicación</Label>
                <Input id="ubicacion" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaInstalacion">Fecha de Instalación</Label>
                <Input id="fechaInstalacion" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ultimoMantenimiento">Último Mantenimiento</Label>
                <Input id="ultimoMantenimiento" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="proximoMantenimiento">Próximo Mantenimiento</Label>
                <Input id="proximoMantenimiento" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consumoEnergetico">Consumo Energético (kWh/año)</Label>
                <Input id="consumoEnergetico" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nivelRuido">Nivel de Ruido (dB)</Label>
                <Input id="nivelRuido" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="peso">Peso (kg)</Label>
                <Input id="peso" type="number" step="0.1" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dimensiones">Dimensiones (Alto x Ancho x Profundidad en mm)</Label>
              <Input id="dimensiones" placeholder="ej: 998 x 330 x 210" required />
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
            <Button type="submit">Agregar Aire Acondicionado</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

