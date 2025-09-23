export default function DefaultLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <div className="px-4 pt-4 pb-20 md:pb-40 lg:pb-47.5">{children}</div>;
}
