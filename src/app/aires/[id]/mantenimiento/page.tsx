import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function MantenimientoAireAcondicionado({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Realizar Mantenimiento</h1>
        <Button variant="outline" asChild>
          <Link href={`/aires/${params.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registro de Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fecha">Fecha de Mantenimiento</Label>
              <Input id="fecha" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de Mantenimiento</Label>
              <select id="tipo" className="w-full p-2 border rounded">
                <option value="preventivo">Preventivo</option>
                <option value="correctivo">Correctivo</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción del Mantenimiento</Label>
              <Textarea id="descripcion" rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tecnico">Técnico Responsable</Label>
              <Input id="tecnico" type="text" required />
            </div>
            <Button type="submit">Registrar Mantenimiento</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

