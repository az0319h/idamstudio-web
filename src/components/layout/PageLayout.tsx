export default function PageLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="pt-18 pb-20 md:pt-22 md:pb-40 lg:pt-24 lg:pb-47.5">
         {children}
      </div>
   );
}
