
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
const SearchInput = ({
   value,
   setValue,
   placeholder = "Search...",
   className,
   iconClassName,
   inputClassName,
   ...props
}) => {
   return (
      <div className={cn("relative flex items-center w-full max-w-md", className)}>
         <Search className={cn("absolute left-3 h-4 w-4 text-muted-foreground", iconClassName)} />
         <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={cn(
               "pl-10 pr-4 py-2 h-10 w-full bg-background border-border focus-visible:ring-primary",
               inputClassName,
            )}
            {...props}
         />
      </div>
   )
}

export default SearchInput

