import { Loader as LoaderIcon } from "lucide-react"

export function Loader() {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-background p-14">
      <p className="sr-only">Cargando...</p>
      <LoaderIcon className="animate-spin w-8 h-8 text-foreground" />
    </div>
  )
}
