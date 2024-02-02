import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobalFooter from "./MobalFooter";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full w-full lg:bg-[#141351]">
      <DesktopSidebar  currentUser={currentUser!}/>
      {/* <MobalFooter /> */}
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
