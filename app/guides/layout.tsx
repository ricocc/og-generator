import Header from "@/components/header/Header"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
