import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Wind, FireExtinguisher } from 'lucide-react'

// Simulación de datos
const equiposProximoMantenimiento = [
  { id: 1, tipo: 'Aire Acondicionado', ubicacion: 'Oficina 101', fechaMantenimiento: '2024-01-15' },
  { id: 2, tipo: 'Extintor', ubicacion: 'Pasillo Principal', fechaMantenimiento: '2024-01-20' },
  { id: 3, tipo: 'Aire Acondicionado', ubicacion: 'Sala de Juntas', fechaMantenimiento: '2024-01-25' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aires Acondicionados</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Extintores</CardTitle>
            <FireExtinguisher className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Equipos Próximos a Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Fecha de Mantenimiento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equiposProximoMantenimiento.map((equipo) => (
                <TableRow key={equipo.id}>
                  <TableCell>{equipo.tipo}</TableCell>
                  <TableCell>{equipo.ubicacion}</TableCell>
                  <TableCell>{equipo.fechaMantenimiento}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

