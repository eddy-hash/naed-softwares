export default function ProjectPoster({ slug }: { slug: string }) {
  // For a more polished look, you can return different SVG mockups per slug.
  // This is a clean placeholder.
  return (
    <div className="w-full h-full bg-card/50 p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">NAED</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-destructive/50" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
          <span className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-3/4 bg-muted rounded" />
        <div className="h-2 w-1/2 bg-muted rounded" />
        <div className="grid grid-cols-3 gap-1 mt-2">
          <div className="h-8 bg-muted/50 rounded" />
          <div className="h-8 bg-muted/50 rounded" />
          <div className="h-8 bg-muted/50 rounded" />
        </div>
      </div>
    </div>
  );
}
