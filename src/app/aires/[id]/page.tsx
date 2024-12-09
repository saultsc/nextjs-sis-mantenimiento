import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Edit, WrenchIcon as WrenchScrewdriver } from 'lucide-react'
import Link from "next/link"

// Simulación de datos detallados de un aire acondicionado
const aireAcondicionado = {
  id: 1,
  modelo: "Samsung AR12TVEAAWKNER",
  marca: "Samsung",
  tipo: "Split",
  capacidad: "12000 BTU",
  eficienciaEnergetica: "A++",
  ubicacion: "Oficina 101",
  fechaInstalacion: "2022-05-15",
  ultimoMantenimiento: "2023-11-20",
  proximoMantenimiento: "2024-05-20",
  estadoActual: "Operativo",
  nivelRefrigerante: "Óptimo",
  consumoEnergetico: "800 kWh/año",
  dimensiones: "998 x 330 x 210 mm",
  peso: "11.5 kg",
  nivelRuido: "19 dB(A)",
  garantia: {
    inicio: "2022-05-15",
    fin: "2025-05-15",
    proveedor: "ElectroMax S.A."
  },
  historialMantenimiento: [
    { fecha: "2023-11-20", tipo: "Preventivo", descripcion: "Limpieza de filtros y revisión general" },
    { fecha: "2023-05-18", tipo: "Correctivo", descripcion: "Recarga de refrigerante" },
    { fecha: "2022-11-10", tipo: "Preventivo", descripcion: "Limpieza de filtros" }
  ]
}

export default function InformacionAireAcondicionado({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Información del Aire Acondicionado</h1>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href="/aires">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/aires/${params.id}/editar`}>
              <Edit className="mr-2 h-4 w-4" /> Editar
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/aires/${params.id}/mantenimiento`}>
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
                  <TableCell className="font-medium">Modelo</TableCell>
                  <TableCell>{aireAcondicionado.modelo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Marca</TableCell>
                  <TableCell>{aireAcondicionado.marca}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tipo</TableCell>
                  <TableCell>{aireAcondicionado.tipo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Capacidad</TableCell>
                  <TableCell>{aireAcondicionado.capacidad}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Eficiencia Energética</TableCell>
                  <TableCell>{aireAcondicionado.eficienciaEnergetica}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ubicación y Estado</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ubicación</TableCell>
                  <TableCell>{aireAcondicionado.ubicacion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fecha de Instalación</TableCell>
                  <TableCell>{aireAcondicionado.fechaInstalacion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Último Mantenimiento</TableCell>
                  <TableCell>{aireAcondicionado.ultimoMantenimiento}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Próximo Mantenimiento</TableCell>
                  <TableCell>{aireAcondicionado.proximoMantenimiento}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Estado Actual</TableCell>
                  <TableCell>{aireAcondicionado.estadoActual}</TableCell>
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
                  <TableCell className="font-medium">Nivel de Refrigerante</TableCell>
                  <TableCell>{aireAcondicionado.nivelRefrigerante}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Consumo Energético</TableCell>
                  <TableCell>{aireAcondicionado.consumoEnergetico}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Dimensiones</TableCell>
                  <TableCell>{aireAcondicionado.dimensiones}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Peso</TableCell>
                  <TableCell>{aireAcondicionado.peso}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nivel de Ruido</TableCell>
                  <TableCell>{aireAcondicionado.nivelRuido}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Garantía</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Inicio de Garantía</TableCell>
                  <TableCell>{aireAcondicionado.garantia.inicio}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fin de Garantía</TableCell>
                  <TableCell>{aireAcondicionado.garantia.fin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Proveedor</TableCell>
                  <TableCell>{aireAcondicionado.garantia.proveedor}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aireAcondicionado.historialMantenimiento.map((mantenimiento, index) => (
                <TableRow key={index}>
                  <TableCell>{mantenimiento.fecha}</TableCell>
                  <TableCell>{mantenimiento.tipo}</TableCell>
                  <TableCell>{mantenimiento.descripcion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

