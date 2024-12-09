import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Edit, WrenchIcon as WrenchScrewdriver } from 'lucide-react'
import Link from "next/link"

// Simulación de datos detallados de un extintor
const extintor = {
  id: 1,
  tipo: "ABC",
  capacidad: "10 lbs",
  agente: "Polvo químico seco",
  ubicacion: "Pasillo Principal",
  fechaFabricacion: "2023-01-15",
  fechaInstalacion: "2023-03-01",
  fechaUltimaInspeccion: "2023-09-15",
  fechaProximaInspeccion: "2024-03-15",
  fechaVencimiento: "2028-01-15",
  estadoActual: "Operativo",
  presion: "195 psi",
  numeroSerie: "EXT-2023-001",
  fabricante: "Extintores S.A.",
  certificaciones: ["UL", "FM"],
  pesoTotal: "15 lbs",
  altura: "50 cm",
  anchura: "20 cm",
  instruccionesUso: "1. Quitar el seguro. 2. Apuntar a la base del fuego. 3. Apretar la manija. 4. Mover de lado a lado.",
  clasificacionFuego: ["A", "B", "C"],
  garantia: {
    inicio: "2023-03-01",
    fin: "2025-03-01",
    proveedor: "SeguriFire Inc."
  },
  historialInspecciones: [
    { fecha: "2023-09-15", resultado: "Aprobado", observaciones: "Presión correcta, sin daños visibles" },
    { fecha: "2023-06-01", resultado: "Aprobado", observaciones: "Se reemplazó el manómetro" },
    { fecha: "2023-03-01", resultado: "Aprobado", observaciones: "Instalación inicial" }
  ]
}

export default function InformacionExtintor({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Información del Extintor</h1>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href="/extintores">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/extintores/${params.id}/editar`}>
              <Edit className="mr-2 h-4 w-4" /> Editar
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/extintores/${params.id}/mantenimiento`}>
              <WrenchScrewdriver className="mr-2 h-4 w-4" /> Realizar Mantenimiento
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información General</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tipo</TableCell>
                  <TableCell>{extintor.tipo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Capacidad</TableCell>
                  <TableCell>{extintor.capacidad}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Agente Extintor</TableCell>
                  <TableCell>{extintor.agente}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ubicación</TableCell>
                  <TableCell>{extintor.ubicacion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Número de Serie</TableCell>
                  <TableCell>{extintor.numeroSerie}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estado y Fechas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Estado Actual</TableCell>
                  <TableCell>{extintor.estadoActual}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fecha de Fabricación</TableCell>
                  <TableCell>{extintor.fechaFabricacion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fecha de Instalación</TableCell>
                  <TableCell>{extintor.fechaInstalacion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Última Inspección</TableCell>
                  <TableCell>{extintor.fechaUltimaInspeccion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Próxima Inspección</TableCell>
                  <TableCell>{extintor.fechaProximaInspeccion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fecha de Vencimiento</TableCell>
                  <TableCell>{extintor.fechaVencimiento}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Especificaciones Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Presión</TableCell>
                  <TableCell>{extintor.presion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Peso Total</TableCell>
                  <TableCell>{extintor.pesoTotal}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Altura</TableCell>
                  <TableCell>{extintor.altura}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Anchura</TableCell>
                  <TableCell>{extintor.anchura}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fabricante</TableCell>
                  <TableCell>{extintor.fabricante}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información Adicional</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Certificaciones</TableCell>
                  <TableCell>{extintor.certificaciones.join(", ")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Clasificación de Fuego</TableCell>
                  <TableCell>{extintor.clasificacionFuego.join(", ")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Instrucciones de Uso</TableCell>
                  <TableCell>{extintor.instruccionesUso}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Garantía</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Inicio de Garantía</TableCell>
                <TableCell>{extintor.garantia.inicio}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Fin de Garantía</TableCell>
                <TableCell>{extintor.garantia.fin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Proveedor</TableCell>
                <TableCell>{extintor.garantia.proveedor}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Inspecciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Resultado</TableHead>
                <TableHead>Observaciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extintor.historialInspecciones.map((inspeccion, index) => (
                <TableRow key={index}>
                  <TableCell>{inspeccion.fecha}</TableCell>
                  <TableCell>{inspeccion.resultado}</TableCell>
                  <TableCell>{inspeccion.observaciones}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

