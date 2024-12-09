import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Simulación de datos
const extintores = [
  { id: 1, tipo: 'ABC', ubicacion: 'Pasillo Principal', fechaVencimiento: '2024-06-15' },
  { id: 2, tipo: 'CO2', ubicacion: 'Sala de Servidores', fechaVencimiento: '2024-08-20' },
  { id: 3, tipo: 'Agua', ubicacion: 'Cafetería', fechaVencimiento: '2024-07-01' },
]

export default function Extintores() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Extintores</h1>
        <Button asChild>
          <Link href="/extintores/nuevo">Agregar Extintor</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tipo</TableHead>
            <TableHead>Ubicación</TableHead>
            <TableHead>Fecha de Vencimiento</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {extintores.map((extintor) => (
            <TableRow key={extintor.id}>
              <TableCell>{extintor.tipo}</TableCell>
              <TableCell>{extintor.ubicacion}</TableCell>
              <TableCell>{extintor.fechaVencimiento}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/extintores/${extintor.id}`}>Ver Detalles</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

