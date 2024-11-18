import { Header } from "@/components/header";
import { LandingPage } from "@/components/landing-page";
import { TopHeader } from "@/components/top-header";
import Line from "@/components/ui/line";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <div className="bg-primary pl-24 pt-10">
        <Header />
        <Line />
        <LandingPage />
      </div>
    </div>
  );
}
