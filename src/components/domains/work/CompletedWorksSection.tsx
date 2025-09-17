import CompletedWorksGrid from "./CompletedWorksGrid";
import CompletedWorksList from "./CompletedWorksList";
import CompletedWorksToggle from "./CompletedWorksToggle";

export default async function CompletedWorksSection({
   view,
}: {
   view: string;
}) {
   console.log(view);
   let content;
   if (view === "grid") content = <CompletedWorksGrid />;
   else content = <CompletedWorksList />;
   return (
      <div>
         <CompletedWorksToggle />
         {content}
      </div>
   );
}
