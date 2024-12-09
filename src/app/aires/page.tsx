import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Simulación de datos
const airesAcondicionados = [
  { id: 1, modelo: 'Samsung AR12', ubicacion: 'Oficina 101', ultimoMantenimiento: '2023-11-15' },
  { id: 2, modelo: 'LG Inverter', ubicacion: 'Sala de Juntas', ultimoMantenimiento: '2023-10-20' },
  { id: 3, modelo: 'Daikin FTXM', ubicacion: 'Recepción', ultimoMantenimiento: '2023-12-01' },
]

export default function AiresAcondicionados() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Aires Acondicionados</h1>
        <Button asChild>
          <Link href="/aires/nuevo">Agregar Aire Acondicionado</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Modelo</TableHead>
            <TableHead>Ubicación</TableHead>
            <TableHead>Último Mantenimiento</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {airesAcondicionados.map((aire) => (
            <TableRow key={aire.id}>
              <TableCell>{aire.modelo}</TableCell>
              <TableCell>{aire.ubicacion}</TableCell>
              <TableCell>{aire.ultimoMantenimiento}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/aires/${aire.id}`}>Ver Detalles</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

