import { EditorPreview as CTAPreviewEditor } from "@/components/ui/cta/editor-preview"

export function RightSide() {
  return (
    <div className="
      flex
      flex-col
      gap-4
      xl:flex-1
      w-full
    ">
      <CTAPreviewEditor />
    </div>
  )
}